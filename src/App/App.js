import {Link, Routes, Route, Navigate} from 'react-router-dom'
import MainNavigation from '../SharedComponents/MainNavigation/MainNavigation';
import DummyPage from '../pages/DummyPage/DummyPage';
// import './App.css';

function App() {
  return (
    <>
    <MainNavigation />
    <Routes>
      <Route to="/" element={<DummyPage />} />
      <Route to="/places/new" element={<DummyPage />} />
    </Routes>
    </>
  );
}

export default App;
