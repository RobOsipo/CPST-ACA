import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import MainNavigation from '../SharedComponents/MainNavigation/MainNavigation';
import DummyPage from '../pages/DummyPage/DummyPage';
// import './App.css';

function App() {
  const navigate = useNavigate()
  return (
    <>
    <MainNavigation />
    <Routes>
      <Route to="/" element={<DummyPage />} />
      <Route to="/places/new" element={<DummyPage />} />
      navigate("/")
    </Routes>
    </>
  );
}

export default App;
