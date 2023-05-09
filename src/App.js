
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Addemployee from './components/Addemployee';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/'element={<Home />}></Route>
        <Route path='/add' element={<Addemployee />}></Route>
      </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
