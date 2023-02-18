import Image from "next/image";
import Link from "next/link";
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
  setSelectedItem: (value: IBookItem) => void;
}

const BookItem = ({
  setIsOpenViewModal,
  setSelectedItem,
  book,
}: Props) => {
  const { id, title, coverImg, backImg, currentPrice } = book;

  const handleFavorite = (
    book: IBookItem,
    e: React.MouseEvent<HTMLElement>,
  ) => {
    setSelectedItem(book);
    setIsOpenViewModal(true);
    document.body.style.overflow = "hidden";
    //prevent open modal
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <Link href={`/kitab/${id}`}>
      <div className=" bg-[#fff] border-[1px] border-[#e1e1e1]  group transition ease-in-out  hover:border-[1px] hover:border-transparent hover:shadow-xl cursor-pointer pt-3 relative">
        <div className="relative h-64 h group-hover:scale-[1.15] custom-transition">
          <Image
            className={`pointer-events-none object-contain   relative  mb-2 h-64 ${
              backImg && "group-hover:opacity-0 group-hover:hidden"
            }`}
            src={coverImg}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          {backImg && (
            <Image
              className=" mb-2 object-contain hidden opacity-0 absolute w-full h-full transition group-hover:block group-hover:opacity-100"
              alt=""
              src={backImg}
            />
          )}
        </div>
        <div className="absolute top-2 right-0 group-hover:flex flex-col gap-1 border-[1px] border-[#f7f7f7] shadow-sm  bg-white p-2  rounded-[8px] hidden">
          <button
            className=""
            onClick={(e) => {
              handleFavorite(book, e);
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
              {currentPrice}₼
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
