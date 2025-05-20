import React,{useState} from "react";




function Forms(props) {
const handletoUpercase=()=>{
  setText(text.toUpperCase())
}
const handletoLowercase=()=>{
  setText(text.toLowerCase())
}
const handletocapitalize=()=>{
  setText(text[0].toUpperCase()+text.slice(1).toLowerCase())
}



const headletolisten=()=>{
  const voice=new SpeechSynthesisUtterance();


    voice.text=document.querySelector('textarea').value;
    window.speechSynthesis.speak(voice)

}

const handletochange=(event)=>{
  setText(event.target.value)
}
const handletoclear=()=>{
  let newText="";
  setText(newText)
}

const handletocopy=()=>{
  let text=document.querySelector('#exampleFormControlTextarea1');
  text.select();
  navigator.clipboard.writeText(text.value);
  
}



  const [text,setText]=useState("");
  const [length,setlength]=useState(0);
  

  return (
    <>
    
     <div className="bg-{props.mode} py-3 text-start px-2 text-dark">
      <p className={`fs-1 text-${props.mode=='light'?'dark':'light'}`}><b>{text.split([" "]).length-1}</b> word <b> {text.length}</b> characters</p>
      
     </div>
    <div className="container">
      <div className="mb-3 ">
      <h2 className={`text-${props.mode==="light"?'dark':'light'}`}>{props.heading}</h2>
      
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode==="light"?'dark':'light'} `}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handletochange}
          placeholder="Enter Text"
          
        ></textarea>
        <div className="container">
      
      <button className={`btn border-${props.mode==="light"?'dark':'light'} btn-bg-${props.mode} m-2 text-${props.mode==="light"?'dark':'light'}`} onClick={handletoUpercase}>Click to uppercase <i className="fa-solid fa-wand-sparkles p-lg-2" /></button>
      <button className={`btn border-${props.mode==="light"?'dark':'light'} btn-bg-${props.mode} m-2 text-${props.mode==="light"?'dark':'light'}`} onClick={handletoLowercase}>Click to Lowercase <i className="fa-solid fa-wand-sparkles p-lg-2"></i></button>
   
      <button className={`btn border-${props.mode==="light"?'dark':'light'} btn-bg-${props.mode} m-2 text-${props.mode==="light"?'dark':'light'}`} onClick={handletocapitalize}>Click to capitalize <i className="fa-solid fa-wand-sparkles p-lg-2"></i></button>

      <button className={`btn border-${props.mode==="light"?'dark':'light'} btn-bg-${props.mode} m-2 text-${props.mode==="light"?'dark':'light'}`} onClick={handletocopy}>Click to copy <i className="fa-solid fa-copy p-lg-2"></i></button>
      <button className={`btn border-${props.mode==="light"?'dark':'light'} btn-bg-${props.mode} m-2 text-${props.mode==="light"?'dark':'light'}`} onClick={handletoclear}>Clear text<i className="fa-solid fa-trash p-lg-2"></i></button>
      <button className={`btn border-${props.mode==="light"?'dark':'light'} btn-bg-${props.mode} m-2 text-${props.mode==="light"?'dark':'light'}`} onClick={headletolisten}><i class="fa-solid fa-play px-1"></i>Listen</button>
       </div>
      </div>
      <div className="container bg-{props.mode}">
      {/* <p className="fs-1 ">Text summary</p> */}
      <p className={`fs-3 p-1 text-${props.mode==="light"?'dark':'light'}`}><b>{text.split([" "]).length-1}</b> word <b> {text.length}</b> characters</p>
     </div>
      
      
     
     </div>
    
      <div className="contanier bg-{props.mode} p-2 my-3">
      <h2 className={`text-${props.mode==="light"?'dark':'light'}`}>perview</h2>
      <pre className={`text-${props.mode==="light"?'dark':'light'}`}>{text}</pre>
      </div>

      <div className="contaniner bg-{props.mode} p-2">
      <h1 className={`text-${props.mode==="light"?'dark':'light'}`}>What is WordCounter?</h1>
      <p className={`fw-lighter lh-base text-${props.mode==='light'?'dark':'light'}`}>Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. The Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back <later className={`span text-${props.mode==='light'?'dark':'light'} fw-bolder`} > Tip: Bookmark this page now.</later><br /><br />
      Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.<br/><br />
      In addition, WordCounter shows you the top 10 keywords and keyword density of the article you're writing. This allows you to know which keywords you use how often and at what percentages. This can prevent you from over-using certain words or word combinations and check for best distribution of keywords in your writing.<br/><br />Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.
      </p>
      </div>
    
     

      


     
    </>
  );
}

export default Forms;
