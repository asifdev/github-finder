import React, { Component } from "react";
import NavBar from "./components/layout/Navigation";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_secret}`
    );

    this.setState({
      users: res.data,
      loading: false
    });
  }

  searchUser = async term => {
    // console.log(term);
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${term}&client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_secret}`
    );

    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  clearHandler = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Search
            searchTerm={this.searchUser}
            clearHandler={this.clearHandler}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
