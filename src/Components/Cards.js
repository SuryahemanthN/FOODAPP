import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const [isHeartFilled, setHeartFilled] = useState(false);
  

  const navigate = useNavigate();
  const location = useLocation();

  const handleHeartClick = () => {
    setHeartFilled(!isHeartFilled);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl relative">
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-blue ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer " />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            className="hover:scale-105 transition-all duration-200 md:h-32 md:w-42 gap-10 "
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <Link to={`/menu/${item._id}`}></Link>
        <p>{item.recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$</span>
            {item.price}
          </h5>
          <button
            className="btn bg-blue">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;