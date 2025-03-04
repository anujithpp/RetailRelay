import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/login" className="App-link">Login</Link>
            </header>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
