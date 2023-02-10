import Image from "next/image";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { SwiperSlide } from "swiper/react";
import { IBookItem } from "../../types/types";
import QuickViewModal from "../modals/QuickViewModal";

interface Props {
  book: IBookItem;
  setIsOpenViewModal: (value: boolean) => void;
  setSelectedItem: (value: string) => void;
}

const BookItem = ({ setIsOpenViewModal, setSelectedItem, book }: any) => {
  const { id, title, img, currentPrice, author, qty } = book;
  return (
    <>
      <div className=" bg-[#fff] border-[1px] border-[#e1e1e1] group transition ease-in-out  hover:border-[1px] hover:border-transparent cursor-pointer pt-3 relative">
        <div className="group-hover:scale-[1.1] transition ease-in-out mb-2 h-64">
          <Image
            src={img}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="absolute top-2 right-0 group-hover:flex flex-col gap-1 border-[1px] border-[#f7f7f7] shadow-sm  bg-white p-2  rounded-[8px] hidden">
          <button
            className=""
            onClick={() => {
              setIsOpenViewModal(true);
              setSelectedItem(book);
            }}
          >
            <MdRemoveRedEye className="text-[#777] text-xl hover:text-[#ffac56]" />
          </button>
          <button>
            <FaHeart className="text-[#777] text-xl hover:text-[#ffca56]" />
          </button>
        </div>
        <div className=" flex text-center flex-col py-4 px-3 h-28">
          <p className="text-sm">{title}</p>
        </div>
        <div className="flex">
          <button className="absolute bottom-1 right-1  flex items-center flex-row-reverse p-3  bg-[#ffc056] rounded-[5px] justify-center">
            <SlBasket className=" font-bold text-2xl text-white" />
          </button>
          <div className="pl-2 pb-3">
            <span className="text-2xl text-[#1e1e1e] font-bolds">
              {currentPrice} AZN
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookItem;
