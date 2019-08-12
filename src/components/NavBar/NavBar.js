import React, { Component } from 'react';
import { Link } from "@reach/router";
import * as api from '../Api/api';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

class NavBar extends Component {
    state = {
        topics: null,
        isLoading: true,
        error: null
    }

    render() {
        const { isLoading, error } = this.state
        if (error) return <ErrorDisplay status={error.status} msg={error.msg} />
        return (
            <nav className="NavBar">

                {isLoading ? <p>Loading Articles...</p> :
                    <div>
                        <Link className="NavBarLinkButtons" to="/">Home</Link>
                        <Link className="NavBarLinkButtons" to="/topics/coding">Coding</Link>
                        <Link className="NavBarLinkButtons" to="/topics/cooking">Cooking</Link>
                        <Link className="NavBarLinkButtons" to="/topics/football">Football</Link>
                    </div>
                }
            </nav>
        );
    }

    componentDidMount() {
        this.fetchTopics();
    }

    fetchTopics = () => {
        api.getTopics().then(topics => {
            this.setState({ topics, isLoading: false })
        }).catch(({ response }) => {
            const error = { status: response.status, msg: response.data.msg }
            this.setState({ error, isLoading: false })
        })
    }
}

export default NavBar;