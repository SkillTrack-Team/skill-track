
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import axios from 'axios'

const App = () =>{

    return (
        <div>
          <Login />  
        </div>
    )
}

 /* <Router>
            <h1>
            Welcome to React App thats build using Webpack and Babel separately
            </h1>
            <Routes>
            <Route path="/login" element={<Login />} />
            </Routes>
        </Router> */
export default App