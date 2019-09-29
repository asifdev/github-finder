import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    term: ""
  };

  static propTypes = {
    searchTerm: PropTypes.func.isRequired,
    clearHandler: PropTypes.func.isRequired,
    setAlert: PropTypes.func
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.term) {
      this.props.searchTerm(this.state.term);
      this.setState({
        term: ""
      });
    } else {
      console.log("Alert!");
      this.props.setAlert("Kindly Enter something!", "light");
    }
  };

  changeInputHandler = e => {
    // console.log(e.target.value);
    this.setState({
      term: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form id="search" onSubmit={this.onSubmit}>
          <input
            value={this.state.term}
            type="text"
            onChange={this.changeInputHandler}
          />
          <input type="submit" className="btn btn-dark btn-block" />
        </form>
        <button
          onClick={this.props.clearHandler}
          className="btn btn-dark btn-block"
        >
          Clear
        </button>
      </div>
    );
  }
}

export default Search;
