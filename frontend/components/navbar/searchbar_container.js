import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchAllResults, resetResults } from '../../actions/search_actions';
import SearchBar from './searchbar';

const mapStateToProps = ({ entities: { users }, ui: { search } }) => ({
  search,
  users
});

const mapDispatchToProps = dispatch => ({
  fetchAllResults: query => dispatch(fetchAllResults(query)),
  resetResults: () => dispatch(resetResults())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));