import React, {useState} from "react";
import { data } from "./data";
import "./index.css";

const Tools = () => {

  const [btn,setBtn] = useState(data)
const handleClear = ()=>{
  setBtn([])
}
  const handleDel =(id)=>{
    setBtn((del) => {
      let delet = del.filter((check) => check.id !== id);

      console.log(delet);
      return delet;
    });
  }
  return (
    <>
      <div className="buttons">
        <div className="button">
          {btn.map((one) => {
            const { role, languages, id } = one;
            return (
              <div className="xBtns">
                <h4>{role}</h4>
                <h4>{languages}</h4>
                <button className="xBtn" onClick={() => handleDel(id)}>
                  X
                </button>
              </div>
            );
          })}
          <div className="clear">
            <h4 onClick = {handleClear}>Clear</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
