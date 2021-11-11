import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/pages/Footer/Footer';
import Home from './component/pages/HomePage/Home';
import Services from './component/pages/Services/Services';
import Signup from './component/pages/SignUp/Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
   <Navbar />
   <Routes>
     <Route path='/' exact element={<Home/>}/>
     <Route path='/services' exact element={<Services/>}/>
     <Route path='/sign-up' exact element={<Signup/>}/>
     
   </Routes >
   <Footer/>
    </Router>
  );
} 

export default App;
