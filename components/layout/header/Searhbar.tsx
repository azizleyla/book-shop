import Image from "next/image";
import React, { useEffect, useState } from "react";
import Img from "../../Data/Img";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";

const Searhbar = () => {
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);

  const handleResize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 1300) {
      setIsShowSearchModal(false);
    } else {
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-[1px] py-2 border-[#D9DEE8]">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex items-center gap-16 ">
            <div className="w-16 h-16 md:w-20 md:h-20">
              <Link href="/">
                <Image
                  src={Img.logo}
                  alt="logo"
                  className="w-full h-full"
                />
              </Link>
            </div>
            <div className="relative hidden xl:block bg-[#F0F2F5] min-w-[640px] py-[17px] pr-16 pl-6 mt-3 rounded-[60px] text-[#5B6C8F]">
              <input
                placeholder="Məhsullarda axtarış"
                className="bg-transparent border-none outline-none w-[95%] text-md"
              />
              <div className="absolute top-2/4 -mt-[10px] right-4">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="ml-auto flex mt-5">
            <ul className="flex items-center gap-6 text-3xl text-[#FFAC56]  cursor-pointer">
              <li
                className="hidden lg:block xl:hidden"
                onClick={() => setIsShowSearchModal(true)}
              >
                <AiOutlineSearch className="text-4xl" />
              </li>
              <li
                className="block lg:hidden"
                onClick={() => setIsShowSearchModal(true)}
              >
                <AiOutlineSearch className="text-2xl md:text-4xl text-[#274585]" />
              </li>
              <li className="hidden lg:block relative">
                <Link href="/cart">
                <SlBasket className="" />
                <span className="w-6 h-6  flex items-center justify-center absolute -top-3 -right-4 bg-[#0F3178] text-white rounded-full text-sm">
                  3
                </span>
                </Link>
              </li>
              <li className="hidden lg:block">
                <Link href="/favorites">
                  <AiOutlineHeart />
                </Link>
              </li>
              <li className="hidden lg:block">
                <AiOutlineUser />
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`fixed px-4 py-16 md:p-16  bg-[#fff] right-0 left-0 overflow-auto top-0 z-[1000] max-h-[100vh] bottom-auto w-full shadow-md custom-transition ${
            isShowSearchModal ? "translate-y-0" : "-translate-y-full "
          }`}
        >
          <p className="text-center text-[#103178]  text-2xl font-medium">
            Axtarış
          </p>
          <button
            className="absolute top-6 md:top-9 right-6 md:right-9"
            onClick={() => setIsShowSearchModal(false)}
          >
            <RiCloseFill className="text-[#103178] text-2xl" />
          </button>
          <div className="relative  bg-[#F0F2F5]  py-[7px] md:py-17px pr-16 pl-6 mt-5 rounded-[60px] text-[#103178]">
            <input
              placeholder="Məhsullarda axtarış"
              className="bg-transparent border-none outline-none w-[100%] text-md"
            />
            <div className="absolute top-2/4 -mt-[10px] right-4">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searhbar;
