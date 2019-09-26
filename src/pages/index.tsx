import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { ArticleList } from "../ui/ArticleList";

const IndexPage = ({ data }) => {
  console.log(data);
  const { nodes } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Home" />

      {
        nodes && <ArticleList posts={nodes} />
      }
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          path
          date
        }
      }
    }
  }
`;

export default IndexPage;