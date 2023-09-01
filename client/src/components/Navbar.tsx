import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Skill Track
        </Typography>
        <Button color="inherit">
          <Link
            to="/notifications"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Notifications
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="/account"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Account
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="/logout"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Logout
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
