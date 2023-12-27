/*


import React from 'react';
import { Link } from 'react-router-dom';

export default function sidebar() {
  return (
  <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <Link className="sidebar-brand" to="/">
          <span className="align-middle">AdminKit</span>
        </Link>

        <ul className="sidebar-nav">
          <li className="sidebar-header">
            Pages
          </li>

          <li className="sidebar-item">
            <Link className="sidebar-link" to="/users">
              <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Users</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

*/

import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <Link to="/" className="sidebar-brand">
          <span className="align-middle">Admin Dashboard</span>
        </Link>

        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">
              <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Users</span>
            </Link>
          </li>

          <li className="sidebar-header">Pages</li>

          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">
              <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/login" className="sidebar-link">
              <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Sign In</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/register" className="sidebar-link">
              <i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">Sign Up</span>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="/profile" className="sidebar-link">
              <i className="align-middle" data-feather="book"></i> <span className="align-middle">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
