import React , {useState} from 'react'
import "./button.css";

export default function TextForm(props) {

const[text,setText]=useState("")

  const handleUpClick=()=>{
    console.log("uppercase was clicked")
    const  newText=text.toUpperCase();
    setText(newText)
  }

  const handletolowerClick=()=>{
    console.log("uppercase was clicked")
    const  newText=text.toLowerCase();
    setText(newText)
  }

  const handleClearClick=()=>{
    const  newText="";
    setText(newText)
  }
  
  const handleOnChange=(event)=>{
    console.log("On change")
    setText(event.target.value);
  }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black '}}>
     <h2>{props.heading}</h2>
     <div className='mb-3'>
      <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white ' , color:props.mode==='dark'?'white':'black '}} value={text} id='myBox'   rows="8"></textarea>
     </div>
     <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
     <button className='btn btn-primary' onClick={handletolowerClick}>Convert to LowerCase</button>
     <button className='btn btn-primary' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black '}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p> {0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>

    </div>
    </>
  )
}
