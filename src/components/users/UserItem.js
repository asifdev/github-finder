import React, { Component } from "react";

export class UserItem extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       id: "1614",
  //       login: "brad",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/1614?v=4",
  //       html_url: "https://github.com/brad"
  //     };
  //   }
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        ></img>
        <div>{login}</div>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
