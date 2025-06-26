import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="body">
        <p>Welcome to Michael's portfolio. The page is in renovation at the moment.</p>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
