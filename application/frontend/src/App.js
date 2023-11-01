import "./App.css";
import Navbar from "./resources/Navbar";
import Home from "./resources/pages/Home";
import Leaderboard from "./resources/pages/Leaderboard";
import MeetTheTeam from "./resources/pages/MeetTheTeam";
import Search from "./resources/pages/Search";
import Profile from "./resources/pages/Profile";
import EditProfile from "./resources/pages/EditProfile";
import SignUp from "./resources/pages/SignUp";
import Login from "./resources/pages/Login";
import Lists from "./resources/pages/Lists";
import Restaurant from "./resources/pages/Restaurant";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <Restaurant /> */}
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/meettheteam" element={<MeetTheTeam />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/restaurant" element={<Restaurant />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
