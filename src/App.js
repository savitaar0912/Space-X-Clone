import Home from './components/Home';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footbar from './components/Footbar';
import Rockets from './components/Rockets';
import Capsules from './components/Capsules';
import Ships from './components/Ships';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/rockets' element={<Rockets/>}/>
        <Route exact path='/capsules' element={<Capsules/>}/>
        <Route exact path='/ships' element={<Ships/>}/>
      </Routes>
      <Footbar/>
    </Router>
  )
}

export default App;
