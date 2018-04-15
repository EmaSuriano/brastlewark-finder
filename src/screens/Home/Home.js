import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Title, Button, Message } from '../../shared/components';
import ProfessionSelector from './components/ProfessionSelector';
import FiltersForm from './components/FiltersForm';
import GnomeResult from './components/GnomeResult';
import HomeGrid from './components/HomeGrid';

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

  onSubmit = evt => {
    evt.preventDefault();
    this.searchGnomes();
  };

  render() {
    const { isFilterApplied, criteria } = this.props;
    const { name, professions } = this.state;
    const disabled = !this.state.name && this.state.professions.length === 0;
    return (
      <HomeGrid>
        <Title>Brastlewark Finder 🔎</Title>
        <FiltersForm onSubmit={this.onSubmit}>
          <TextField
            value={name}
            onChange={this.changeName}
            placeholder="Type gnome's name"
          />
          <ProfessionSelector
            onChange={this.changeProfessions}
            selected={professions}
          />
          <Button disabled={disabled}>Search</Button>
        </FiltersForm>
        {!isFilterApplied ? (
          <Message fontSize="1.2em">
            Please filter by gnome's name or professions in order to search!
          </Message>
        ) : (
          <GnomeResult criteria={criteria} />
        )}
      </HomeGrid>
    );
  }
}

export default HomeScreen;
