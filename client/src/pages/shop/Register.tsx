import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa";
import '../../assets/Login.scss'; 

function SignUpForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });

    setErrors({
      ...errors,
      [evt.target.name]: ""
    });
  };

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setTimeout(()=>{
      window.location.href='http://localhost:5173/login'
    },2000);
    const { name, email, password } = state;

    let valid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!name) {
      newErrors.name = 'Name không thể bỏ trống';
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email không hợp lệ';
      valid = false;
    }

    if (password.length <= 6) {
      newErrors.password = 'Password phải dài hơn 6 kí tự';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      setTimeout(() => {
        setErrors({ name: "", email: "", password: "" });
      }, 2000);
      return;
    }

    setMessage(`Đăng kí thành công`);
    setState({ name: "", email: "", password: "" });
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <div className="form-container sign-up-container">
        <form onSubmit={handleOnSubmit}>
          <h1>Đăng Kí</h1>
          <div className="social-container">
            <a href="https://www.facebook.com/" className="social">
              <FaFacebook />
            </a>
            <a href="https://www.google.com/" className="social">
              <TiSocialGooglePlus />
            </a>
            <a href="https://web.telegram.org/" className="social">
              <FaTelegram />
            </a>
          </div>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <button type="submit">Sign Up</button>
          {message && <span className="success">{message}</span>}
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
