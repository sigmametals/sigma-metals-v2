import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ArticleList } from '../ui/ArticleList';

interface CategoryPageProps {
  location: any;
  pageContext?: any;
  data?: any;
}

const CategoryPage: React.SFC<CategoryPageProps> = ({ location, pageContext, data }) => {
  // console.log('***DATA')
  // return (
  //   <h1>Hello World</h1>
  // );
  console.log('**CATEGORY PAGE', data);
  const { category } = pageContext;

  const { nodes: posts } = data.allMdx;
  // posts = posts.map()
  console.log('DATA', posts);
  return (
    <Layout>
      <SEO title={`Category: ${category}`}/>
      <div>
        <ArticleList title={category} posts={posts} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(filter: {frontmatter: {category: {eq: $category}}}) {
      nodes {
        frontmatter {
          category
          date
          heroImg
          path
          title
        }
      }
    }
  }
`;

export default CategoryPage;
