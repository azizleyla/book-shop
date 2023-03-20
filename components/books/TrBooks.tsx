import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBookItem, IBooks } from "../../types/types";
import Title from "../common/Title";
import QuickViewModal from "../modals/QuickViewModal";
import BookItem from "./BookItem";

const TrBooks = ({ books }: IBooks) => {
  const [selectedItem, setSelectedItem] = useState<IBookItem>();

  const [isOpenViewModal, setIsOpenViewModal] = useState<boolean>(false);

  return (
    <>
      <article>
        <div className="py-5">
          <div className="flex items-center justify-center text-center max-w-[1100px] m-auto">
            <Title title="Türk dilində kitablar" />
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
            {books?.map((book) => {
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
    </>
  );
};

export default TrBooks;
