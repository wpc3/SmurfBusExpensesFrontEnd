import { useState } from "react";
import LoginForm from "./LoginPage";
import SignupForm from "./SignUpFrom";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const [showLogin, setShowLogin] = useState(true);
    const navigate = useNavigate(); // Hook for navigation
  
    const handleAuthSuccess = (userData) => {
      console.log("Logged in user:", userData);
      // Save user info or token here if needed
      navigate("/home"); // Redirect to Home
    };
  
    return (
      <div>
        {showLogin ? (
          <LoginForm onLoginSuccess={handleAuthSuccess} />
        ) : (
          <SignupForm onSignupSuccess={handleAuthSuccess} />
        )}
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Need an account?" : "Already have an account?"}
        </button>
      </div>
    );
  }
