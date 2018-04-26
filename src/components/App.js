// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

// Data
import items from '../data/menu';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
            title="App ReactJS"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </MuiThemeProvider>
        <Header
          title="ReactJS"
          items={items}
        />
        <Content body={children} />
        <Footer />


      </div>
    );
  }
}

export default App;
