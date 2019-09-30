module.exports = {
  query: `{
    allMdx {
      distinct(field: frontmatter___category)
    }
  }`,
  prefix: "/category/",
  transformer: ({ data }) => data.allMdx.distinct,
  slugOptions: {
    lower: true
  }
};
