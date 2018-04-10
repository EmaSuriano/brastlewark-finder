import { connect } from 'react-redux';
import Home from './Home';
import {
  actionCreators as searchActionCreators,
  selectors as searchSelectors,
} from '../../ducks/search';

const mapStateToProps = state => ({
  criteria: searchSelectors.getCriteria(state),
  isFilterApplied: searchSelectors.isFilterApplied(state),
});

const { setGnomeCriteria } = searchActionCreators;

const mapDispatchToProps = {
  setGnomeCriteria,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
