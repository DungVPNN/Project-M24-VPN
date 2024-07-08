import React, { useState, useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa";
import '../../assets/Login.scss';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ username: string, password: string, login: string }>({ username: '', password: '', login: '' });
  const [message, setMessage] = useState<string>('');

  const [showForm, setShowForm] = useState<boolean>(true); // State to manage form visibility

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { username: '', password: '', login: '' };

    if (!username) {
      newErrors.username = 'Name không thể bỏ trống';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Mật khẩu không thể bỏ trống';
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    if (username === 'admin' && password === 'admin') {
      setErrors({ username: '', password: '', login: '' });
      setMessage('Đăng nhập thành công');
      setTimeout(() => {
        window.location.href = 'http://localhost:5173/admin';
      }, 2000);
    } else {
      setErrors({ ...newErrors, login: 'Không đúng tài khoản hoặc mật khẩu' });
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setShowForm(false); // Hide form after success message
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (errors.username || errors.password || errors.login) {
      const timer = setTimeout(() => {
        setErrors({ username: '', password: '', login: '' });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <div className="form-container sign-in-container">
      {showForm && ( // Conditionally render the form based on showForm state
        <form onSubmit={handleLogin}>
          <h1>Đăng Nhập</h1>
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
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              name="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
          {errors.login && <span className="error-message">{errors.login}</span>}
          {message && <span className="success-message">{message}</span>}
        </form>
      )}
    </div>
  );
};

export default Login;
