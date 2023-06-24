import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Appointment from './Pages/Appointment/Appointment';
import { Footer } from 'react-day-picker';
import MainFooter from './Pages/Footer/MainFooter';
import Login from './Pages/Login/Login/Login';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
