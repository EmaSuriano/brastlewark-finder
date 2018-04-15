import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { GET_GNOMES } from './query';
import { Query } from 'react-apollo';
import { GnomeCard, Message, Spinner } from '../../../../shared/components';
import GnomeResultContainer from './GnomeResultContainer';

class GnomeResult extends PureComponent {
  render() {
    const { criteria } = this.props;
    return (
      <Query query={GET_GNOMES} variables={criteria}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <Message>{`Error! ${error.message}`}</Message>;
          return (
            <GnomeResultContainer>
              {data.allGnomes.map(gnome => (
                <GnomeCard key={gnome.id} {...gnome} />
              ))}
            </GnomeResultContainer>
          );
        }}
      </Query>
    );
  }
}

GnomeResult.propTypes = {
  criteria: PropTypes.object,
};

export default GnomeResult;
