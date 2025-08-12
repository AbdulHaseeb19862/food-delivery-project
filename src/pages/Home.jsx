import React from "react";
import Nav from "../components/Nav";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import { food_items } from "../food";

function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-300 pb-16">
      <Nav />
      <CategoryCard />
      <div className="w-full flex justify-center items-center flex-wrap gap-10 mt-12 px-4">
        {food_items.map((item) => {
          return <FoodCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
