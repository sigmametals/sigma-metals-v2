import React, { useState, MouseEvent } from 'react';
import { Link, graphql } from 'gatsby';

import './Navigation.scss';
import { ImageButton } from '../ui/ImageButton';

interface NavigationProps {};


const Navigation: React.SFC<NavigationProps> = () => {

  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavClick = (e: MouseEvent) => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={`navigation navigation--is-open-${isNavOpen}`}
    >

      <button
        className={`navigation__button navigation__button--is-open-${isNavOpen}`}
        onClick={handleNavClick}
      >
        <div className="navigation__hamburger">
          <div className="navigation__bar"/>
          <div className="navigation__bar"/>
          <div className="navigation__bar"/>
        </div>
      </button>

      {
        isNavOpen && (
          <div className="navigation__menu-overlay">
            <ul>
              <ul>
                <h3></h3>
                <li>
                  <ImageButton
                    imgUrl="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
                    text="Home"
                    path="/"
                  />
                </li>
              </ul>
              <ul>
                <h3>Writings</h3>
                <li>
                  <ImageButton
                    imgUrl="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
                    text="Political Junk"
                    path="/category/politics"
                  />
                </li>
                <li>
                  <ImageButton
                    imgUrl="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg"
                    text="Econ Trash"
                    path="/category/economics"
                  />
                </li>
                <li>
                  <ImageButton
                    imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6wElCXyjK2N9jexx2HXbPASoMtBwPrEplw9wlzkXNICoQqV6"
                    text="Software Bugs"
                    path="/category/software"
                  />
                </li>
                <li>
                  <ImageButton
                    imgUrl="https://cdn5.f-cdn.com/contestentries/1301217/27758306/5acbe9c5814e4_thumb900.jpg"
                    text="Nerdy Nonsense"
                    path="/blog/my-first-post"
                  />
                </li>
              </ul>
              <ul>
                <h3>Apps</h3>
                <li>
                  <ImageButton
                    imgUrl="https://cdn5.f-cdn.com/contestentries/1301217/27758306/5acbe9c5814e4_thumb900.jpg"
                    text="DM's Screen"
                    path="/blog/my-first-post"
                  />
                </li>
              </ul>
            </ul>
          </div>
          
        )
      }
      
    </nav>
  )

};


export default Navigation;