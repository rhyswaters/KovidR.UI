import * as actionTypes from './actionTypes';
import api from '../../api/guess';

export const fetchResultsByDaysWonSuccess = (daysWon) => {
    return {
        type: actionTypes.FETCH_RESULTS_BY_DAYS_WON_SUCCESS,
        daysWon: daysWon
    }
};

export const fetchResultsByDaysWonFail = (error) => {
    return {
        type: actionTypes.FETCH_RESULTS_BY_DAYS_WON_FAIL,
        error: error
    }
};

export const fetchResultsByDaysWonStart = () => {
    return {
        type: actionTypes.FETCH_RESULTS_BY_DAYS_WON_START
    }
};

export function fetchResultsByDaysWon(token){
    return dispatch => {
        dispatch(fetchResultsByDaysWonStart());
        api.getResultsByDaysWon(token).then(response => {
            dispatch(fetchResultsByDaysWonSuccess(response.data.daysWon));
        }).catch(err => {
            dispatch(fetchResultsByDaysWonFail(err));
        });
    };
};

export const fetchResultsSuccess = (results) => {
    return {
        type: actionTypes.FETCH_RESULTS_SUCCESS,
        results: results
    }
};

export const fetchResultsFail = (error) => {
    return {
        type: actionTypes.FETCH_RESULTS_FAIL,
        error: error
    }
};

export const fetchResultsStart = () => {
    return {
        type: actionTypes.FETCH_RESULTS_START
    }
};

export function fetchResults(numResultsToFetch, token){
    return dispatch => {
        dispatch(fetchResultsStart());
        api.getResultsList(numResultsToFetch, token).then(response => {
            dispatch(fetchResultsSuccess(response.data));
        }).catch(err => {
            dispatch(fetchResultsFail(err));
        });
    };
};

export const fetchUserSubmittedNextGuessSuccess = (response) => {
    return {
        type: actionTypes.FETCH_USER_SUBMITTED_NEXT_GUESS_SUCCESS,
        nextGuessInfo: response
    }
};

export const fetchUserSubmittedNextGuessFail = (error) => {
    return {
        type: actionTypes.FETCH_USER_SUBMITTED_NEXT_GUESS_FAIL,
        error: error
    }
};

export const fetchUserSubmittedNextGuessStart = () => {
    return {
        type: actionTypes.FETCH_USER_SUBMITTED_NEXT_GUESS_START
    }
};

export function fetchUserSubmittedNextGuess(userName){
    return dispatch => {
        dispatch(fetchUserSubmittedNextGuessStart());
        api.hasUserSubmittedNextGuess(userName).then(response => {
            dispatch(fetchUserSubmittedNextGuessSuccess(response.data));
        }).catch(err => {
            dispatch(fetchUserSubmittedNextGuessFail(err));
        });
    };
};

export const createGuessSuccess = (response) => {
    return {
        type: actionTypes.CREATE_GUESS_SUCCESS,
        nextGuessInfo: response
    }
};

export const createGuessFail = (error) => {
    return {
        type: actionTypes.CREATE_GUESS_FAIL,
        error: error
    }
};

export const createGuessStart = () => {
    return {
        type: actionTypes.CREATE_GUESS_START
    }
};

export function createGuess(guess, token){
    return dispatch => {
        dispatch(createGuessStart());
        api.createGuess(guess, token).then(response => {
            dispatch(createGuessSuccess(guess));
        }).catch(err => {
            dispatch(createGuessFail(err));
        });
    };
};