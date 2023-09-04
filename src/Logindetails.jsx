import { useState } from "react";

export default function Logindetails() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="hero-title">
        <p className="login-title">We are</p>
        <p className="login-title">Eclipse.</p>
      </div>
      <form>
        <input
          value={username}
          className="input-details"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder={username ? "" : "Username"}
        />
      </form>
      <form>
        <input
          value={password}
          className="input-details"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder={password ? "" : "Password"}
        />
      </form>
      <button className="login-button" type="submit">
        Login
      </button>
      <a href="#" className="forgotpw">
        Forgot Password?
      </a>
    </div>
  );
}
