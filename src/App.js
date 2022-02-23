import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderItems from "./components/header/HeaderItems";
function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/nav-menu" element={<HeaderItems />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
