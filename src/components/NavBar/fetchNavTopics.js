import React, { Component } from 'react';
import Link from "@reach/router";
import * as api from '../api';
import NavBar from './NavBar'

class fetchNavTopics extends Component {
    state = {
        topics: null,
        isLoading: true
    }

    render() {
        const { topics, isLoading } = this.state;
        return (
            <nav className="NavTopics">
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                {isLoading ? <p>Waiting for articles to load...</p> : <NavBar topics={topics} />}
            </nav>
        );
    }


    componentDidMount() {
        this.getTopics();
    }

    getTopics = () => {
        api.fetchTopics()
            .then((topics) => {
                this.setState({ topics, isLoading: false })
            });
    }
}

export default fetchNavTopics;