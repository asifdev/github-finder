import React from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello From React!</h1>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    const name = "Asif Khan";
    const showName = true;
    const loading = false;

    return (
      <div className="App">
        {!loading ? <h1>Hello {showName && name}</h1> : <h2>Loading...</h2>}
      </div>
    );
  }
}

export default App;
