import { graphql, Link } from 'gatsby';
import React from 'react';

import { Hero } from '../components/Hero';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ArticleList } from '../ui/ArticleList';

import './index.scss';

const IndexPage = ({ data }) => {
  console.log(data);
  const { nodes } = data.allMdx;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        bgImgUrl="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg"
      >
        <h2>Hello visitor,</h2>
        <p>Lorem ipsum dolor sit amet, consectetur: </p>
        <ul>
          <li>web developer</li>
          <li>politico</li>
          <li>excepturi ipsam</li>
          <li>harum enim</li>
        </ul>
      </Hero>

      {
        nodes && (
          <div className="homepage__section">
            <ArticleList title="Blog" posts={nodes} />
          </div>

        )
      }
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title,
          path,
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;

export default IndexPage;
