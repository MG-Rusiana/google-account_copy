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
        <Route path="/" element={<Navigate replace to="/google-account_copy" />} />
        <Route path="/google-account_copy" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="google-account" element={<Accounts />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
