import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from './screens/home/home';
import { Registration } from './screens/registration/register';
import { Accounts } from './screens/google account/accounts';
import { SignIn } from './screens/sign in/sign';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/account/about" />} />
        <Route path="/account/about" element={<Home />} />
        <Route path="/account/registration" element={<Registration />} />
        <Route path="/account/google-account" element={<Accounts />} />
        <Route path="/account/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
