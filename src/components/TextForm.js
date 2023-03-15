import React, { useState } from 'react'

export default function TextForm(props) {
const handleUpClick = (btn)=>{
    // console.log("Hello " + text)
    let btnText = btn.target.textContent
    if (btnText==='Convert to Upper Case'){
    let newText = text.toUpperCase();
    setText(newText);
    btn.target.textContent = "Convert to Lower Case"
    props.showAlert("Converted to Upper Case", "success")
    }else{
    let newText = text.toLowerCase();
    setText(newText);
    btn.target.textContent = "Convert to Upper Case"
    props.showAlert("Converted to Lower Case", "success")
    }
}

const btnHandleClick = (button)=>{
  // let newText = ""
  // setText(newText);
  if(button.target.textContent==="Bold"){
  let textBox = document.getElementById("myBox");
  textBox.style.fontWeight = "800"
  button.target.textContent = "Revert"
  props.showAlert("Text formatted to Bold","success")
  }else{
  let textBox = document.getElementById("myBox");
  textBox.style.fontWeight = "normal"
  button.target.textContent = "Bold"
  props.showAlert("Text reverted to original Format","success")
  }
}

const handleOnChange = (event)=>{
    // console.log("On Change")
    debugger
    setText(event.target.value)
}
const [text, setText] = useState('');
  return (
    <>
    <div className="container my-3" style={{color:props.mode==="light"?'black':'white'}}>
        <h3 >{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode==="light"?'white':'grey', color:props.mode==="light"?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="6"/>
</div>
<button className={`btn btn-${props.redMode==="dark"?"primary":"dark"}`} onClick={handleUpClick}>Convert to Upper Case</button>
<button className={`btn btn-${props.redMode==="dark"?"primary":"dark"} mx-2`} onClick={btnHandleClick}>Bold</button>
</div>
<div className='container my-3' style={{color:props.mode==="light"?'black':'white'}}>
  <h3>Your Text Summary</h3>
  <p>{text.length<=0?0:text.split(" ").length} words, {text.length} characters</p>
  <p>{text.split(" ").length * 0.008} minutes taken to read the above text</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Please start writing to preview..."}</p>
</div>


</>
  )
}
