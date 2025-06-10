import { useState } from "react";
import axios from "axios";

export default function SignupForm({ onSignupSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://smurfbusexpensessitebackend.onrender.com/account", { username, password });
      onSignupSuccess(res.data); // log in or switch to login view
    } catch (err) {
      setError("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Create Account</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
