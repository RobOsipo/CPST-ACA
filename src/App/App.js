import { Routes, Route, Navigate} from 'react-router-dom'
import MainNavigation from '../SharedComponents/MainNavigation/MainNavigation';
import DummyPage from '../pages/DummyPage/DummyPage';

import classes from './App.module.scss'

function App() {

  return (
    <>
    <MainNavigation />
    <Routes>
      <Route to="/" element={<DummyPage />} />
      <Route to="/myplace" element={<DummyPage />} />
      <Route to="/addplace" element={<DummyPage />} />
      <Route to="/auth" element={<DummyPage />} />
      {/* <Navigate to="/" /> */}
    </Routes>
    </>
  );
}

export default App;
