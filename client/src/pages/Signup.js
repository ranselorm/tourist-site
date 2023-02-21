import { useState, useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useContext(AuthContext);

  const submitChangeHandler = async (e) => {
    e.preventDefault();
    console.log({ username, email, password });

    const signup = async () => {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setIsLoading(false);
      }

      if (response.ok) {
        setEmail("");
        setUsername("");
        setPassword("");
        dispatch({ type: "LOGIN", payload: json });
      }
    };

    signup();
  };

  return (
    <form className="signup" onSubmit={submitChangeHandler}>
      {error && <div className="error">{error}</div>}
      <h2>Signup</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <button type="btn">Sign Up</button>
      </div>
    </form>
  );
};

export default Signup;
