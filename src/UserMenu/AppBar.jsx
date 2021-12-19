import React from 'react';
// import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'centre',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ isAuthenticated }) => (
  <header styles={styles.header}>
    {/* <Navigation /> */}
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

export default AppBar;
