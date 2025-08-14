import React from "react";
import Category from "../Category";

function CategoryCard({ filterItem }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-10 md:gap-10 mt-7 cursor-pointer md:px-12 px-6 ">
      {Category.map((item) => {
        return (
          <div
            key={item.id}
            className="w-28 h-28 bg-white flex flex-col items-center justify-center gap-2  rounded-md shadow-md shadow-gray-400 hover:border-4 hover:border-green-600 transition-all ease-in"
            onClick={() => filterItem(item.name)}
          >
            <div className="shadow-md shadow-gray-400 p-2">{item.icon}</div>
            <div className="flex justify-start px-2">
              <h3 className="font-bold">{item.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCard;
