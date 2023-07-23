import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import Watchlist from './pages/Watchlist';
import Header from './components/Common/Header';
import React,{useState} from 'react';

function App() {
  let [mode, setMode] = useState('light')

  let toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
  }

  return (
    <div>
      <BrowserRouter>
      <Header mode={mode} toggleMode = {toggleMode}/>
      <Routes>
        <Route path='/' element = {<Home/>} ></Route>
        <Route path='/dashboard' element = {<Dashboard/>} ></Route>
        <Route path='/coin/:id' element = {<CoinPage/>} ></Route>
        <Route path='/compare' element = {<ComparePage/>} ></Route>
        <Route path='/watchlist' element = {<Watchlist/>} ></Route>

      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
