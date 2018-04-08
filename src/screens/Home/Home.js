import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return <Link to="/gnome/1">Go to Gnome1</Link>;
  }
}
