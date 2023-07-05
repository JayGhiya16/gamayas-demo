// import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/:id" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
