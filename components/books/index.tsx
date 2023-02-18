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
import QuickViewModal from "../modals/QuickViewModal";
import { Autoplay, Navigation } from "swiper";

const books = [
  {
    id: 1,
    title: 'K."SİRR" Həyatımı Necə Dəyişdi (Rhonda Byrne)',
    currentPrice: 19.99,
    coverImg: Img.book1,
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
    id: 2,
    title: "AYNI YILDIZIN ALTINDA",
    currentPrice: 12.8,
    coverImg: Img.book2,
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
    id: 3,
    title: "K.A-DAN Z-YƏ MARKETİNQ (PHİLİP KOTLER)",
    currentPrice: 10.23,
    coverImg: Img.book6,
    backImg: Img.book6_2,
    prevPrice: 20,
    qty: 1,
    rating: 4.5,
    isFavorite: false,
    isNew: false,
    isStock: true,
    product_no: 45355,
    author: "Philip Kotler",
  },
  {
    id: 4,
    title: 'K."SİRR" Həyatımı Necə Dəyişdi (Rhonda Byrne)',
    currentPrice: 15.23,
    coverImg: Img.book5,
    prevPrice: 20,
    qty: 1,
    rating: 4.5,
    isFavorite: false,
    isNew: false,
    product_no: 45355,
    isStock: true,
    author: "Rhonda Byrne",
  },
  {
    id: 5,
    title: "K.ALTIN KURALLAR KİTABI 2 (M.DEMİR)",
    currentPrice: 8.25,
    coverImg: Img.book7,
    backImg: Img.book7_2,
    prevPrice: 20,
    qty: 1,
    rating: 3.5,
    isFavorite: false,
    isNew: false,
    isStock: false,
    product_no: 30355,
    author: "Merthan Demir",
  },
  {
    id: 6,
    title: "K.Andorra seməli və ölməli yerdir (Çingiz Abdullayev)",
    currentPrice: 5.55,
    coverImg: Img.book8,
    prevPrice: 20,
    qty: 1,
    rating: 4.5,
    isFavorite: false,
    isNew: false,
    product_no: 50355,
    isStock: true,
    author: "Çingiz Abdullayev",
  },
  {
    id: 7,
    title: "AYNI YILDIZIN ALTINDA",
    currentPrice: 12.8,
    coverImg: Img.book2,
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
    id: 8,
    title: "K.A-DAN Z-YƏ MARKETİNQ (PHİLİP KOTLER)",
    currentPrice: 10.23,
    coverImg: Img.book6,
    prevPrice: 20,
    qty: 1,
    rating: 4.5,
    isFavorite: false,
    isNew: false,
    isStock: true,
    product_no: 45355,
    author: "Philip Kotler",
  },
];

const Books = () => {
  const [booksData, setBoooksData] = useState<IBookItem[]>(books);
  const [selectedItem, setSelectedItem] = useState<IBookItem>();
  const [isOpenViewModal, setIsOpenViewModal] = useState<boolean>(false);

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
        <div className="container mt-2 m-auto relative">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            // speed={10000}

            spaceBetween={30}
            loop={true}
            breakpoints={{
              // when window width is >= 320px
              380: {
                slidesPerView: 1,
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
          >
            {booksData.map((book) => {
              return (
                <SwiperSlide key={book.id}>
                  <BookItem
                    book={book}
                    setSelectedItem={setSelectedItem}
                    setIsOpenViewModal={setIsOpenViewModal}
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
