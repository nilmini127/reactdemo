import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import RegistrationForm from '../src/components/registration/registrationForm'

function App() {
  return (
    <div className="App">
       <Header/>
       <RegistrationForm/>
    </div>
  );
}

export default App;
