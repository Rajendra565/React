import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import "./List.css";

function list(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [line, setLine] = useState();

  const chackedBtn = () => {
    setLine((line = true));
  };

  return (
    <div>
      <div className=" flex gap-5 ml-4 items-center justify-between">
        <div className="flex items-center ">
          <button className=" Lsit-Btn" onClick={chackedBtn}>
            {" "}
            <DeleteIcon />
          </button>

          <li style={{ textDecoration: line ? "line-through" : "none" }}>
            {props.text}
          </li>
        </div>
        <button className=" Lsit-Btn" id={props.id} onClick={()=>{
          props.ons(props.id)
        }}>
          
          <ClearIcon />
        </button>
      </div>
    </div>
  );
}

export default list;
