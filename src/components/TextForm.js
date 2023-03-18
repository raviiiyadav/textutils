import React, {useState} from 'react';


export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Upper Case Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }

  const handleloClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }

  const handleClearClick=()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  const handleCopy=()=>{
    let text = document.getElementById("myText")
    text.select();
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  }
  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces!", "success");
  }

  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value)
  }

  const[text,  setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} id="myText" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>
        Convert to lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>
        Clear Space
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something to preview it.'}</p>
    </div>
    </>
  );
}
