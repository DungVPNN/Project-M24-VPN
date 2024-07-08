import React, { useState } from "react";
import "../../assets/Login.scss";
import SignInForm from "./Login";
import SignUpForm from "./Register";

export default function Form() {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text: any) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome!</h1>
              <div className="image-shop">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d51c7c141340827.6251ea13113ee.png" alt="" />
              </div>
              <p>
                Nếu bạn đã có tài khoản hãy đến trang đăng nhập
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome!</h1>
              <div className="image-shop">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d51c7c141340827.6251ea13113ee.png" alt="" />
                </div>
              <p>Nếu bạn chưa có tài khoản hãy đăng kí</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}