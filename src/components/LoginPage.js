

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // Create states for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogingClick = (event) => {
    // To prevent reload of page
    event.preventDefault();

    console.log(email);
    console.log(password);

    // Next step:
    // To get the email and password fields and send them to some dAPI to database for checking
    // How to get email and password?
    // That can be achieved by creating React controlled componenet
    // So, we should make out input boxes as react cont

    // Validation of email and password

    // Once your states are ready, we will make some API call to backend
    //
    if (email === "mariam@123" && password === "asd") {
      // If my credentials match

      // key value
      sessionStorage.setItem("isAuthenticated", true);

      // Server send us JWT token
      navigate("/dashboard");
    } else {
      // Show error message
      setError("Email or password invalid");
    }
  };

  const handelEmailChange = (eventDetails) => {
    setEmail(eventDetails.target.value);
  };

  const handelPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //const btnstyle = { margin: "8px 0" };
  return (
    <div>
      LOGIN user: mariam@123 and asd
      <form onSubmit={handleLogingClick}>
        <br />
        <label> Email :</label>
        <input
          onChange={handelEmailChange}
          value={email}
          type="email"
          required
        />
        <br />
        <label> Password :</label>
        <input
          onChange={handelPasswordChange}
          value={password}
          type="password"
          required
        />
        <br />
        <button>Login</button>
        <br />
        {error}
        {/* <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Register
        </Button> */}
      </form>
    </div>
  );
}

export default LoginPage;
