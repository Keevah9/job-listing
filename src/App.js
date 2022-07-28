import "./index.css";
import React, {useState} from "react";
import { data } from "./data";
import Tools from "./Tool";


function App({btn}) {
  
  return (
    <>
      <Tools btn = {btn}/>
      <main>
        {data.map((person) => {
          const {
            tools,
            languages,
            location,
            contract,
            postedAt,
            level,
            role,
            position,
            featured,
            current,
            logo,
            company,
            id,
          } = person;
          
          return (
            <section className="main" key={id}>
              <div className="imgContainer">
                <div className="imgCon">
                  <img src={logo} alt={company} />
                </div>
                <div>
                  <div className="brandCon">
                    <h3 className="brand">{company}</h3>
                    
                    
                       
                      <button className="featuredBtn1 featuredBtn">
                        {current == true} New!
                      </button>
                                    <button className="featuredBtn">{featured} Featured </button>
                  </div>
                  <h3 className="position">{position}</h3>
                  <div className="details">
                    <ul className="listDetails">
                      <li className="first">{postedAt}</li>
                      <li>{contract}</li>
                      <li>{location}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="toolCon">
                <h4>{tools}</h4>
                <h4>{languages}</h4>
                <h4>{level}</h4>
                <h4>{role}</h4>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}

export default App;
