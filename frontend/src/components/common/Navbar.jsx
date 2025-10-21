import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">FRA DSS</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {user && (
          <>
            <li><Link to="/claims">Claims</Link></li>
            <li><Link to="/maps">Maps</Link></li>
            {user.role === 'admin' && <li><Link to="/admin">Admin</Link></li>}
          </>
        )}
      </ul>
      <div className="nav-auth">
        {user ? (
          <button onClick={logout} className="btn-logout">Logout</button>
        ) : (
          <>
            <Link to="/login" className="btn-login">Login</Link>
            <Link to="/register" className="btn-register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
