import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
              Eric Diputado
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navBarSupportedContent"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    data-toggle="dropdown"
                  >
                    Portfolio
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      My website
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="jumbotron">
            <h1 className="display-4">I am Eric Diputado.</h1>
            <p className="Lead">
              Woah!!! A visitor of my website? Well hello there, as you can see
              my name is Eric and here is my website. This contains all the cool
              techy & geeky things about me. I hope you enjoy...
            </p>
          </div>
        </div>
      </div>
    );
  }
}
