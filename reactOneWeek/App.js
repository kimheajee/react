import './App.css';
import { useState } from 'react';
import RandomAverage from "./RandomAverage.js"
import Wrap from './Circle';
import About from './About';

import { Router, Route, Routes } from 'react-router-dom';

function App() {

  let title = ['월','화','수','목','금','토','일'];
  let arr=title.map(value => Math.ceil(Math.random()*5));
  let [count, setCount] = useState(arr);
  //console.log(arr,"App")

  const Reset = () => {
    let arr = [0,0,0,0,0,0,0];
    setCount(arr)
    //console.log(arr,"Reset")
  }
 
  return (
    <div className="App">
                <Routes>
                          <Route path="/" element={
                               <>
                    <div className="OneWeek">
                                
                              <h3>내 일주일은?</h3>
                                <>
                                  <Wrap yeah={count[0]} day={title[0]}/>
                                  <Wrap yeah={count[1]} day={title[1]}/>
                                  <Wrap yeah={count[2]} day={title[2]}/>
                                  <Wrap yeah={count[3]} day={title[3]}/>
                                  <Wrap yeah={count[4]} day={title[4]}/>
                                  <Wrap yeah={count[5]} day={title[5]}/>
                                  <Wrap yeah={count[6]} day={title[6]}/>
                              </>
                              <div className="Average">
                            <h1>평균 평점</h1>
                            </div>
 
                        <RandomAverage age={count}></RandomAverage><p style={{display:'inline'}}> 점</p>
                        <div className="Reset">
                          <p onClick={Reset}>Reset</p>
                        </div>
                    </div>
                    </>   }/>
                          <Route path="/detail/:day" element={<About/>} />
                  </Routes>
  
    </div>
  );
}




export default App;
