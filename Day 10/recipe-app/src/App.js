import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/modal";
// import "bootstrap/js/dist/button"

import Navbar from "./components/Navbar";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import RecipePage from "./components/recipes/RecipePage";
import RequiresAuth from "./components/RequiresAuth";
import Spinner from "./components/Spinner";

export default function App() {
  const [user, setUser] = useState(null);
  const [userUpdated, setUserUpdated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserUpdated(true);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} />

      {userUpdated ? (
        <Routes>
          <Route
            path="/"
            element={
              <RequiresAuth user={user}>
                <RecipePage />
              </RequiresAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      ) : (
        <div className="mt-3 text-center">
          <Spinner />
        </div>
      )}
    </BrowserRouter>
  );
}
