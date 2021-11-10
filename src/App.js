import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <Router>
   <Navbar />
   <Routes>
     <Route path='/'/>
   </Routes>
    </Router>
  );
}

export default App;
