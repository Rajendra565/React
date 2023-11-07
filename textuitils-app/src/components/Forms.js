import React,{useState} from "react";


function Forms({ heading }) {
const handletoUpercase=()=>{
  setText(text.toUpperCase())
}
const handletoLowercase=()=>{
  setText(text.toLowerCase())
}


const handletochange=(event)=>{
  setText(event.target.value)
}
  const [text,setText]=useState("Enter ");
  const [length,setlength]=useState(0);
  

  return (
    <>
    <div className="container">
      <div className="mb-3">
      <h2>{heading}</h2>
        <label htmlFor="exampleFormControlTextarea1" class="form-label">
          Textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handletochange}
        ></textarea>
      </div>
      <p>finding the length:{text.length}</p>
      <button className="btn btn-primary mx-3" onClick={handletoUpercase}>Click to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handletoLowercase}>Click to Lowercase</button>
     
     </div>
     <div className="container">
      <p className="fs-1 ">Text summary</p>
      <p className="fs-0.5">{text.split([" "]).length-1} word {text.length} characters</p>
     </div>
    </>
  );
}

export default Forms;
