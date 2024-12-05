import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
/**Chunking
 * Code Splitting
 * Dynamic Bundling
 * Lazy Loading
 * on Demand Loading
 */

const Title = () => (
  <div>
    <a href="/">
      <img
        className="logo w-20 h-20"
        src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
        alt=""
      />
    </a>
  </div>
);

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    console.log("useEffect is called");
  });
  //useEffect is called after the component is rendered and it will keeps the callback Function and call it after render and then it moves ahead
  //Subscribing to the store using a selector
  //useSelector gives us access to the store
  //Selector  helps us to identify what portion of a store I need to read  and I need to subscribe to
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  return (
    <div
      className="header flex justify-between bg-pink-200 shadow-md"
      key={isLogin ? "loggedIn" : "loggedOut"}
    >
      <Title />
      <div className="nav-items flex flex-col justify-center">
        <ul className="flex justify-between">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">Cart({cartItems.length})</li>

          <button
            className="px-4"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Logout" : "Log in"}
          </button>
          <li className="px-4">
            <b>{loggedInUser}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
