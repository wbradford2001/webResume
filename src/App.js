
import './App.css';

import NavB from './components/Navigation';
import Home from './components/Pages/HomePage/HomePage';
import About from './components/Pages/AboutMe/AboutMe';
import Contact from './components/Pages/Contact/Contact';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
    <NavB />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/AboutMe' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
    </Routes>
    </Router>
  );
}

export default App;
