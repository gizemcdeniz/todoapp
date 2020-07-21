import React, { Component } from 'react'

const UserContext = React.createContext();

export class UserProvider extends Component {
    render() {
        return (
           <UserContext.Provider value = {this.state}>
            {this.props.children}
           </UserContext.Provider>
        )
    }
}


const UserConsumer = UserContext.Consumer;

export default UserConsumer;