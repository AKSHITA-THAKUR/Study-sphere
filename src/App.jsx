
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import {Routes,Route} from 'react-router-dom';
import './App.css'
import Contact from "./Components/Contacts/Contact";
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      <div className="white-gradient"/>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      

      <Footer />
    </div>
  );
}

export default App;
