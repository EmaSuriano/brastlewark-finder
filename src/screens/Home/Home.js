import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '../../shared/TextField';
import ProfessionSelector from './components/ProfessionSelector';
import AppContainer from '../../shared/AppContainer';
import Title from '../../shared/Title';
import FiltersContainer from './components/FiltersContainer';
class HomeScreen extends Component {
  static propTypes = {
    data: PropTypes.object,
    name: PropTypes.string,
    professions: PropTypes.arrayOf(PropTypes.string),
    changeName: PropTypes.func,
    changeProfessions: PropTypes.func,
    isFilterApplied: PropTypes.bool,
  };

  render() {
    const {
      name,
      professions,
      changeName,
      changeProfessions,
      isFilterApplied,
    } = this.props;
    return (
      <AppContainer>
        <Title>Brastlewark Finder</Title>
        <FiltersContainer>
          <TextField value={name} onChange={changeName} />
          <ProfessionSelector
            onChange={changeProfessions}
            selected={professions}
          />
        </FiltersContainer>

        {isFilterApplied && <Link to="/gnome/1">Go to Gnome1</Link>}
      </AppContainer>
    );
  }
}

export default graphql(gql`
  query MyQuery {
    allGnomes {
      id
    }
  }
`)(HomeScreen);
