import React from 'react';
import { Link } from 'gatsby';

import './ArticleLink.scss';

interface ArticleLink {
  path: string;
  title: string;
  date: string;
}

export const ArticleLink: React.SFC<ArticleLink> = ({ path, title, date }) => {
  return (
    <Link to={path}>
      <div className="article-link">
        <h3>
          {title}
        </h3>
        <span>{date}</span>
      </div>
    </Link>
  )

};