import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import { food_items } from "../food";
import { MyContext } from "../context/api";
import { RxCross2 } from "react-icons/rx";

function Home() {
  const { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(MyContext);

  function filterItem(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category.toLowerCase()
      );
      setCate(newList);
    }
  }

  return (
    <div className="w-full min-h-screen bg-slate-300 pb-16">
      <Nav />
      {!input ? <CategoryCard filterItem={filterItem} /> : null}

      <div className="w-full flex justify-center items-center flex-wrap gap-10 mt-12 px-4">
        {cate.map((item) => {
          return <FoodCard key={item.id} item={item} />;
        })}
      </div>
      <div
        className={`w-2/5 min-h-screen bg-white fixed top-0 right-0 p-5 transition-all duration-500 shadow-md shadow-gray-600 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between items-center text-green-600 ">
          <p className="text-xl font-bold">Order Items</p>
          <RxCross2
            className="text-2xl font-bold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
      </div>
    </div>
  );
}

export default Home;
