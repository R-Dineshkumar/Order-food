/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import star from './Images/star icon.png';

import { CartContext } from './cartcontext';

export default function FoodCards(props) {
  const [food, setFood] = React.useState({ ...props.info, restaurantId: props.restaurantId });
  const [cartItems, updateCartItems] = useContext(CartContext);

  function addQn() {
    setFood((prev) => ({ ...prev, foodQuantity: 1 }));
    updateCartItems({ ...food, foodQuantity: 1 });
  }

  function addQuantity() {
    setFood((prev) => ({ ...prev, foodQuantity: (prev.foodQuantity) + 1 }));
    updateCartItems({ ...food, foodQuantity: food.foodQuantity + 1 });
  }

  function subQuantity() {
    setFood((prev) => ({ ...prev, foodQuantity: (prev.foodQuantity) - 1 }));
    updateCartItems({ ...food, foodQuantity: food.foodQuantity - 1 });
  }

  const num = (cartItems?.filter((el) => el?.id === food.id))?.[0]?.foodQuantity;

  return (
    <div className="container">
      <img src={food.image_url} className="food-img" alt="food-pic" />
      <div className="food-content">
        <h2 className="food-name">{food.name}</h2>
        <p className="food-type">
          $
          {food.cost}
        </p>
        <div className="food-rating">
          <img src={star} alt="rating" />
          <p>{food.rating}</p>
        </div>
        {(!num) && <button className="add" type="button" onClick={addQn}>ADD</button>}
        { !(!num) && (
          <div className="btn">
            <button type="button" onClick={subQuantity}>-</button>
            <p className="quantity-num">{num}</p>
            <button type="button" onClick={addQuantity}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
