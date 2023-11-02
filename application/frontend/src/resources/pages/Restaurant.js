import React from "react";
import pic from "../images/ramenHouse.jpg";
import x from "../images/x.png";
import ramen from "../images/ramen.jpg";

function toggleReview() {
  const elem = document.querySelector(".review-ui");
  elem.classList.toggle("show");
}

function toggleReserve() {
  const res = document.querySelector(".reserve-ui");
  res.classList.toggle("show");
}

function toggleThankYou() {
  const head = document.querySelector(".review-header");
  const text = document.querySelector(".review-textarea");
  const btn = document.querySelector(".review-btn");
  const reviewForm = document.querySelector(".review-form");
  head.classList.add("hide");
  text.classList.add("hide");
  btn.classList.add("hide");
  reviewForm.classList.add("hide");
}

function Restaurant() {
  // restaurant info
  const restaurantName = <p className="rest-name">Fuki Ramen</p>;
  const restaurantLocation = (
    <p className="rest-loc">Japantown, San Francisco, CA</p>
  );
  const resAttributes = (
    <ul className="res-attributes">
      <li>$$</li>
      <li>Casual Dinner</li>
      <li>Lunch</li>
      <li>Date Night</li>
      <li>Takeout</li>
      <li>Delivery</li>
    </ul>
  );

  const reviewButton = (
    <button className="btn" onClick={toggleReview}>
      Leave a Review!
    </button>
  );

  const reserveButton = (
    <button className="btn" onClick={toggleReserve}>
      Book your seat!
    </button>
  );

  const reviewUI = (
    <>
      <div className="review-ui">
        <p className="review-header">Leave your review for Fuki Ramen!</p>
        <form className="review-form">
          <div>
            <input type="radio" value="1" id="1" class></input>
            <label for="1">1</label>
          </div>
          <div>
            <input type="radio" value="2" id="2"></input>
            <label for="2">2</label>
          </div>
          <div>
            <input type="radio" value="3" id="3"></input>
            <label for="3">3</label>
          </div>
          <div>
            <input type="radio" value="4" id="4"></input>
            <label for="4">4</label>
          </div>
          <div>
            <input type="radio" value="5" id="5"></input>
            <label for="5">5</label>
          </div>
          <div>
            <input type="radio" value="6" id="6"></input>
            <label for="6">6</label>
          </div>
          <div>
            <input type="radio" value="7" id="7"></input>
            <label for="7">7</label>
          </div>
          <div>
            <input type="radio" value="8" id="8"></input>
            <label for="8">8</label>
          </div>
          <div>
            <input type="radio" value="9" id="9"></input>
            <label for="9">9</label>
          </div>
          <div>
            <input type="radio" value="10" id="10"></input>
            <label for="10">10</label>
          </div>
        </form>
        <textarea className="review-textarea" rows="10" cols="40"></textarea>
        <button
          className="review-btn"
          onClick={toggleThankYou}
          type="submit"
          width="100px"
        >
          submit
        </button>
        <p className="thanks">Thank you!</p>
        <img src={x} height="20px" className="x" onClick={toggleReview}></img>
      </div>
    </>
  );

  const reserveUI = (
    <div className="review-ui reserve-ui">
      <img src={x} height="20px" className="x" onClick={toggleReserve}></img>
    </div>
  );

  const score1 = <p className="score">7.8</p>;
  const score2 = <p className="score">8.4</p>;
  const recScore = "Rec Score";
  const friendScore = "Friend Score";

  return (
    <>
      <div className="top">
        <div className="left">
          <div className="text">
            <h1>{restaurantName}</h1>
            <p>{restaurantLocation}</p>
            <div>{resAttributes}</div>
            <div className="cont">
              {score1}
              {recScore}
              {score2}
              {friendScore}
            </div>
          </div>
          <div className="btns">
            {reviewButton}
            {reserveButton}
          </div>
        </div>
        <img
          src={pic}
          alt="ramen house with tables and a bar"
          width="550px"
        ></img>
      </div>

      <div className="bottom">
        <p className="popular-txt">Popular Dishes</p>
        <div className="dishes">
          <div className="dish">
            <img src={ramen} alt="bowl of ramen" height="200px"></img>
            <p>dish name</p>
          </div>
          <div className="dish">
            <img src={ramen} alt="bowl of ramen" height="200px"></img>
            <p>dish name</p>
          </div>
          <div className="dish">
            <img src={ramen} alt="bowl of ramen" height="200px"></img>
            <p>dish name</p>
          </div>
          <div className="dish">
            <img src={ramen} alt="bowl of ramen" height="200px"></img>
            <p>dish name</p>
          </div>
          <div className="dish">
            <img src={ramen} alt="bowl of ramen" height="200px"></img>
            <p>dish name</p>
          </div>
        </div>
      </div>

      {reviewUI}
      {reserveUI}
    </>
  );
}

export default Restaurant;
