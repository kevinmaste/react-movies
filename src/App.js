import React from 'react';
import Moviecomponent from "./components/moviecomponent";
import Filter from "./components/filter";

function App() {
  return (
    <div className="App">
        {/*<Moviecard/>*/}
        <Filter/>
        <Moviecomponent/>
    </div>
  );
}

export default App;
