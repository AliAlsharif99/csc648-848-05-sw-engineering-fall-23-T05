import './App.css';
import Navbar from './frontend/Navbar';
import Home from './frontend/pages/Home';
import Leaderboard from './frontend/pages/Leaderboard';
import MeetTheTeam from './frontend/pages/MeetTheTeam';
import Search from './frontend/pages/Search';
import Profile from './frontend/pages/Profile';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/leaderboard' element={<Leaderboard/>} />
          <Route path='/meettheteam' element={<MeetTheTeam/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes> 
    </div>
    </>
  );
}

export default App;
