import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.prevenDefault();

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      console.log(userCred);
      navigate("/");

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="p-3 m-3 border border-3 border-white rounded">
      <div class="container text-white">
        <h1 className="text-center">Enter your login credentials</h1>
        <hr />
        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-outline-light mb-3">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
