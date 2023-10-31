import "./App.css";
import Navbar from "./frontend/Navbar";
import Home from "./frontend/pages/Home";
import Leaderboard from "./frontend/pages/Leaderboard";
import MeetTheTeam from "./frontend/pages/MeetTheTeam";
import Search from "./frontend/pages/Search";
import Profile from "./frontend/pages/Profile";
import EditProfile from "./frontend/pages/EditProfile";
import SignUp from "./frontend/pages/SignUp";
import Lists from "./frontend/pages/Lists";
import Restaurant from "./frontend/pages/Restaurant";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Restaurant />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/meettheteam" element={<MeetTheTeam />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/restaurant" element={<Restaurant />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
