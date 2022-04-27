//imports all other files we use in the code
//used prettier download on VS code for the entire thing for correct formatting
import "./App.css";
import React from "react";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/homePage"

function App () { 
  return (
    <div className="App">
      <simple />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/signUp">Sign up/Login </Link>
              
              <Link to="/HomePage">Home Page</Link>
              <Routes>
                <Route exact path="/signUp" element={<Signup />}></Route>
                <Route exact path="/HomePage" element={<HomePage /> }></Route>
              </Routes>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );

  }
export default App;
