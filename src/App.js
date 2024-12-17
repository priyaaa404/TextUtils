import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/about';

function App() {
  const[mode , setMode] = useState('light')
  const[alert , setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
        type:type,
        msg:message
    }
    )
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode hs been enabled" , "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode hs been enabled" , "success")
    }

    
   
  }
  return (
    <>
   <Navbar title="TextUtils" aboutText="About US" mode ={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <TextForm heading={"Enter Text"} mode={mode} />
   {/* <About/> */}
    </>
  );
}

export default App;
