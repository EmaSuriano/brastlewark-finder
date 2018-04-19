import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Title, Button, Message } from '../../shared/components';
import ProfessionSelector from './components/ProfessionSelector';
import FiltersForm from './components/FiltersForm';
import GnomeResult from './components/GnomeResult';
import HomeGrid from './components/HomeGrid';

class HomeScreen extends Component {
  static propTypes = {
    criteria: PropTypes.shape({
      name: PropTypes.string,
      professions: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    isFilterApplied: PropTypes.bool,
    setGnomeCriteria: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isFilterApplied: false,
  };

  state = {
    name: '',
    professions: [],
  };

  onSubmit = evt => {
    evt.preventDefault();
    this.props.setGnomeCriteria(this.state);
  };

  changeName = ({ target: { value } }) => this.setState({ name: value });

  changeProfessions = professions => this.setState({ professions });

  render() {
    const { isFilterApplied, criteria } = this.props;
    const { name, professions } = this.state;

    return (
      <HomeGrid>
        <Title>
          Brastlewark Finder
          <span role="img" aria-label="search">
            🔎
          </span>
        </Title>
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
          <Button
            disabled={!this.state.name && this.state.professions.length === 0}
          >
            Search
          </Button>
        </FiltersForm>
        {!isFilterApplied ? (
          <Message fontSize="1.2em">
            Please filter by name or professions in order to search!
          </Message>
        ) : (
          <GnomeResult criteria={criteria} />
        )}
      </HomeGrid>
    );
  }
}

export default HomeScreen;
