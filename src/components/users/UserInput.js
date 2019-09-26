import React from "react";

const UserInput = props => {
  return (
    <div>
      <form>
        <input
          id="a"
          type="text"
          name="input"
          onChange={props.change}
          value={props.default}
        ></input>
      </form>
    </div>
  );
};

export default UserInput;
