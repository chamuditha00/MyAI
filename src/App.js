
import './App.css';
import Home from './component/Home';
import Prompt from './component/Prompt';

//import ButtonStart from './component/ButtonStart';

import {  Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/prompt/*" element={<Prompt/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
