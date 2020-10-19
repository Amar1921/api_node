import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Slider} from './components/header'
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import './index.css';
import App from './App';


ReactDOM.render(
    <Router>
        <Slider/>
        <Navbar/>
        <Route exact path='/api/flyers/' component={App}/>
    </Router>,

    document.getElementById('root')
);
