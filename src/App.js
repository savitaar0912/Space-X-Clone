import Home from './components/Home';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footbar from './components/Footbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
      <Footbar/>
    </Router>
  )
}

export default App;
