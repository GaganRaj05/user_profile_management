import React from 'react';
import {Link} from "react-router-dom"

export default function NavBar(params) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">WEB APPEARANCE</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
            <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                      Admin
                </Link>
            </li>
          </ul>
          </div>
      </div>
    </nav>
    )
};
