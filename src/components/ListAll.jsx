import { Component, React } from 'react';
import axios from 'axios';
import User from './User';

class ListAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedUsers: []
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () => {
        let { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data);
        this.setState({ fetchedUsers: data });
        console.log(this.state.fetchedUsers);
    }

    render() {
        return (
            <div>
                <h1> List All</h1>
                {
                    this.state.fetchedUsers.map((user) => {
                        return <User user = {user} key = {user.id}/>
                    })
                }
            </div>
        )
    }
}

export default ListAll