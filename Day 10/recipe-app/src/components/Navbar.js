import React from "react";
import { signOut } from "firebase/auth";

import { Link } from "react-router-dom";

import { auth } from "../firebase/firebase";

export default function Navbar(props) {
  async function onLogoutClicked() {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg- border border-3 border-white rounded m-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <h4>GetRecipe</h4>
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
          <i className="bi bi-list" style={{color: 'white'}}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {props.user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active text-white" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={onLogoutClicked}
                    className="btn btn-secondary text-white"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
