import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Footer from './SharedComponent/Footer';
import Header from './SharedComponent/Header';
import NotFound from './SharedComponent/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>



      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
