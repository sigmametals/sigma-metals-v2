import React from 'react';

import { Link } from 'gatsby';

import './ImageButton.scss';

interface ImageButtonProps {
  imgUrl: string;
  text: string;
  path: string;
}

export const ImageButton: React.SFC<ImageButtonProps> = ({ imgUrl, text, path }) => {

  return (
    <Link to={path}>
      <div
        className="image-button"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
        }}
      >
        <span className="image-button__text">{text}</span>
      </div>
    </Link>

  );

};
