import React from 'react';
import { Link } from 'gatsby';
import { ArticleLink } from './ArticleLink';


interface ArticleList {
  posts: any[];
};

export const ArticleList: React.SFC<ArticleList> = ({ posts }) => {
  console.log(posts);
  return (
    <section>
      {
        posts.map(post => {
          const { frontmatter: article } = post;
          return (
            <ArticleLink
              {...article}
            />
          )
        })
      }
    </section>
  )

};