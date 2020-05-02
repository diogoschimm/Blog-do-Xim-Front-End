import React from 'react';

import imgHomeBg from '../../Contents/Images/home-bg.jpg';

export default function Header() {
    return (
     <header className="masthead" style={styles}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Blog do Xim</h1>
                <span className="subheading">De dev para dev</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

const styles = {
    backgroundImage: `url('${imgHomeBg}')`
};