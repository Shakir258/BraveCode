import React ,{useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {

    const {User} = useContext(UserContext)

    if(!User) return <div>Please Login</div>

    else return <div>Welcom {User.username}</div>
}

export default Profile;