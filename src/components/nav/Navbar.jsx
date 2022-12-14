import React from 'react';
import Favicon from '../assets/favicon.ico'

function Navbar() {
  return (
      <header class="fixed-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <div class="container-fluid">
          <div class="logos">
            <a href="/">
              <img src={ Favicon}  alt="Favicon"/>
            </a>
          </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 gap-3">
            <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#inicio">Inicio</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#Productos">Productos</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#Historia">Historia</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#Contacto">Contacto</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
