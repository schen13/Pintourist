import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_ALL_RESULTS = 'RECEIVE_ALL_RESULTS';
export const RESET_RESULTS = 'RESET_RESULTS';

export const fetchAllResults = query => dispatch => (
  SearchAPIUtil.fetchAllResults(query).then(
    results => dispatch(receiveAllResults(results))
  )
);

export const resetResults = () => ({
  type: RESET_RESULTS
});

const receiveAllResults = results => ({
  type: RECEIVE_ALL_RESULTS,
  results
});