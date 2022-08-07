import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAudio from './components/Dashboard/AddAudio';
import AddCategory from './components/Dashboard/AddCategory';
import AddQAAudio from './components/Dashboard/AddQAAudio';
import AddQACategory from './components/Dashboard/AddQACategory';
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
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='addcategory' element={<AddCategory/>}></Route>
            <Route path='add_qa_category' element={<AddQACategory/>}></Route>
            <Route path='addaudio' element={<AddAudio/>}></Route>
            <Route path='add_qa_audio' element={<AddQAAudio/>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
