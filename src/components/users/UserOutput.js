import React from "react";

const UserOutput = props => {
  return (
    <div>
      <p> my name is {props.name}! This is some text in a paragraph.</p>
      <p>This is another text in a paragraph.</p>
    </div>
  );
};

export default UserOutput;
