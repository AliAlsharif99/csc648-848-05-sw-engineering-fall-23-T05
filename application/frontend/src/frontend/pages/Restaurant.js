import React from "react";
import pic from "../images/ramenHouse.jpg";
import x from "../images/x.png";
import ramen from "../images/ramen.jpg";

function toggleReview() {
  const elem = document.querySelector(".review-ui");
  elem.classList.toggle("show");
}

function toggleThankYou() {
  const head = document.querySelector(".review-header");
  const text = document.querySelector(".review-textarea");
  const btn = document.querySelector(".review-btn");
  head.classList.add("hide");
  text.classList.add("hide");
  btn.classList.add("hide");
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

  const reviewUI = (
    <>
      <div className="review-ui">
        <p className="review-header">Leave your review for Fuki Ramen!</p>
        <textarea className="review-textarea" rows="12" cols="60"></textarea>
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

  const score1 = <p className="score">7.7</p>;
  const score2 = <p className="score">6.1</p>;
  const recScore = "Rec Score";
  const friendScore = "Friend Score";

  return (
    <>
      <div className="top">
        <div className="left">
          <h1>{restaurantName}</h1>
          <p>{restaurantLocation}</p>
          <div>{resAttributes}</div>
          <div className="cont">
            {score1}
            {recScore}
            {score2}
            {friendScore}
          </div>
          {reviewButton}
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
    </>
  );
}

export default Restaurant;
