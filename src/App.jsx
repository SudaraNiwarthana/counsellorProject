import '@fortawesome/fontawesome-free/css/all.min.css';

import NavbarThird from './Navbar/NavbarThird';
import ProfessionalGuidance from './components/ProfessionalGuidance';
import AppointmentForm from './components/AppointmentForm';
import SecondUi from "./components/SecondUi";
import NavbarSecond from './Navbar/NavbarSecond';
import Navbar from "./Navbar/Navbar";
import Dashboard from "./components/Dashboard";
import MarketplaceInterface from './components/Category';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import LandingPagenew from './components/Landingpage';
import PatientInfoCard from './components/PatientInfoCard';

function NavbarWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = ['/Signup', '/login'];
  return !hideNavbarRoutes.includes(location.pathname) ? <Navbar /> : null;
}

function App() {
  return (
    <Router>
      {/* NavbarWrapper now inside Router */}
      <NavbarWrapper />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Services' element={<SecondUi />} />
        <Route path='/clients' element={<ProfessionalGuidance />} />
        <Route path='/test' element={<AppointmentForm />} />
        <Route path='/marketplace' element={<MarketplaceInterface />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Landingpage' element={<LandingPagenew />} />
        <Route path='/PatientInfoCard' element={<PatientInfoCard />} />
      </Routes>
    </Router>
  );
}

export default App;
