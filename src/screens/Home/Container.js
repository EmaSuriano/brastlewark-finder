import { connect } from 'react-redux';
import Home from './Home';
import {
  actionCreators as searchActionCreators,
  selectors as searchSelectors,
} from '../../ducks/search';

const mapStateToProps = state => ({
  name: searchSelectors.getName(state),
  professions: searchSelectors.getProfessions(state),
  isFilterApplied: searchSelectors.isFilterApplied(state),
});

const { changeName, changeProfessions } = searchActionCreators;

const mapDispatchToProps = {
  changeName,
  changeProfessions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
