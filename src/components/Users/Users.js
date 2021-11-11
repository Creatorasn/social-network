import React from "react";
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1, 
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Russian_Boy_Scouts_signaling_postcard_1915.jpg/220px-Russian_Boy_Scouts_signaling_postcard_1915.jpg', 
                followed: false, 
                fullName: 'Alexandr', 
                status: 'I am a creator', 
                location: {city: 'Omsk', country: 'Russia'}
            },
            {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Russian_Boy_Scouts_signaling_postcard_1915.jpg/220px-Russian_Boy_Scouts_signaling_postcard_1915.jpg', 
            followed: true, fullName: 'Dmitry', status: 'I am a teacher', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Russian_Boy_Scouts_signaling_postcard_1915.jpg/220px-Russian_Boy_Scouts_signaling_postcard_1915.jpg', 
            followed: false, fullName: 'Sergey', status: 'I was invented', location: {city: 'Moscou', country: 'Russia'}}
        ])
    }
    
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <span>
                        <div><img src={u.photoUrl} className={styles.userPhoto} /></div>
                    </span>
                    <span>
                        {u.followed 
                        ? <button onClick={ () => {props.unfollow(u.id)}} >Unfollow</button>
                        : <button onClick={ () => {props.follow(u.id)}} >Follow</button>}
                    </span>
                </div>
                <div>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>
            </div>)
        }
    </div>
}

export default Users;