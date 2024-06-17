import logo from './logo.svg';
import './App.css';
import './pages/landingPage'
import LandingPage from './pages/landingPage';
import RegisterPage from './pages/registerPage';
import LoginUser from './pages/loginPage';
import ContactUs from './pages/contactUs';
import ForgotPassword from './pages/forgotPassword';
function App() {
  return (
    <div>
    <LandingPage />
    <RegisterPage/>
    <LoginUser/>
    < ContactUs/>
    <ForgotPassword />
    </div>
  );
}

export default App;
