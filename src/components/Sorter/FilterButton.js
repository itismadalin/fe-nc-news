import React from 'react';

const FilterButton = ({ sort_by, ChangeForm }) => {
    return (
        <form>
            <label>
                <select className="MultipleButtons" value={sort_by} onChange={ChangeForm}>
                    <option value="created_at">Date</option>
                    <option value="votes">Votes</option>
                    <option value="comment_count">Comments</option>
                </select>
            </label>
        </form>
    );
};

export default FilterButton;
