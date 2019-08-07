import React from 'react';
import { Link } from '@reach/router';

const fetchNavTopics = ({ topics }) => {
    return (
        <>
            {topics.map(topic => {
                return (
                    < Link key={topic.slug} to={`/topics/${topic.slug}`
                    }> {topic.slug}</Link>
                )
            })}
        </>
    );
}

export default fetchNavTopics;