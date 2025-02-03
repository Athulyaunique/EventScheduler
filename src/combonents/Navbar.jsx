import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the access token from localStorage
    localStorage.removeItem('accessToken');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="nav1">
      <nav
        className="navbar navbar-expand-lg mb-4 bg-primary"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}
      >
        <div className="container-fluid">
          {/* Left-aligned brand */}
          <a className="navbar-brand text-white" href="#">
            Event Scheduler
          </a>

          {/* Navbar toggler (for responsiveness) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Right-aligned navigation links */}
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{ justifyContent: 'flex-end' }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/home/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* Logout Button */}
                <button
                  className="nav-link text-white btn btn-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;