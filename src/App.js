import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forside from './pages/Forside';
import Kontakt from './pages/Kontakt';
import Projekter from './pages/Projekter';
import Booking from './pages/Booking';
import Omos from './pages/Omos';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AdminBooking from './pages/admin/AdminBooking';
import OpdaterAftale from './pages/admin/OpdaterAftale';
import OpretAftale from './pages/admin/OpretAftale';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Forside/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
        <Route path="/projekter" element={<Projekter/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path='/aftaler' element={<AdminBooking/>}/>
        <Route path='/aftaler/posts/:postId' element={<OpdaterAftale/>}/>
        <Route path='/opretaftale' element={<OpretAftale/>}/>
        <Route path="/omos" element={<Omos/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
