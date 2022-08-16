import logo from '../../logo.svg';
import '../../App.css';
import Header from '../header/header';
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import RegistrationForm from '../registration/registrationForm'
import Navbar from '../Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    
    <Router>
     
      <Navbar />
      <Routes>
        <Route exact path="/signUp" element={<RegistrationForm/>}/>
        </Routes>
    </Router>
  );
}

export default App;
