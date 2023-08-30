import React, {useState, useEffect} from 'react';
import Switch from '@mui/material/Switch';


const Mode = () => {
  const [theme, setTheme] = useState("dark-theme")

  useEffect(()=>{
    document.body.className = theme
  },[theme])

  const toggleTheme = () =>{
    if(theme == "dark-theme"){
      setTheme("light-theme")
    }
    else{
      setTheme("dark-theme")
    }
  }


  return (
    <div>
      <Switch defaultChecked onClick={() => toggleTheme()} />
 
    </div>
  );
}

export default Mode