import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render() {
        return (
            <div className = "jumbotron">
                <h1> Kevin Do Demo</h1>
                <p> React, Redux and React Router Home Page</p>
                <Link to = "about" className = "btn btn-primary btn-lg"> About Us</Link>
            </div>
        );
    }
}

export default HomePage;