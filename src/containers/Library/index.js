// Dependencies
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class Library extends Component {
  static propTypes = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array,
    book: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      displaySingleBook: false
    };
  }

  componentWillMount() {
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = this.props;

    this.setState({
      displaySingleBook: id > 0
    });

    if (id > 0) {
      this.props.loadSingleBook({ id });
    } else {
      this.props.loadBooks();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = nextProps;

    if (nextProps.match.params !== this.props.match.params) {
      this.setState({
        displaySingleBook: id > 0
      });

      if (id > 0) {
        this.props.loadSingleBook({ id });
      }
    }
  }

  renderSingleBook(book) {
    return (
      <div>
        <h1>{book.title}</h1>
        <p>Autor: {book.author}</p>
        <p><img src={book.image} style={{ maxWidth: '300px' }} /></p>
        <MuiThemeProvider>
          <Link to="/library">
            <RaisedButton label="Go back" primary={true} icon={<ArrowBackIcon />} />
          </Link>
        </MuiThemeProvider>
      </div>
    );
  }

  renderBooksList(books) {
    return (
      <div>
        <MuiThemeProvider>
          <List>
            <Subheader>Library</Subheader>
            {
              books.map((book, key) => {
                return (
                  <div key={key}>
                    <Link to={`/library/${book.id}`}>
                      <ListItem
                        primaryText={book.author}
                        leftAvatar={<Avatar src={book.image} />}
                      />
                    </Link>
                  </div>
                )
              })
            }
          </List>
        </MuiThemeProvider>
      </div>
    );
  }

  render() {
    const {
      books,
      book
    } = this.props;

    if (isFirstRender(books) && isFirstRender(book)) {
      return null;
    }

    let show = this.renderBooksList(books);

    if (this.state.displaySingleBook && book.length > 0) {
      show = this.renderSingleBook(book[0]);
    }

    return (
      <div className="Library">
        {show}
      </div>
    );
  }
}

export default connect(state => ({
  books: state.library.books,
  book: state.library.book
}), actions)(Library);
