import React, { Component } from "react";
import NavBar from "./components/layout/Navigation";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
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

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type
      }
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchTerm={this.searchUser}
            clearHandler={this.clearHandler}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
