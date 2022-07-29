import "./index.css";
import React, { useState, useEffect } from "react";
import { data } from "./data";
import Tools from "./Tool";
import Jobboard from "./Jobboard";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    setPeople(data);
  }, []);

  return (
    <>
    <Tools />

      <main>
        {people.length === 0 ? (
          <h2>Jobs are fetching...</h2>
        ) : (
          people.map((job) => <Jobboard 
          key={job.id}
          job={job} 
          />)
        )}
      </main>
    </>
  );
}

export default App;
