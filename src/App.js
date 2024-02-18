// import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
// import LoadingBar from 'react-top-loading-bar'

// import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
const App =()=> {
  const pageSize=5;
//   state={
//     progress:0
//   }
//  setprogress =(progress)=>{
//    setState({progress: progress})
// }
 
    return (
     
      <div>
        <Router>
        <Navbar/>
        {/* <LoadingBar
        color='#f11946'
        progress={ state.progress}
      
      /> */}
       <Routes>
       <Route exact path='/' element={<News    key="general" pagesize={ pageSize} country="in" category="general" />}></Route>
          <Route exact  path="/sports" element={<News    key="sports" pagesize={ pageSize} country="in" category="sports"/>}></Route>
           <Route exact  path='/business' element={<News    key="business" pagesize={ pageSize} country="in" category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News    key="entertainment" pagesize={ pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path='/general' element={<News    key="general" pagesize={ pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/health' element={<News   key="health" pagesize={ pageSize} country="in" category="health"/>}></Route>
          <Route exact path='/science' element={<News   key="science" pagesize={ pageSize} country="in" category="science"/>}></Route>
          <Route exact path='/technology' element={<News   key="technology" pagesize={ pageSize} country="in" category="technology"/>}></Route> 
       </Routes>
        
        </Router>
      </div>
    )
  }



 export default App;