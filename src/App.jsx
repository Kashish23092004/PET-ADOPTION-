// App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import Content from './components/Content';
import Petlistings from './components/Petlistings';
import PawsitiveMatch from './components/Pawsitivematch';
import Petprofile from './components/Petprofile';
import Adopting from './components/Adopting';
import Signin from './components/Signin';
import Login from './components/login';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './components/Context/AuthProvider';

function App() {
  const [authUser] = useAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={authUser ? <Petlistings /> : <Navigate to="/Login" />} />
        <Route path="/petmatch" element={<PawsitiveMatch /> } />
        <Route path="/profile" element={ <Petprofile /> } />
        <Route path="/adopt" element={authUser ? <Adopting /> : <Navigate to="/Login" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </div>
  );
}

export default App;
