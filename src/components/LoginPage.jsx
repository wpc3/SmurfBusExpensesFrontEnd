import { useState } from "react";
import axios from "axios";

export default function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://smurfbusexpensessitebackend.onrender.com/login", { username, password });
      onLoginSuccess(res.data); 
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
