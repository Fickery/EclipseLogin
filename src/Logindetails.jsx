import { useState } from "react";

export default function Logindetails() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const users = [
    { username: "user1", password: "password" },
    { username: "user2", password: "password" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      // User found, show congratulatory message
      setMessage("Congratulations! You have successfully logged in.");
    } else {
      // User not found, show error message
      setMessage("User not found. Please check your credentials.");
    }
  };

  const handleUsernameClick = () => {
    // Clear the message when username is clicked
    setMessage("");
  };

  const handlePasswordClick = () => {
    // Clear the message when password is clicked
    setMessage("");
  };

  return (
    <div className="container">
      <div className="hero-title">
        <p className="login-title">We are</p>
        <p className="login-title">Eclipse.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          className="input-details"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          onClick={handleUsernameClick} // Clear message when username is clicked
          placeholder={username ? "" : "Username"}
        />
        <input
          value={password}
          className="input-details"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onClick={handlePasswordClick} // Clear message when password is clicked
          placeholder={password ? "" : "Password"}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      {message && (
        <div
          style={{
            color: message.includes("not found") ? "red" : "blue",
            fontSize: "12px",
            marginTop: "10px",
            fontWeight: "1000",
          }}>
          {message}
        </div>
      )}
      <a href="#" className="forgotpw">
        Forgot Password?
      </a>
    </div>
  );
}
