import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Header from './SharedComponent/Header';
import NotFound from './SharedComponent/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
