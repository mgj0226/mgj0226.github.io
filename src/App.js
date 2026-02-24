import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/MainComponents/About';
import Projects from './components/MainComponents/Projects';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
