import React from 'react'
import cutlery from "../images/cutlery.png"
import profile_rank_1 from "../images/profile_rank_1.jpeg"
import profile_rank_2 from "../images/profile_rank_2.jpeg"
import profile_rank_3 from "../images/profile_rank_3.jpeg"
import profile_rank_4 from "../images/profile_rank_4.jpeg"
import profile_rank_5 from "../images/profile_rank_5.jpeg"
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import { Link } from 'react-router-dom'

function Leaderboard() {
  return (
    <div className="page-container">
    <div className='leaderboard-container'>
      <h1 className='leaderboard-title'>Leaderboard</h1>

      <table className='leaderboard-table'>
        <thead>
          <th>Rank</th>
          <th>Name</th>
          <th># Restaurant Visited</th>
          <th>Score</th>
        </thead>

        <tbody>
          <tr>
            <td>#1</td>
            <td>
              <div className='leaderboard-name-data'>
                <Link to="/profile">
                  <img src={profile_rank_1} className='profile-pic' />
                  <p className='leaderboard-user-name'>James Smith</p>
                </Link>
              </div>
            </td>
            <td className='restaurants'>
              <div className='leaderboard-restarant-visited'>
                <p className='number-of-visits'>35</p>
                <img src={cutlery} className='restaurant-icon' />
              </div>
            </td>
            <td className='user-score'>3500</td>
          </tr>

          <tr>
            <td>#2</td>
            <td>
              <div className='leaderboard-name-data'>
                <Link to="/profile">
                  <img src={profile_rank_2} className='profile-pic' />
                  <p className='leaderboard-user-name'>Michael Johnson</p>
                </Link>
              </div>
            </td>
            <td className='restaurants'>
              <div className='leaderboard-restarant-visited'>
                <p className='number-of-visits'>34</p>
                <img src={cutlery} className='restaurant-icon' />
              </div>
            </td>
            <td className='user-score'>3400</td>
          </tr>

          <tr>
            <td>#3</td>
            <td>
              <div className='leaderboard-name-data'>
                <Link to="/profile">
                  <img src={profile_rank_3} className='profile-pic' />
                  <p className='leaderboard-user-name'>David Brown</p>
                </Link>
              </div>
            </td>
            <td className='restaurants'>
              <div className='leaderboard-restarant-visited'>
                <p className='number-of-visits'>33</p>
                <img src={cutlery} className='restaurant-icon' />
              </div>
            </td>
            <td className='user-score'>3300</td>
          </tr>

          <tr>
            <td>#4</td>
            <td>
              <div className='leaderboard-name-data'>
                <Link to="/profile">
                  <img src={profile_rank_4} className='profile-pic' />
                  <p className='leaderboard-user-name'>Emily Johnson</p>
                </Link>
              </div>
            </td>
            <td className='restaurants'>
              <div className='leaderboard-restarant-visited'>
                <p className='number-of-visits'>29</p>
                <img src={cutlery} className='restaurant-icon' />
              </div>
            </td>
            <td className='user-score'>2900</td>
          </tr>

          <tr>
            <td>#5</td>
            <td>
              <div className='leaderboard-name-data'>
                <Link to="/profile">
                  <img src={user2} className='profile-pic' />
                  <p className='leaderboard-user-name'>Suguru Geto</p>
                </Link>
              </div>
            </td>
            <td className='restaurants'>
              <div className='leaderboard-restarant-visited'>
                <p className='number-of-visits'>27</p>
                <img src={cutlery} className='restaurant-icon' />
              </div>
            </td>
            <td className='user-score'>2700</td>
          </tr>

          <tr>
            <td>#6</td>
            <td>
              <div className='leaderboard-name-data'>
                <Link to="/profile">
                  <img src={user1} className='profile-pic' />
                  <p className='leaderboard-user-name'>Gojo Satoru</p>
                </Link>
              </div>
            </td>
            <td className='restaurants'>
              <div className='leaderboard-restarant-visited'>
                <p className='number-of-visits'>25</p>
                <img src={cutlery} className='restaurant-icon' />
              </div>
            </td>
            <td className='user-score'>2500</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Leaderboard