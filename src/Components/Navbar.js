import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Card">
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" style={{margin:"0",padding:"0"}}>
        <div className="container-fluid" style={{background:"#303030",padding:"8px"}}>
          <Link className="navbar-brand" to="/" style={{background:"#fff",borderRadius:"6px", padding:"1px 11px 1px" ,fontWeight:"700"
          }}>
            NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/business"
                  style={{ color: "white" }}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainement
                </Link>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
