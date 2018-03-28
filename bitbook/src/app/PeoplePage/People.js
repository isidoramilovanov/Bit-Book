import React, { Component } from 'react';
import UserList from './UserList';
import Search from './Search';
import {dataServices} from '../../service/dataService';

class People extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            users : [],
            filterUsers : []
        };
    }

    componentDidMount() {
        dataServices.getUser()
        .then(allUsers => {
            
            this.setState({
                users : allUsers
            });
        });
    }

    handleChange = (event) => {
		let inputValue = event.target.value;
		let newUsers = this.state.users.filter((user) => user.name)
		this.setState({
			filterUsers: newUsers
		})
	}
    
    render() {
        console.log(this.state.filterUsers)
        return (
            <div>
            <Search  handleChange={this.handleChange} inputValue={this.state.inputValue}/>
            <UserList myUsers={this.state.users}/>
            </div>

        )
    }


}


export default People;