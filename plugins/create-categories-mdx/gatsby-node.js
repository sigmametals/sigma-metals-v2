const fs = require('fs')
const slugify = require('slug')

const defaultOptions = require('./defaults');

const { pathify } = require('./internals');


const onCreateNode = ({ node, actions, reporter }, pluginOptions) => {
  const { createNodeField } = actions;
  // reporter.panic(node.internal.type);
  if (node.internal.type === `Mdx`) {
    const { slugOptions } = {
      ...defaultOptions,
      ...pluginOptions
    };
    const {
      frontmatter: { category }
    } = node;

    if (!category) return;

    createNodeField({
      node,
      name: "category",
      value: slugify(category, { ...slugOptions }).toLowerCase()
    });
  }
};

const createPages = async (
  { graphql, actions, reporter },
  pluginOptions
) => {
  const { createPage } = actions;
  const { templatePath, prefix, query, transformer } = {
    ...defaultOptions,
    ...pluginOptions
  };

  const data = await graphql(query);
  const categories = transformer(data);

  // reporter.panic(JSON.stringify({data, categories}));
  if (!templatePath) {
    reporter.panic(`
      "templatePath" is a required option for gatsby-plugin-categories
    `);
  }

  if (!fs.existsSync(templatePath)) {
    reporter.panic(`
      The template path passed to gatsby-plugin-categories does not exist
      ${templatePath}
    `);
  }

  const categorySet = new Set(categories);


  categorySet.forEach(category => {
    createPage({
      path: pathify(prefix, category),
      component: templatePath,
      context: {
        category
      }
    });
  });
};

module.exports = {
  onCreateNode,
  createPages,
}