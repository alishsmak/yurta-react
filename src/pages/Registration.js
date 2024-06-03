import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Registration.css';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle form submission
    console.log("Form submitted:", { email, password, rememberMe });
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRememberMe(false);
  };

  return (
    <div className="App">
      <div className="log-container">
        <div className="logo">
          <Link className="logo" to="/">
            <img src="../image/logo.jpg" alt="" width="60px" height="60px" />
            <h2>YurtaHome</h2>
          </Link>
        </div>
        <div className="form-container">
          <h2>Присоединиться к сообществу</h2>
          <p>Пожалуйста заполните анкету</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите свою почту"
                required
              />
            </div>
            <div className="form-group">
              <label>Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                required
              />
            </div>
            <div className="form-group">
              <label>Повторите пароль</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Повторите пароль"
                required
              />
            </div>
            <div className="form-group">
           
              <label>
                <input className='checkbox'
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}/>
           
              </label>
            </div>
            <div className="form-actions">
              <button type="button" onClick={handleCancel}>Отменить</button>
              <button type="submit">Зарегистрироваться</button>
            </div>
          </form>
          <p>
            Создавая личный кабинет вы соглашаетесь с{' '}
            <a href="#privacy">Условиями конфиденциальности</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
