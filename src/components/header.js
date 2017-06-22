import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import { Link } from 'react-router-dom';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';

const Header = () => (
  <AppBar title='Random Profiles' leftIcon='menu' rightIcon="more_vert">
    <Navigation type='horizontal'>
      <Link className="btn btn-primary" to="/">
        <FontIcon>home</FontIcon> Home
      </Link>
      <Link className="btn btn-primary" to="/search">
        <FontIcon>search</FontIcon> Search
      </Link>
      <Link className="btn btn-primary" to="/contacts">
        <FontIcon>import_contacts</FontIcon> Contacts
      </Link>
    </Navigation>
  </AppBar>
);

export default Header;
