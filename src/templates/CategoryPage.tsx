import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ArticleList } from '../ui/ArticleList';
import { graphql } from 'gatsby';



interface CategoryPageProps {
  location: any;
  pageContext: any;
  data: any;
}


const CategoryPage: React.SFC<CategoryPageProps> = ({ location, pageContext, data }) => {
  const { category } = pageContext;

  let { nodes: posts } = data.allMarkdownRemark;
  // posts = posts.map()
  console.log('DATA', posts);
  return (
    <Layout>
      <SEO title={`Category: ${category}`}/>
      <div>
        <ArticleList title={category} posts={posts} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          path
          date
          category
          heroImg
        }
      }
    }
  }
`

export default CategoryPage;