import React, { useState } from "react";
import data from "./data.json";
import "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search text.."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      {data
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>{val.first_name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
