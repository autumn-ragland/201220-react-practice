import { Component, React } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'

class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let user = this.props.user
        return (
            <div>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{user.username}</Typography>
                        <Typography variant="h5" component="h2">{user.name}</Typography>
                        <Typography color="textSecondary">{user.email}</Typography>
                        <Typography variant="body2" component="p">{user.website}</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default User