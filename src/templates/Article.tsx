import React from 'react';
import { graphql } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';

import './Article.scss';
import { Hero } from '../components/Hero';

interface ArticleProps {
    data: any;
}

const Article: React.SFC<ArticleProps> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="article article__container">
        <Hero bgImgUrl={frontmatter.heroImg} />
        <div className="article__content">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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