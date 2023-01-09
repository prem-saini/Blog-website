
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>


          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
