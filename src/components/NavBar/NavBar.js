import React from 'react';
import { Link } from '@reach/router'

const NavBar = ({ topics }) => {
    return (
        <div className="buttons">
            {topics.map(topic => {
                return (
                    <Link key={topic.slug} to={`/topics/${topic.slug}`}>
                        {topic.slug}
                    </Link>
                );
            })
            }
        </div>
    );
};

export default NavBar;

        // <div className="NavBar">
        //     <Link to="/">Home</Link>
        //     <Link to="/topics/coding">Coding</Link>
        //     <Link to="/topics/cooking">Cooking</Link>
        //     <Link to="/topics/football">Football</Link>
        // </div>