import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* <div className="container"> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            GitHub U|O
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/organisations">
                  Orgainsations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
}

export default Header;
