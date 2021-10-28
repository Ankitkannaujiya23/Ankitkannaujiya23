import React , {useState} from 'react'

export default function Textbox(props) {

    const upperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text has Converted to the UPPERCASE" , "success");
    }
    const lowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text has Converted to the lowercase" , "success");
    }
    const removeSpace=()=>{
        let newText=text.trim();
        setText(newText);
        props.showAlert("Removed Spaces" , "success");
    }
   const bold=()=>{
       let newText=text.bold()
       setText(newText)
   }
 
    const clearTexbox=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Textbox has Cleared" , "danger");
    }
    
    const upOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (

        <>
        <div className="mb-3 my-4 container" style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white'}}>
        <label for="exampleFormControlTextarea1 " class="form-label" id="textbox"> <h2  style={{color: props.mode==='light' ? 'black' : 'white'}}> {props.heading} </h2> </label>
        <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange = {upOnChange}  rows="8" placeholder="Write or paste your text here  " style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white',color: props.mode==='dark' ? 'white' : 'black'}}></textarea>
        <button className={`btn btn-${props.mode==='light' ? 'outline-primary':'success'} my-4 `} onClick={upperCase}>UPPER CASE</button>
        <button className={`btn btn-${props.mode==='light' ? 'outline-primary':'warning'} my-4 mx-3`}onClick={lowerCase}>lower case</button>
        <button className={`btn btn-${props.mode==='light' ? 'outline-primary':'info'} my-4 mx-2`}onClick={removeSpace}>Remove White space</button>
        <button className={`btn btn-${props.mode==='light' ? 'outline-primary':'light'} my-4 mx-3`}onClick={bold}>Bold</button>
        <button className={`btn btn-danger my-4 mx-3`} onClick={clearTexbox}>Clear</button>
      </div>

      <div className="container" style={{color: props.mode==='light' ? 'black' : 'white'}}>
          <h2 >Text Counter</h2>
          <p> {text.split(" ").length} :  Words And {text.length} :  Characters</p>
          <p>{text.split(" ").length*0.008} : min to read</p>
          <h3>Preview </h3>
          <p>{text}</p>
      </div>
      </>
    )
}
