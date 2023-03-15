import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Title from "../common/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "../Data/Img";
import { FaBasketballBall, FaHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { IBookItem, IBooks } from "../../types/types";
import QuickViewModal from "../modals/QuickViewModal";
import { Autoplay, Navigation } from "swiper";
import { useQuery } from "@tanstack/react-query";
import { BooksApi } from "../../api/booksApi";
import { APIQueryKeys } from "../../constants/api.constants";
import AzBooks from "./AzBooks";
import TrBooks from "./TrBooks";
import EnBooks from "./EnBooks";

const Books = () => {
  const { data } = useQuery({
    queryKey: [APIQueryKeys.books],
    queryFn: () => BooksApi.getAllBooks(),
  });
  const booksData = data || [];
  const [books, setBooks] = useState<IBookItem[]>(booksData);

  useEffect(() => {
    setBooks(booksData);
  }, [booksData]);
  const azBooks = books.filter((item) => item.language.id === 1);
  const enBooks = books.filter((item) => item.language.id === 2);
  return (
    <div className="my-20">
      <AzBooks books={azBooks} />
      <TrBooks />
      <EnBooks books={enBooks} />
    </div>
  );
};

export default Books;
