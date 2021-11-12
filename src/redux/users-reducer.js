const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Russian_Boy_Scouts_signaling_postcard_1915.jpg/220px-Russian_Boy_Scouts_signaling_postcard_1915.jpg', 
        // followed: false, fullName: 'Alexandr', status: 'I am a creator', location: {city: 'Omsk', country: 'Russia'}},
        // {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Russian_Boy_Scouts_signaling_postcard_1915.jpg/220px-Russian_Boy_Scouts_signaling_postcard_1915.jpg', 
        // followed: true, fullName: 'Dmitry', status: 'I am a teacher', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Russian_Boy_Scouts_signaling_postcard_1915.jpg/220px-Russian_Boy_Scouts_signaling_postcard_1915.jpg', 
        // followed: false, fullName: 'Sergey', status: 'I was invented', location: {city: 'Moscou', country: 'Russia'}}
    ]   
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { 
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:{
            // let stateClone = {
            //     ...state,
            //     users: [...state.users]
            // };
            // // stateClone.users.location = {...state.users.location};
            // stateClone.users.push(...action.users);
            // return stateClone;
            return { ...state, users: [ ...state.users, ...action.users ]}
        }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;