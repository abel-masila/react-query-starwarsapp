import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
function App() {
  const [page, setPage] = useState("planets");
  return (
    <>
      <div className="App">
        <h1>Star wars info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
