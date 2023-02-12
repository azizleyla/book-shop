import Image from "next/image";
import React from "react";
import Img from "../../components/Data/Img";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

const Favorites = () => {
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
        <table className="border-[1px] border-[#e9e9e9] text-base w-full my-20">
          <thead>
            <tr className="bg-[#e9e9e9] border-[1px] border-[#e9e9e9]  uppercase">
              <th className="py-3">Şəkil</th>
              <th>Məhsul</th>
              <th>Qiymət</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[1px] border-[#e9e9e9]">
              <td className="w-48">
                <Image width={200} height={200} src={Img.book2} alt="" />
              </td>
              <td className="text-center text-lg font-semibold">
                Ayni yildizin altinda
              </td>
              <td className="text-center text-2xl">10.99 ₼</td>
              <td className="text-center">
                <button className="bg-[#103178] text-white rounded-[50px] py-2 px-5 mr-2">
                  Məhsulu görüntülə
                </button>
              </td>
              <td>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600 text-white mt-2">
                  <FaTrash />
                </button>
              </td>
            </tr>
            <tr className="border-b-[1px] flex flex-col justify-center items-center md:table-row  border-[#e9e9e9]">
              <td className="w-30">
                <Image width={200} height={200} src={Img.book5} alt="" />
              </td>
              <td className="text-center text-lg font-semibold">
                Ayni yildizin altinda
              </td>
              <td className="text-center text-2xl">10.99 ₼</td>
              <td className="text-center">
                <button className="bg-[#103178] text-white rounded-[50px] py-2 px-5 mr-2">
                  Məhsulu görüntülə
                </button>
              </td>
              <td>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-red-600 text-white mt-2">
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Favorites;
