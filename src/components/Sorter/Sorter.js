import React, { Component } from 'react';
import FilterButton from '../Sorter/FilterButton';
import AscDesc from '../Sorter/AscDesc';

class Sorter extends Component {
    state = {
        sort_by: 'created_at',
        order: 'desc'
    }

    render() {
        const { sort_by } = this.state;
        return (
            <div>
                <FilterButton sort_by={sort_by} ChangeForm={this.ChangeForm} />
                <AscDesc ChangeForm={this.ChangeForm} />
            </div >
        );
    }

    ChangeForm = ({ target: { value, name } }) => {
        this.setState(currentState => {
            if (value) currentState.sort_by = value;
            else currentState.order = name;
            this.props.fetchArticles(currentState);
            return currentState;
        })
    }
}

export default Sorter;