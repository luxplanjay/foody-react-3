import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import appLogo from '../logo.png';
import avatar from '../avatar.jpg';

const navItems = ['menu', 'about', 'contact', 'delivery'];

const AppHeader = () => (
  <header className="Header">
    <div className="Header__logo">
      <Logo image={appLogo} width={100} height={100} />
    </div>
    <div className="menu">
      <Navigation items={navItems} />
    </div>
    <div className="Header__usermenu">
      <UserMenu avatar={avatar} name="Bob Ross" />
    </div>
  </header>
);

export default AppHeader;
