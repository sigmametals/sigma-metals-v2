import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss';

interface HeaderProps {
  siteTitle: string;
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <h1 className="header__text">
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header;
