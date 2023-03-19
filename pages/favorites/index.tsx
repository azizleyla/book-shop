import Image from "next/image";
import React, { useState, useEffect } from "react";
import Img from "../../components/Data/Img";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { RiCloseLine } from "react-icons/ri";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { APIQueryKeys } from "../../constants/api.constants";
import { BooksApi } from "../../api/booksApi";
import { IBookItem } from "../../types/types";

const Favorites = () => {
  const { data } = useQuery({
    queryKey: [APIQueryKeys.books],
    queryFn: () => BooksApi.getAllBooks(),
  });
  const books: IBookItem[] = data || [];
  //get favorite books
  const favoriteBooks = books.filter((item) => item.isFavorite);

  const queryClient = useQueryClient();
  const updateFavoriteMutation = useMutation(BooksApi.updateFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries([APIQueryKeys.books]);
    },
  });

  const removeBookFromFavorites = (id: number) => {
    let data = {
      isFavorite: false,
    };
    updateFavoriteMutation.mutate({ id, data });
  };

  return (
    <>
      <div className="bg-section-image bg-center z-10 relative py-24 bg-no-repeat  before:-z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#fdefe1] before:opacity-60">
        <div className="flex items-center flex-col justify-center text-[#000]">
          <h1 className="font-semibold text-3xl">Sevimlilər</h1>
          <div className="text-xl mt-2">
            <Link href="/">Ana səhifə </Link>
            <span>-</span>
            <span> Sevimlilər</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <table className="border-[1px] favorites-table  border-[#e9e9e9] text-base w-full my-20">
          <thead className="">
            <tr className="bg-[#e9e9e9] border-[1px] border-[#e9e9e9]  uppercase">
              <th className="py-3">Şəkil</th>
              <th>Məhsul</th>
              <th>Qiymət</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {favoriteBooks?.map((item) => (
              <tr className="border-b-[1px] flex flex-col justify-center py-5 md:py-0 items-center md:table-row  border-[#e9e9e9] relative">
                <td className="w-30 md:w-32">
                  <Image
                    width={200}
                    height={200}
                    src={item?.images[0].imgUrl}
                    alt=""
                  />
                </td>
                <td className="text-center text-lg font-semibold">
                  {item.title}
                </td>
                <td className="text-center text-2xl">
                  {item.currentPrice}₼
                </td>
                <td className="text-center">
                  <Link
                    href={`/kitab/${item.id}`}
                    className="bg-[#103178] text-white rounded-[50px] py-2 px-5 mr-2"
                  >
                    Məhsulu görüntülə
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => removeBookFromFavorites(item.id)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600 text-white mt-2 absolute top-7 right-7 md:relative md:top-0 md:right-0"
                  >
                    <RiCloseLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Favorites;
