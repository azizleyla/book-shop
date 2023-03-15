import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { SwiperSlide } from "swiper/react";
import { BooksApi } from "../../api/booksApi";
import { APIQueryKeys } from "../../constants/api.constants";
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
  const { id, title, images, currentPrice, isFavorite, isNew, prevPrice } =
    book;

  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    book: IBookItem,
  ) => {
    setSelectedItem(book);
    setIsOpenViewModal(true);
    document.body.style.overflow = "hidden";
    e.preventDefault();
    e.stopPropagation();
    //prevent open modal
  };
  const queryClient = useQueryClient();
  const updateFavoriteMutation = useMutation(BooksApi.updateFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries([APIQueryKeys.books]);
    },
  });
  const handleFavorite = (
    e: React.MouseEvent<HTMLElement>,
    book: IBookItem,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    let data = { id: id, isFavorite: !isFavorite };
    updateFavoriteMutation.mutate(data);
  };

  return (
    <Link href={`/kitab/${id}`}>
      <div className=" bg-[#fff] border-[1px] border-[#e1e1e1]  group transition ease-in-out  hover:border-[1px] hover:border-transparent hover:shadow-xl cursor-pointer pt-3 relative">
        {isNew && <button className="new-btn">Yeni</button>}

        <div className="relative h-64 h group-hover:scale-[1.15] custom-transition">
          <Image
            width={150}
            height={150}
            className={`pointer-events-none object-contain   relative  mb-2 h-64 ${
              images[0]?.backImage !== null
                ? "group-hover:opacity-0 group-hover:hidden"
                : ""
            }`}
            src={images[0]?.coverImage}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          {images[0]?.backImage !== null ? (
            <Image
              width={150}
              height={150}
              className=" mb-2 object-contain hidden opacity-0 absolute w-full h-full transition group-hover:block group-hover:opacity-100"
              alt=""
              src={images[0]?.backImage}
            />
          ) : (
            ""
          )}
        </div>
        <div className="absolute top-2 right-0 group-hover:flex flex-col gap-1 border-[1px] border-[#f7f7f7] shadow-sm  bg-white p-2  rounded-[8px] hidden">
          <button
            className=""
            onClick={(e) => {
              handleClick(e, book);
            }}
          >
            <MdRemoveRedEye className="text-[#777] text-xl hover:text-[#ffac56]" />
          </button>
          <button onClick={(e) => handleFavorite(e, book)}>
            <FaHeart
              className={`text-xl hover:text-[#ffca56] ${
                isFavorite ? "text-[#ffca56]" : "text-[#777]"
              }`}
            />
          </button>
        </div>
        <div className=" flex text-center flex-col py-4 px-3 h-28">
          <p className="text-sm">{title}</p>
        </div>
        <div className="flex">
          <button className="absolute bottom-1 right-1  flex items-center flex-row-reverse p-3  bg-[#ffc056] rounded-[5px] justify-center">
            <SlBasket className=" font-bold text-2xl text-white" />
          </button>
          <div className="pl-2 pb-3 flex flex-col">
            <span className="line-through text-red-500">{prevPrice}₼</span>
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
