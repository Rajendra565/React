import React,{useState} from "react";


function Forms({ heading }) {
const handletoUpercase=()=>{
  setText(text.toUpperCase())
}
const handletoLowercase=()=>{
  setText(text.toLowerCase())
}
const handletolength=()=>{
  setlength(text.length-1)
}

const handletochange=(event)=>{
  setText(event.target.value)
}
  const [text,setText]=useState("Enter ");
  const [length,setlength]=useState(0);
  

  return (
    <>
      <h2>{heading}</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={handletochange}
        ></textarea>
      </div>
      <p>finding the length:{length}</p>
      <button className="btn btn-primary mx-3" onClick={handletoUpercase}>Click to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handletoLowercase}>Click to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handletolength}>Find length</button>

    </>
  );
}

export default Forms;
