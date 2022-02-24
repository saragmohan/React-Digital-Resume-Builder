import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Home />} />
          <Route exact path="/login" element={<Home />} />
          <Route exact path="/register" element={<Home />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
