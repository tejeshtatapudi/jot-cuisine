import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../fireBaseConfig";

function NavigationBar() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const email = user.email;
        const username = email.split("@")[0];
        setUsername(username);
        setIsLoggedIn(true);
      } else {
        setUsername("");
        setIsLoggedIn(false);
        navigate("/Login");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/Login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log("Error catched successfully");
      });
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Joy Of Telugu Cuisine
        </a>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav align-items-center mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    SignUp
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <span className="nav-link" href="">
                    {username}
                  </span>
                </li>
                <li className="nav-item">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={handleLogout}
                  >
                    SignOut
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
