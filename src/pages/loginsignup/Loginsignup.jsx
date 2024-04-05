import React from "react";
import "./Loginsignup.css";
function Loginsignup() {
  return (
    <div className="loginsignup">
      <div className="loginsignupcontainer">
        <h1>Sign up</h1>
        <div className="fileds">
          <input type="text " placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password " placeholder="Password" />
        </div>
        <button>Countinue</button>
        <p className="login">
          Already have an account? <span>Login here</span>
        </p>
      </div>
    </div>
  );
}

export default Loginsignup;
