import React, { Component } from "react";
import NavBar from "./components/layout/Navigation";
import Users from "./components/users/Users";
import UserOutput from "./components/users/UserOutput";
import axios from "axios";
import "./App.css";
import UserInput from "./components/users/UserInput";

class App extends Component {
  state = {
    username: "Farzana",
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

  changeNameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <UserInput
            change={this.changeNameHandler}
            default={this.state.username}
          />
          <UserOutput name={this.state.username} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
