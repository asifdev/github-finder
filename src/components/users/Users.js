import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1614",
        login: "brad",
        avatar_url: "https://avatars0.githubusercontent.com/u/1614?v=4",
        html_url: "https://github.com/brad"
      },
      {
        id: "1616",
        login: "brad",
        avatar_url: "https://avatars2.githubusercontent.com/u/5550850?v=4",
        html_url: "https://github.com/brad"
      },
      {
        id: "1615",
        login: "brad",
        avatar_url: "https://avatars1.githubusercontent.com/u/2621?v=4",
        html_url: "https://github.com/brad"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
