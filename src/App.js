import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Appointment from './Pages/Appointment/Appointment';
import { Footer } from 'react-day-picker';
import MainFooter from './Pages/Footer/MainFooter';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      </Routes>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
