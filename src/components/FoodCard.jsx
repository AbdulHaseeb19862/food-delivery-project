import React from "react";
import { LuLeaf } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

function FoodCard({ item }) {
  const { food_name, food_type, food_image, price } = item;

  return (
    <div className="w-80 h-[450px] bg-white p-3 overflow-hidden rounded-md">
      <div className="w-full ">
        <img
          src={food_image}
          alt=""
          className="w-full h-64 rounded-md object-cover "
        />
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <h2 className="text-3xl font-bebase">{food_name}</h2>
        <div className="flex justify-between">
          <span className="font-poppins font-bold text-gray-700">
            Rs: {price}/-
          </span>
          <div className="flex items-center justify-center gap-1 text-green-600 text-xl font-bold font-poppins">
            {food_type === "veg" ? <LuLeaf /> : <GiChickenOven />}
            <span>{food_type}</span>
          </div>
        </div>
        <button className="text-lg bg-green-800 py-3 font-poppins font-bold text-white rounded-md hover:bg-green-600 cursor-pointer">
          Add to dish
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
