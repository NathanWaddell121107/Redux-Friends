import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_FRIENDS = 'GET_FRIENDS';
export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIENDS';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';

const URL = 'http://localhost:5000/api/friends';

export const getFriends = () => {
    return dispatch => {
        dispatch({
            type: GETTING_FRIENDS
        })
        axios
        .get(`${URL}/get`)
        .then(res => {
            dispatch({
                type: GET_FRIENDS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const deleteFriend = id => {
    return dispatch => {
        dispatch({
            type: DELETING_FRIEND
        })
        axios
        .get(`${URL}/delete`, {
            data: { id }
        })
        .then(({ data }) => {
            dispatch({
                type: DELETE_FRIEND,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}