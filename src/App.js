import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React, { useState } from 'react';
import Alert from './components/Alert';

// // for the routing 
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [btnMode, setBtnMode] = useState("Dark Mode");
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

 const switchMode=()=>{
    if (mode==='light') {
      setMode('dark')
      setBtnMode("Light Mode")
      document.body.style.backgroundColor= "grey"
      showAlert("Dark Mode has Enabled","success")
    }
    else{
      setMode('light')
      setBtnMode("Dark Mode")
      document.body.style.backgroundColor= "white"
      showAlert("Light Mode has Enabled","success")
    }
  }




  
  return(
    <>   
{/* <Router> */}
<Navbar mode={mode} switchMode={switchMode} btnMode={btnMode}/>
<Alert alert={alert}/>  
<div className="container my-3">
{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/"> */}
              <Textbox heading="Enter Your Text Here"  mode={mode} showAlert={showAlert} />
          {/* </Route>
  </Switch> */}
</div>
{/* </Router> */}



  </>

  );
}

export default App;
