import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);

  // Check localStorage on load
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");

    if (storedUser) {
      // If there's a user in localStorage, dispatch login
      dispatch(login({ userData: JSON.parse(storedUser) }));
    } else {
      // No user found, ensure logged out state
      dispatch(logout());
    }

    setLoading(false);
  }, [dispatch]);

  // Check authStatus and get the current user if authenticated
  useEffect(() => {
    if (authStatus) {
      authService
        .getCurrentUser()
        .then((userData) => {
          if (userData) {
            // Persist the user data in localStorage
            localStorage.setItem("userData", JSON.stringify(userData));
            dispatch(login({ userData }));
          } else {
            dispatch(logout());
            localStorage.removeItem("userData");
          }
        })
        .finally(() => setLoading(false));
    }
  }, [authStatus, dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
