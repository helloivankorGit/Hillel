import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
function Login() {
  const { setIsUserLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function HandleSubmit(event) {
    event.preventDefault();
    if (email === "tester@gmail.com" && password === "qwerty123") {
      localStorage.setItem("isLogin", true);
      setIsUserLogin(true);
    } else {
      localStorage.clear();
      alert("Wrong email or password");
    }
  }

  return (
    <div class="container">
      <form onSubmit={HandleSubmit}>
        <div className="field">
          <label for="uname">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label for="psw">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
