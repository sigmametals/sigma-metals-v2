import React from 'react';

import './Footer.scss';

interface FooterProps {};

const Footer: React.SFC<FooterProps> = () => {

  return (
    <footer className="footer">
      © Sushil Tailor {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  );

};

export default Footer;