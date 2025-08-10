import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo">:)</div>
      <nav className={open ? 'nav active' : 'nav'}>
        <ul className="nav-list">
          <li><Link to="/">Library</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(o => !o)}>
        &#9776;
      </button>
    </header>
  );
}