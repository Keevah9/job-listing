import React, { useState } from "react";
import { Lang } from "./Lang";
import "./index.css";

const Tools = () => {
  const [btn, setBtn] = useState(Lang);

  const handleClear = () => {
    setBtn([]);
  };

  const handleDel = (id) => {
    setBtn((del) => {
      let delet = del.filter((check) => check.id !== id);
      return delet;
    });
  };

  return (
    <>
      <div className="buttons">
        <div className="button">
          <div className="toolCon xBtns">
            {btn.map((checks) => {
              const { languages, id } = checks;
              return (
                <div className="space">
                  <h4>{languages}</h4>
                  <button className="xBtn" onClick={() => handleDel(id)}>
                    X
                  </button>
                </div>
              );
            })}
            
          </div>

          <div className="clear">
            <h4 onClick={handleClear}>Clear</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;

/* {lang.map((two) => {
              const { tools, id } = two;
              return (
                <div className="space">
                  <h4>{tools}</h4>
                  <button className="xBtn" onClick={() => handleDel(id)}>
                    X
                  </button>
                </div>
              );
            })} */
