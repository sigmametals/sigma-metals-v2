import { Link } from 'gatsby';
import React from 'react';
import { ArticleLink } from './ArticleLink';

interface ArticleList {
  title: string;
  posts: any[];
}

export const ArticleList: React.SFC<ArticleList> = ({ title, posts }) => {

  const capitalizedTitle = title[0].toUpperCase() + title.slice(1);

  return (
    <section>
      <h2>{capitalizedTitle}</h2>
      {
        posts.map((post) => {
          const { frontmatter: article } = post;
          return (
            <ArticleLink
              {...article}
            />
          );
        })
      }
    </section>
  );

};
