import React from "react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div>
      <div className="p-3 m-3 border border-3 border-white rounded bg-secondary">
        <div className="container d-flex">
          <div className="container rounded bg-white m-3">
            <img src="" alt="" />
          </div>
          <div className="container rounded bg-white m-3">
            <ul>
              <li>Name:</li>
              <li>Name:</li>
              <li>Name:</li>
            </ul>
          </div>
        </div>
      </div>
      <Link className="nav-link text-white" to="/EditProfile">
        <div className="m-3 d-grid gap-2">
          <button className="btn btn-outline-light" type="button">
            Edit my profile
          </button>
        </div>
      </Link>
    </div>
  );
}
