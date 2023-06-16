import Home from './components/Home';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
        <Home/>
      <Routes>
        <Route exact path='/'/>
      </Routes>
    </Router>
    )
}

export default App;
