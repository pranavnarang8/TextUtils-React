import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import About from './components/About.js';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//let name = "Pranav"
function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null)

  const[redMode, setRedMode] = useState("dark")

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout (()=>{
      setAlert(null)

    }, 2000)
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode has been enabled", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled", "success")
    }
  }
  const toggleRed = ()=>{
    if(mode==="dark"){
    if(redMode==="dark"){
      setRedMode("red")
      document.body.style.backgroundColor="red";
      showAlert("Red Dark Mode has been enabled","success")
    }else{
      setRedMode("dark")
      document.body.style.backgroundColor="grey"
      showAlert("Red Dark Mode has been disabled","success")
    }
  }
  // }else{
  //   showAlert("You need to enable the Dark Mode first","danger")
  // }
  }
  return (
    //We can only return one tag here, the empty tag <> is a JSX Fragment.
    // <>
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </nav>
    // <div className="container">
    //   {/* Here {name} is javascript, whatever you use inside curly brackets is javascript */}
    //   <h1>Hello {name}</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perferendis ea quod maiores odit doloremque error autem sunt ipsum praesentium eum eaque facere, possimus consequatur magni voluptates expedita? Dolorem, tenetur?</p>
    // </div>
    // </>
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} redMode={redMode} toggleRed={toggleRed} aboutText="About TextUtils"/>
<Alert alert={alert}/>
<div className="container">
<Router>
<Switch>
  {/* use exact path to avoid partial matching of routes */}
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Share your Thoughts.." mode={mode} redMode={redMode}/>
          </Route>
</Switch>
</Router>
{/* <About/> */}
</div>
{/* <Navbar/> */}
    </>
  );
}

export default App;
