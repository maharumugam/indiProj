import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Login from './Components/Login';
import Signup from './Components/Signup';




function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
