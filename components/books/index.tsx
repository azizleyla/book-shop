import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import Title from "../common/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../Data/Img";
import { FaBasketballBall, FaHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import BookItem from "./BookItem";
import { IBookItem, IBooks } from "../../types/types";
import QuickViewModal from "../modal/QuickViewModal";

const books = [
  {
    id: 1,
    title: 'K."SİRR" Həyatımı Necə Dəyişdi (Rhonda Byrne)',
    currentPrice: 19.99,
    img: Img.book1,
    prevPrice: 20,
    qty: 1,
    rating: 4.5,
    isFavorite: false,
    isNew: false,
    isStock: true,
    product_no: 45355,
    author: "Rhonda Bayren",
  },
  {
    id: 1,
    title: "AYNI YILDIZIN ALTINDA",
    currentPrice: 12.8,
    img: Img.book2,
    prevPrice: 20,
    qty: 1,
    rating: 4.5,
    isFavorite: false,
    isNew: false,
    isStock: false,
    product_no: 45355,
    author: "John Green",
  },
  {
    id: 1,
    title: "K.A-DAN Z-YƏ MARKETİNQ (PHİLİP KOTLER)",
    currentPrice: 10.23,
    img: Img.book6,
    prevPrice: 20,
    qty: 1,
    rating: 4.5,
    isFavorite: false,
    isNew: false,
    isStock: true,
    product_no: 45355,
  },
  {
    id: 4,
    title: 'K."SİRR" Həyatımı Necə Dəyişdi (Rhonda Byrne)',
    currentPrice: 15.23,
    img: Img.book5,
    prevPrice: 20,
    qty: 1,
    rating: 4.5,
    isFavorite: false,
    isNew: false,
    product_no: 45355,
    isStock: true,
  },
  {
    id: 5,
    title: 'K."SİRR" Həyatımı Necə Dəyişdi (Rhonda Byrne)',
    currentPrice: 15.23,
    img: Img.book6,
    prevPrice: 20,
    qty: 1,
    rating: 2.5,
    isFavorite: false,
    isNew: false,
    isStock: true,
    product_no: 45355,
  },
];
interface IProps {
  isOpenViewModal: boolean;
}

const Books = () => {
  const [booksData, setBoooksData] = useState<IBookItem[]>(books);
  const [selectedItem, setSelectedItem] = useState();
  const [isOpenViewModal, setIsOpenViewModal] = useState<IProps>();

  return (
    <div className="my-20">
      <article>
        <div className="py-5">
          <div className="flex items-center justify-center text-center max-w-[1100px] m-auto">
            <Title title="Azərbaycan dilində kitablar" />
            <button className="flex items-center gap-1 bg-[#FFAC56] p-2 rounded-[50px] text-sm text-white">
              Hamısına bax
              <IoIosArrowRoundForward className="text-xl" />
            </button>
          </div>
        </div>
        <div className="container mt-2 m-auto">
          <Swiper
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              800: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 640px

              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1300: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            spaceBetween={50}
            slidesPerView={5}
          >
            {booksData.map((book) => {
              return (
                <SwiperSlide>
                  <BookItem
                    book={book}
                    setSelectedItem={setSelectedItem}
                    setIsOpenViewModal={setIsOpenViewModal}
                    {...book}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </article>
      {isOpenViewModal && (
        <QuickViewModal
          selectedItem={selectedItem}
          setIsOpenViewModal={setIsOpenViewModal}
        />
      )}
    </div>
  );
};

export default Books;
