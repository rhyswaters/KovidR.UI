import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: null,
    daysWon: null,
    nextGuessInfo: null,
    loading: true
}

const fetchResultsByDaysWonStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchResultsByDaysWonSuccess = ( state, action ) => {
    return updateObject( state, {
        daysWon: action.daysWon,
        loading: false
    } );
};

const fetchResultsByDaysWonFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchResultsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchResultsSuccess = ( state, action ) => {
    return updateObject( state, {
        results: action.results,
        loading: false
    } );
};

const fetchResultsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchUserSubmittedNextGuessStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchUserSubmittedNextGuessSuccess = ( state, action ) => {
    return updateObject( state, {
        nextGuessInfo: action.nextGuessInfo,
        loading: false
    } );
};

const fetchUserSubmittedNextGuessFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const createGuessStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const createGuessSuccess = ( state, action ) => {
    const nextGuessInfo = {nextGuessSubmitted: true, 
                           guess: action.nextGuessInfo.totalCases, 
                           nextGuessDate: action.nextGuessInfo.guessDate};

    return updateObject( state, {
        nextGuessInfo: nextGuessInfo,
        loading: false
    } );
};

const createGuessFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_RESULTS_BY_DAYS_WON_START: return fetchResultsByDaysWonStart( state, action );
        case actionTypes.FETCH_RESULTS_BY_DAYS_WON_SUCCESS: return fetchResultsByDaysWonSuccess( state, action );
        case actionTypes.FETCH_RESULTS_BY_DAYS_WON_FAIL: return fetchResultsByDaysWonFail( state, action )
        case actionTypes.FETCH_RESULTS_START: return fetchResultsStart( state, action );
        case actionTypes.FETCH_RESULTS_SUCCESS: return fetchResultsSuccess( state, action );
        case actionTypes.FETCH_RESULTS_FAIL: return fetchResultsFail( state, action );
        case actionTypes.FETCH_USER_SUBMITTED_NEXT_GUESS_START: return fetchUserSubmittedNextGuessStart( state, action );
        case actionTypes.FETCH_USER_SUBMITTED_NEXT_GUESS_SUCCESS: return fetchUserSubmittedNextGuessSuccess( state, action );
        case actionTypes.FETCH_USER_SUBMITTED_NEXT_GUESS_FAIL: return fetchUserSubmittedNextGuessFail( state, action );
        case actionTypes.CREATE_GUESS_START: return createGuessStart( state, action );
        case actionTypes.CREATE_GUESS_SUCCESS: return createGuessSuccess( state, action );
        case actionTypes.CREATE_GUESS_FAIL: return createGuessFail( state, action );
        default: return state;
    }
};

export default reducer;