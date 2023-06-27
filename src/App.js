import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Import components
import Home from './components/Home';
import Navbar from './components/Navbar';
// import './App.css';

function App() {
    return (
        <Router>
            <div className="container">
                
           <div className="row justify-content-start">
               <div className="col-1">
                       <Navbar/>
               </div><div className="col">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                {/*<Route path="/essays" component={Essays}/>*/}
                {/*<Route path="/research-projects" component={ResearchProjects}/>*/}
                {/*<Route path="/login" component={Login}/>*/}
                {/*<Route path="/register" component={Register}/>*/}
            </Routes>
           </div></div></div>
           
        </Router>
    )
        ;
}

export default App;
