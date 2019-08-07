import React, { Component } from 'react';
import { Link } from "@reach/router";
// import FetchNavTopics from './FetchNavTopics';
import * as api from '../api';
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
            <nav >

                {isLoading ? <p>Loading Articles...</p> :
                    <>
                        <Link to="/">Home</Link> | {}
                        <Link to="/articles">Articles</Link> | {}
                        <Link to="/topics/coding">Coding</Link> | {}
                        <Link to="/topics/cooking">Cooking</Link> | {}
                        <Link to="/topics/football">Football</Link>
                    </>
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