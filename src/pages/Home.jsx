import React, { useContext } from "react";
import Nav from "../components/Nav";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import { food_items } from "../food";
import { MyContext } from "../context/api";
import { RxCross2 } from "react-icons/rx";
import OrderCard from "../components/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearCart } from "../features/cartSlice";
import Footer from "../components/Footer";

function Home() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart);
  console.log(items);
  const { input, cate, setCate, showCart, setShowCart } = useContext(MyContext);

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
  const subTotal = items.reduce(
    (total, item) => total + item.food_quantity * item.price,
    0
  );
  const deliveryFee = 20;
  const taxes = (subTotal * 0.5) / 100;
  const total = Math.floor(subTotal + taxes + deliveryFee);

  return (
    <div className="w-full min-h-screen bg-slate-300 flex flex-col  ">
      <Nav />
      <div className="flex-grow">
        {!input ? <CategoryCard filterItem={filterItem} /> : null}

        {cate.length > 0 ? (
          <div className="w-full flex justify-center items-center flex-wrap gap-10 mt-12 px-4">
            {cate.map((item) => {
              return <FoodCard key={item.id} item={item} />;
            })}
          </div>
        ) : (
          <div className="flex justify-center mt-8 text-3xl text-green-600 font-bebase">
            No Dish Found
          </div>
        )}
        <div
          className={`w-full md:w-2/5 min-h-screen bg-white fixed top-0 right-0 p-5 transition-all duration-500 shadow-md shadow-gray-600 flex flex-col    ${
            showCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <header className="flex justify-between items-center text-green-600 ">
            <p className="text-xl  font-bebase">Order Items</p>
            <RxCross2
              className="text-2xl font-bold cursor-pointer hover:text-gray-600"
              onClick={() => setShowCart(false)}
            />
          </header>

          <div className="max-h-[50vh] overflow-y-auto">
            {items.map((item) => {
              return <OrderCard key={item.id} item={item} />;
            })}
          </div>
          {items.length > 0 ? (
            <>
              <div className="p-8 border-t-2 border-b-2 border-gray-700">
                <div className="flex flex-col gap-5">
                  <div className="w-full flex justify-between">
                    <p className="text-lg font-poppins">Subtotal</p>
                    <p className="text-green-600 text-lg font-poppins">
                      Rs: {subTotal}/-
                    </p>
                  </div>
                  <div className="w-full flex justify-between">
                    <p className="text-lg font-poppins">Delivery Fee</p>
                    <p className="text-green-600 text-lg font-poppins">
                      Rs: {deliveryFee}/-
                    </p>
                  </div>
                  <div className="w-full flex justify-between">
                    <p className="text-lg font-poppins">Taxes</p>
                    <p className="text-green-600 text-lg font-poppins">
                      Rs: {taxes}/-
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 border-t-2 border-gray-700">
                <div className="w-full flex justify-between">
                  <p className="text-lg font-poppins font-semibold">Total</p>
                  <p className="text-green-600 text-lg font-poppins font-semibold">
                    Rs: {total}/-
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center  w-full  ">
                <button
                  className="w-full max-w-4/5 hover:bg-green-500  bg-green-600 transition-all  py-3 rounded-md text-white text-xl cursor-pointer "
                  onClick={() => {
                    dispatch(clearCart());
                    toast.success("Order Placed Successfully....");
                  }}
                >
                  Place Order
                </button>
              </div>
            </>
          ) : (
            <div className="text-green-600 font-bebase text-2xl flex justify-center items-center pt-10">
              Empty Cart
            </div>
          )}
        </div>
      </div>
      <Footer className="items-end"></Footer>
    </div>
  );
}

export default Home;
