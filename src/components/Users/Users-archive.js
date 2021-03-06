import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/Boy_Scouts_signaling.jpg';

let Users = (props) => {

    
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
         }
    }
    
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <div><img src={u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} /></div>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={ () => {props.unfollow(u.id)}} >Unfollow</button>
                        : <button onClick={ () => {props.follow(u.id)}} >Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;