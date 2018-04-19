import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Message, Spinner, GnomeList } from 'shared/components';
import { GET_GNOMES } from './query';

// This is a PureComponent in order to avoid fetching again gnomes when the criteria hasn't changed!
class GnomeResult extends PureComponent {
  render() {
    const { criteria } = this.props;
    return (
      <Query query={GET_GNOMES} variables={criteria}>
        {({ loading, error, data }) =>
          (loading && <Spinner />) ||
          (error && <Message>{`Error! ${error.message}`}</Message>) ||
          (data.allGnomes.length > 0 ? (
            <GnomeList gnomes={data.allGnomes} />
          ) : (
            <Message>There are no results that match your search</Message>
          ))
        }
      </Query>
    );
  }
}

GnomeResult.propTypes = {
  criteria: PropTypes.shape({
    name: PropTypes.string,
    professions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default GnomeResult;
