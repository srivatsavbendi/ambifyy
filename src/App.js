import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Ambience from "./Ambience";
import Card from './components/card';
import Wall from './components/wall';
//import Login from './Login';
import {Link} from 'react-router-dom';
import Home from './Home'; 
import Landing from './Landing';
//import Signup from './Signup';
//import Profile from './Profile';

export let str = "";  

function App() {
  return (
    <div className="App">
        <script src="https://apis.google.com/js/api.js"></script>
        <Router>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/ambience' element={<Ambience/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
