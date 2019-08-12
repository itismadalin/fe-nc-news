import React, { Component } from "react";
import FilterButton from "../Sorter/FilterButton";
import AscDesc from "../Sorter/AscDesc";

class Sorter extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };

  render() {
    return (
      <div className="Sorter">
        <FilterButton
          sort_by={this.state.sort_by}
          ChangeForm={this.ChangeForm}
        />
        <AscDesc ChangeForm={this.ChangeForm} />
      </div>
    );
  }

  ChangeForm = ({ target: { value, name } }) => {
    let sort_by = value ? value : this.state.sort_by;
    let order = name ? name : this.state.order;
    this.setState({ sort_by, order });
    this.props.fetchArticles({ sort_by, order });
  };
}

export default Sorter;
