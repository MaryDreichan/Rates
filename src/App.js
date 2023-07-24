import React from 'react';
import './App.css';

import Rate300 from "./assets/components/Rate300";
import Rate450 from "./assets/components/Rate450";
import Rate550 from "./assets/components/Rate550";
import Rate1000 from "./assets/components/Rate1000";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Rate300 />
          <Rate450 />
          <Rate550 />
          <Rate1000 />
        </div>
      </div>
   );
  }
}

export default App;