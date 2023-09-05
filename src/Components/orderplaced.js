import React from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { NavBar } from './Header';
import tick from './Images/order.png';

export default function OrderPlaced() {
  const navigate = useNavigate();

  function redirect() {
    navigate('/');
  }
  return (
    <>
      <NavBar />
      <Confetti />
      <div className="empty-container1">
        <img alt="tick" src={tick} />
        <h1>Order Placed Successfully</h1>
        <p>Thank you for ordering.Visit again</p>
        <button type="button" className="order-now" onClick={redirect}>Go To Home page</button>
      </div>
    </>
  );
}
