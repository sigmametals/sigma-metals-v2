import React from 'react';
import { Link } from 'gatsby';
import { ArticleLink } from './ArticleLink';


interface ArticleList {
  title: string;
  posts: any[];
};

export const ArticleList: React.SFC<ArticleList> = ({ title, posts }) => {
  console.log(posts);
  return (
    <section>
      <h2>{ title }</h2>
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