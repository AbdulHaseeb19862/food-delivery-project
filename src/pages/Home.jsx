import React, { useState } from "react";
import Nav from "../components/Nav";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import { food_items } from "../food";

function Home() {
  const [cate, setCate] = useState(food_items);
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
      <CategoryCard filterItem={filterItem} />
      <div className="w-full flex justify-center items-center flex-wrap gap-10 mt-12 px-4">
        {cate.map((item) => {
          return <FoodCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
