import React, { useState } from "react";
import { createContext } from "react";
import { food_items } from "../food";

export const MyContext = createContext();

function ContextProivder({ children }) {
  let [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);
  const [showCart, setShowCart] = useState(false);
  return (
    <MyContext.Provider
      value={{ input, setInput, cate, setCate, showCart, setShowCart }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default ContextProivder;
