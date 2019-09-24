import React, { Component } from "react";
import NavBar from "./components/layout/Navigation";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
