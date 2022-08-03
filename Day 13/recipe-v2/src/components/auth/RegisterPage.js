import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/firebase';
import Button from "../Button";

export default function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function onFormSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log(userCred.user);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <div className="p-3 m-3 border border-3 border-white rounded">
      <div class="container text-white">
        <h1 className="text-center">Register new account</h1>
        <hr/>
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
            <Button loading={loading}>Register</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
