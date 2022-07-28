import React from "react";
import './index.css'
import { data } from "./data";

const Jobs = (roless)=>{
    return (
      <>
        {data.map((roless) => {
          const { level, roles } = roless;
          return (
            <>
              <li>{roles}</li>
              <li>{level}</li>
            </>
          );
        })}
      </>
    );
    
}

export default Jobs