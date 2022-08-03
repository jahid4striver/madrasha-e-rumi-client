import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
