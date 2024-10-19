import './App.css';
import Login from "./screens/Login";
import Homepage from "./screens/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={< Login />} />
        <Route path="/homepage" element={< Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
