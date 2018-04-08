import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class GnomeScreen extends Component {
  static propTypes = {
    match: PropTypes.object,
  };
  render() {
    const id = this.props.match.params.id;

    return <Link to="/">Gnome {id} - Go Back</Link>;
  }
}
