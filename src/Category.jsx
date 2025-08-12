import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { TbSalad } from "react-icons/tb";
import { MdOutlineDining } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Category = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmall className="w-12 h-12 text-green-600" />,
  },
  {
    id: 2,
    name: "Breakfast",
    icon: <MdOutlineFreeBreakfast className="w-16 h-16 text-green-600" />,
  },
  {
    id: 3,
    name: "Soups",
    icon: <TbSoup className="w-12 h-12 text-green-600" />,
  },

  {
    id: 4,
    name: "Pasta",
    icon: <TbSalad className="w-12 h-12 text-green-600" />,
  },
  {
    id: 5,
    name: "Main_Course",
    icon: <MdOutlineDining className="w-12 h-12 text-green-600" />,
  },
  {
    id: 6,
    name: "Pizza",
    icon: <GiFullPizza className="w-12 h-12 text-green-600" />,
  },
  {
    id: 7,
    name: "Burger",
    icon: <GiHamburger className="w-12 h-12 text-green-600" />,
  },
];

export default Category;
