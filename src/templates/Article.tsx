import React from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { Hero } from '../components/Hero';
import './Article.scss';

interface ArticleProps {
    data: any;
}

const Article: React.SFC<ArticleProps> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { mdx } = data; // data.mdx holds our post data
  const { frontmatter, body } = mdx;
  console.log('MDX', mdx);
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="article article__container">
        <Hero bgImgUrl={frontmatter.heroImg} />
        <div className="article__content">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div>
            <MDXRenderer>
              {body}
            </MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        heroImg
      }
    }
  }
`;

export default Article;
