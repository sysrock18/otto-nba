import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Error404 extends Component {
  render() {
    return (
      <section name="Error404">
        <h1>Not Found</h1>
        <Link to="/">
          Go back to home
        </Link>
      </section>
    );
  }
}

export default Error404;
