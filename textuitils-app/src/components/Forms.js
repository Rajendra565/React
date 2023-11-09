import React,{useState} from "react";


function Forms(props) {
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
    
     <div className="bg-info-subtle py-3 text-start px-2 text-dark">
      <p className="fs-1"><b>{text.split([" "]).length-1}</b> word <b> {text.length}</b> characters</p>
      
     </div>
    <div className="container">
      <div className="mb-3">
      <h2>{props.heading}</h2>
      
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handletochange}
          placeholder="Enter Text"
        ></textarea>
        <div className="container">
      
      <button className="btn btn-primary m-2 " onClick={handletoUpercase}>Click to uppercase</button>
      <button className="btn btn-primary m-2 " onClick={handletoLowercase}>Click to Lowercase</button>
      <button className="btn btn-primary m-2 " onClick={handletoclear}>Clear text</button>
       </div>
      </div>
      <div className="container bg-secondary-subtle">
      {/* <p className="fs-1 ">Text summary</p> */}
      <p className="fs-3 p-1"><b>{text.split([" "]).length-1}</b> word <b> {text.length}</b> characters</p>
     </div>
      
      
     
     </div>
    
      <div className="contanier bg-secondary-subtle p-2 my-3">
      <h2>perview</h2>
      <pre>{text}</pre>
      </div>

      <div className="contaniner bg-secondary-subtle p-2">
      <h1 className="text-dark">What is WordCounter?</h1>
      <p className="fw-lighter lh-base">Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. The Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back <later className="span text-black fw-bolder"> Tip: Bookmark this page now.</later><br /><br />
      Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.<br/><br />
      In addition, WordCounter shows you the top 10 keywords and keyword density of the article you're writing. This allows you to know which keywords you use how often and at what percentages. This can prevent you from over-using certain words or word combinations and check for best distribution of keywords in your writing.<br/><br />Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.
      </p>
      </div>
    
     
    </>
  );
}

export default Forms;
