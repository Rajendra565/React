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
const handletoclear=()=>{
  let newText="";
  setText(newText)
}
  const [text,setText]=useState("");
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
          placeholder="Enter Text"
        ></textarea>
      </div>
      <p>finding the length:{text.length}</p>
      <button className="btn btn-primary mx-3" onClick={handletoUpercase}>Click to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handletoLowercase}>Click to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handletoclear}>Clear text</button>
      
     
     </div>
     <div className="container">
      <p className="fs-1 ">Text summary</p>
      <p className="fs-0.5"><b>{text.split([" "]).length-1}</b> word <b> {text.length}</b> characters</p>
      <h2>perview</h2>
      <pre>{text}</pre>
     </div>
    </>
  );
}

export default Forms;
