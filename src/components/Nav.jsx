import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/api";
import { food_items } from "../food";
import { useSelector } from "react-redux";
function Nav() {
  const data = useSelector((state) => state.cart);
  const { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(MyContext);
  useEffect(() => {
    const newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);
  return (
    <div className="w-full h-24 flex justify-between items-center gap-2 shadow-md shadow-white px-6 md:px-12">
      <div className="bg-white w-12 h-12 flex justify-center items-center rounded-md  text-3xl text-green-600 cursor-pointer shadow-md shadow-gray-400">
        <MdFastfood />
      </div>
      <form
        action=""
        className="flex items-center gap-2 w-2/3 md:w-3/4 bg-white h-14 rounded-xl p-3 shadow shadow-gray-400"
      >
        <div className="w-8 text-green-600 text-2xl font-bold ">
          <IoSearch />
        </div>
        <div className="w-full">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search Items...."
            className="w-full outline-none placeholder:text-base  md:placeholder:text-lg placeholder:text-gray-700  "
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
      </form>
      <div
        className="bg-white w-14 h-12 flex justify-center items-center rounded-md  text-3xl text-green-600 cursor-pointer relative shadow-md shadow-gray-400 "
        onClick={() => setShowCart(true)}
      >
        <span className="text-base absolute top-0 right-0 font-bold p-0.5">
          {data.length}
        </span>
        <LuShoppingBag />
      </div>
    </div>
  );
}

export default Nav;
