import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  AppContainer,
  Title,
  Button,
  Message,
} from '../../shared/components';
import ProfessionSelector from './components/ProfessionSelector';
import FiltersContainer from './components/FiltersContainer';
import GnomeResult from './components/GnomeResult';

class HomeScreen extends Component {
  static propTypes = {
    data: PropTypes.object,
    criteria: PropTypes.object,
    isFilterApplied: PropTypes.bool,
    setGnomeCriteria: PropTypes.func,
  };

  state = {
    name: '',
    professions: [],
  };

  changeName = name => this.setState({ name });

  changeProfessions = professions => this.setState({ professions });

  searchGnomes = () => this.props.setGnomeCriteria(this.state);

  render() {
    const { isFilterApplied, criteria } = this.props;
    const { name, professions } = this.state;
    return (
      <AppContainer>
        <Title>Brastlewark Finder</Title>
        <FiltersContainer>
          <TextField value={name} onChange={this.changeName} />
          <ProfessionSelector
            onChange={this.changeProfessions}
            selected={professions}
          />
          <Button onClick={this.searchGnomes}>Search</Button>
        </FiltersContainer>
        {!isFilterApplied ? (
          <Message>Please filter by something to search gnomes!</Message>
        ) : (
          <GnomeResult criteria={criteria} />
        )}
      </AppContainer>
    );
  }
}

export default HomeScreen;
