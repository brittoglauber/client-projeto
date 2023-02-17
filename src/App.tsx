import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/registro' element={<SignUp />}/>
        <Route path='/entrar' element={<SignIn />}/>
      </Routes>
    </Router>
  );
}

export default App;
