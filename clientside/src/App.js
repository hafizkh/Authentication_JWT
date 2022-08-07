import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route exact path='/' element= {<Home/>} />
        <Route path='/home' element= {<Home/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register/>} />
      </Routes>

      </Router>

    </div>
  );
}

export default App;
