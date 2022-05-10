import { Component } from 'react';
import Image from './Image';

export default class UserProfile extends Component {
    render() {
        console.log(this.props);
        const { id, name, email, avatar} = this.props.user;
        return (
            <div>
                <h1>User Profile</h1>
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>e-mail: {email}</p> 
                <Image source={avatar} alt={name}/>
            </div>
        )
    }
}