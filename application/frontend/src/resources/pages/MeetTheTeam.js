import React from 'react'
import Navbar from '../Navbar'
import team_1 from "../images/team_1.jpeg"
import team_2 from "../images/team_2.png"
import team_3 from "../images/team_3.png"
import team_4 from "../images/team_4.png"
import team_5 from "../images/team_5.jpeg"
import team_6 from "../images/team_6.png"
import team_7 from "../images/team_7.png"
import team_8 from "../images/team_8.jpeg"
import team from "../images/team.jpeg"

function MeetTheTeam() {
  return (
    <div className='meettheteam-container'>
      <h1 className='mtt-title'>Meet the Team</h1>

      <div className='teams'>
        <div className='card-group'>          
          <div className='card'>
            <img src={team_4} className='teammate-image' />
            <p className='teammate-name'>Alec Nagal</p>
            <p className='teammate-title'>Team Lead</p>
          </div>

          <div className='card'>
            <img src={team_1} className='teammate-image' />
            <p className='teammate-name'>Gabriella Arcilla</p>
            <p className='teammate-title'>Doc Master</p>
          </div>

          <div className='card'>
            <img src={team_2} className='teammate-image' />
            <p className='teammate-name'>Kenneth Pang</p>
            <p className='teammate-title'>Database Master</p>
          </div>

          <div className='card'>
            <img src={team_3} className='teammate-image' />
            <p className='teammate-name'>Ali Alsharif</p>
            <p className='teammate-title'>Lead Frontend Engineer</p>
          </div>

          <div className='card'>
            <img src={team_6} className='teammate-image' />
            <p className='teammate-name'>Robel Ayelew</p>
            <p className='teammate-title'>Backend Engineer</p>
          </div>

          <div className='card'>
            <img src={team_5} className='teammate-image' />
            <p className='teammate-name'>Gerry Putra</p>
            <p className='teammate-title'>Lead Backend Engineer</p>
          </div>

          

          <div className='card'>
            <img src={team_7} className='teammate-image' />
            <p className='teammate-name'>James Lu</p>
            <p className='teammate-title'>Frontend Engineer</p>
          </div>

          <div className='card'>
            <img src={team_8} className='teammate-image' />
            <p className='teammate-name'>Robin Reyes</p>
            <p className='teammate-title'>Frontend Engineer</p>
          </div>
        </div>
      </div>

      <h2 className='mtt-title'>Our Story</h2>
      <p className='team-title'>Who We Are?
        WE ARE EIGHT INDIVIDUALS WHO LOVE FOOD</p>

      <div className='mid-content'>

        <div className='team-paragraph'>

          

          <p className='paragraph'> Biterate is a solution that allows food lovers to consistently find and track the best
            restaurants. This product is where you no longer had to search. Instead it
            knows your tastes and tells you the places that you would love at the click of a button!</p>
            
          <p className='paragraph'>
            We are excited to be almost done with this website!
          </p>
          <img src={team} className='team-image' />
        </div>

        

      </div>
                          
    </div>
  )
}
      
export default MeetTheTeam;