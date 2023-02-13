import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHamburger, FaHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsHeart } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
const menuItems = [
  {
    id: 1,
    text: "Kitablar",
  },
  {
    id: 2,
    text: "Dəftərxana",
  },
  {
    id: 3,
    text: "Haqqımızda",
  },
  {
    id: 4,
    text: "Magazalarımız",
  },
  {
    id: 5,
    text: "Onlayn ödəniş",
  },
  {
    id: 6,
    text: "Əlaqə",
  },
];

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>("");
  const handleMenuItem = (text: string) => {
    setActiveMenuItem(text);
    sessionStorage.setItem("activeItem", text);
  };
  useEffect(() => {
    const currentItem = sessionStorage.getItem("activeItem");
    setActiveMenuItem(currentItem);
  }, []);

  return (
    <>
      <div className="border-b-[1px] border-[#D9DEE8] py-3 hidden md:block">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <nav>
              <ul className="flex items-center gap-7 text-[#0F3178]">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={`hover:text-[#FFAC56] ${
                      activeMenuItem === item.text ? "text-[#ffac56]" : ""
                    }`}
                    onClick={() => handleMenuItem(item.text)}
                  >
                    <Link href="/">{item.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="text-[#0F3178] hidden lg:block">
              Əlaqə:
              <strong> +994 567 34 34</strong>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:hidden fixed  border-t-[1px] border-[#ddd]  text-3xl text-[#FF9923] bottom-0 right-0 left-0 z-40 bg-[#fff] ">
        <div className="container  h-14 mx-auto flex items-center justify-between">
          <div>
            <RxHamburgerMenu />
          </div>
          <div>
            <Link href="/favorites">
              <AiOutlineHeart />
            </Link>
          </div>
          <div>
            <Link href="/cart">
              {" "}
              <SlBasket />
            </Link>
          </div>
          <div>
            <AiOutlineUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
