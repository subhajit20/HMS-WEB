import LoginPage from './pages/LoginPage';
import Navbar from './components/navs/Navbar';
import PatientRegistration from './pages/PatientRegistration';
import DashboardNav from './components/navs/DashboardNav';
import BookAppointment from './pages/BookAppointment';
import { Routes, Route } from 'react-router-dom';
import PatientList from './pages/PatientList';
import AppointmenListPage from './pages/AppointmenListPage';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route Component={Navbar}>
          <Route path='/' Component={LoginPage} />
        </Route>

        <Route Component={DashboardNav}>
          <Route path='/patient/reg' Component={PatientRegistration} />
          <Route path='/appointment/booking' Component={BookAppointment} />
          <Route path='/patient/list' Component={PatientList} />
          <Route path='/appointment/list' Component={AppointmenListPage} />
        </Route>
      </Routes>
    </>
  )
}

export default App
