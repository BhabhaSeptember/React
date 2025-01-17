import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import "./welcome.css";
import todoImage from "../assets/todoImage.png";

export default function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/homepage");
      }
    });
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/homepage");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleRegister = () => {
    if(registerInformation.email !== registerInformation.confirmEmail) {
        alert("Email does not match!")
        return
    } else if (registerInformation.password !== registerInformation.confirmPassword) {
        alert("Passwords do not match!")
        return
    }

    createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password)
      .then(() => {
        navigate("/homepage");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="welcome">
        <img src={todoImage} className="todo-image"/>
      <h1>Todo-List</h1>
      <div className="login-register-container">
          {isRegistering ? (
            <>
              <input
                type="email"
                placeholder="Email"
                value={registerInformation.email}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    email: e.target.value
                  })
                }
              />
              <input
                type="email"
                placeholder="Confirm Email"
                value={registerInformation.confirmEmail}
                onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      confirmEmail: e.target.value
                    })
                  }
             
             />
              <input
                type="password"
                placeholder="Password"
                value={registerInformation.password}
                onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      password: e.target.value
                    })
                  }
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={registerInformation.confirmPassword}
                onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      confirmPassword: e.target.value
                    })
                  }
              />

              <button className="signin-register-button" onClick={handleRegister}>Register</button>
              <button className="create-account-button"
                onClick={() => {
                  setIsRegistering(false);
                }}
              >
                {" "}
                Go back{" "}
              </button>
            </>
          ) : (
            <>
              <input type="email" onChange={handleEmailChange} value={email} placeholder="Email"/>
              <input
                type="password"
                onChange={handlePasswordChange}
                value={password}
                placeholder="Password"
              />
              <button className="signin-register-button" onClick={handleSignIn}>Sign In</button>
              <button 
              className="create-account-button"
                onClick={() => {
                  setIsRegistering(true);
                }}
              >
                Create an account
              </button>
            </>
          )}
        </div>
      </div>
  );
}
