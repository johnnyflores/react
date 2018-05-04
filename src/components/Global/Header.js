// Dependencies
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

// Data
import items from '../../data/menu';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
  {
    items && items.map(
      (item, key) => <MenuItem key={key} primaryText={<Link to={item.url}>{item.title}</Link>} />
    )
  }
  </IconMenu>
);

Menu.muiName = 'IconMenu';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <MuiThemeProvider>
          <div>
            <AppBar
              title="ReactJS"
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              iconElementRight={<Menu />}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Header;
