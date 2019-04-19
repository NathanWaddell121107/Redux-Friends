import {
    GETTING_FRIENDS,
    GET_FRIENDS,
    DELETING_FRIEND,
    DELETE_FRIEND,
    ADDING_FRIEND,
    ADD_FRIEND,
    ERROR
} from '../actions/index';

const initialState = {
    friends: [],
    deletingFriend: false,
    gettingFriends: false,
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    addingFriend: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GETTING_FRIENDS:
            return {
                ...state,
                gettingFriends: true,
                friends: action.payload
            }
        case GET_FRIENDS:
            return {
                ...state,
                gettingFriends: false
            }
        case DELETING_FRIEND:
            return {
                ...state,
                deletingFriend: true
            }
        case DELETE_FRIEND:
            return {
                ...state,
                deletingFriend: false,
                friends: action.payload
            }
        case ADDING_FRIEND:
            return {
                ...state,
                addingFriends: true,
                friends: action.payload
            }
        case ADD_FRIEND:
            return {
                ...state,
                addingFriends: false
            }
        case ERROR:
            return {
                ...state,
                gettingFriends: false,
                addingFriend: false,
                deletingFriend: false,
                error: action.payload
            }
        default:
            return state;
    }
}