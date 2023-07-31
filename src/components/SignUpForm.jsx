import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", { 
      method: "POST"});
    const result = await response.json();
    setToken(result.token);
    alert("Welcome, " + (username) + "!");
    setPassword("");
    setUsername("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <p></p>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            required
            minLength="8"
            maxLength="14"
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </label>
        <p></p>
        <button>Submit</button>
      </form>
    </>
  );
}