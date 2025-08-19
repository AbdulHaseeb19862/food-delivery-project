import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  DecreementQty,
  IncreementQty,
  removeToCart,
} from "../features/cartSlice";
import { toast } from "react-toastify";

function OrderCard({ item }) {
  const dispatch = useDispatch();
  const { id, food_image, food_name, price, food_quantity } = item;

  return (
    <div className="w-full h-36 flex justify-between shadow-lg shadow-gray-300 p-1 mt-6">
      <div className="w-2/3 h-full flex gap-8 bg-white  p-2 ">
        <div className="w-[60%] h-full  rounded-lg ">
          <img
            src={food_image}
            alt="Food Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-[40%] flex flex-col justify-center gap-3   ">
          <p className="text-xl font-bebase  ">{food_name}</p>
          <div className="w-full h-12 border-2 border-green-600 flex rounded-md ">
            <button
              className="w-[30%] text-2xl font-bold hover:bg-gray-200 text-green-600 cursor-pointer rounded-lg"
              onClick={() => {
                if (food_quantity > 1) {
                  dispatch(DecreementQty({ id }));
                }
              }}
            >
              -
            </button>

            <span className="w-[40%] bg-slate-300 flex justify-center items-center text-green-600 text-xl font-poppins">
              {food_quantity}
            </span>
            <button
              className="w-[30%] text-2xl font-bold hover:bg-gray-200 text-green-600 cursor-pointer "
              onClick={() => dispatch(IncreementQty({ id }))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-7">
        <p className="text-green-600 font-semibold text-lg font-poppins">
          Rs {price}/-
        </p>
        <MdOutlineDeleteOutline
          className="text-3xl text-red-600 hover:text-red-500 cursor-pointer"
          onClick={() => {
            dispatch(removeToCart(id));
            toast.error("Item Deleted Successfully.....");
          }}
        />
      </div>
    </div>
  );
}

export default OrderCard;
