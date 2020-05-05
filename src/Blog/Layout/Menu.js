import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <Link to="/" className="navbar-brand">Blog do Xim</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"> 
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/sobre" className="nav-link">Sobre</Link>
              </li>
              <li className="nav-item"> 
                <Link to="/categorias" className="nav-link">Categorias</Link>
              </li>
              <li className="nav-item"> 
                <Link to="/contato" className="nav-link">Contato</Link>
              </li>
              <li className="nav-item"> 
                <Link to="/login" className="nav-link" target="_blank">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
    )
}