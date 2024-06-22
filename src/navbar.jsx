import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from './tooltip';


const navItems = [
  { text: 'Home', path: '/homepage', description: 'Home Page', page: 'home' },
  { text: 'Create Account', path: '/createaccount/', description: 'Open a new account at online banking', page: 'createaccount' },
  { text: 'Deposit', path: '/deposit/', description: 'Put money in your actual account', page: 'deposit' },
  { text: 'Withdraw', path: '/withdraw/', description: 'Withdraw a valid amount of money available in your account', page: 'withdraw' },
  { text: 'All Data', path: '/alldata/', description: 'Display data', page: 'alldata' },
];

const Navigation = () => {
  const [activePage, setActivePage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navbar bg-light navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="light">
      <div className="container-fluid">
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/dotty/80/online-payment-with-a-credit-card.png"
          alt="Online Banking"
        />

        <div className="navbar-brand roboto-bold">Online Banking</div>

        <button className="navbar-toggler"
         type="button" 
         data-bs-toggle="collapse" 
         data-bs-target="#navbarNav" 
         aria-controls="navbarNav"
         aria-expanded="false" 
         aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center roboto-regular" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.text} className={`nav-item ${activePage === item.page ? 'active' : ''}`}>
                <Link
                  className="nav-link hover-effect"
                  onClick={() => handleClick(item.page)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to={item.path}
                >
                  {item.text}
                </Link>
                {showTooltip && <Tooltip text={item.description} />}
                
              </li>
            ))}
          </ul>
        </div>

        <div className="justify-content-end d-flex">  {/* Added d-flex for horizontal alignment */}
          <button>
            <img width="16" 
            height="16" 
            src="https://img.icons8.com/tiny-glyph/16/bot.png" 
            alt="Bot" />
          </button>
          <button>Login</button>
        </div>

       
      </div>
    </nav>
  );
};

export default Navigation;
