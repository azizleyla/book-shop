import Image from "next/image";
import React from "react";
import { Table } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import Img from "../../components/Data/Img";

const Cart = () => {
  return (
    <div className="flex flex-col md:flex-row py-20 container mx-auto gap-5">
      <div className="w-full md:w-[70%]">
    <form className="w-full">
        <table className="border-[1px]  border-[#efefef] flex-[2] py-3 text-[#0f3178] cart-table w-full">
          <thead className="bg-[#efefef] invisible md:visible">
            <tr>
              <th className="py-3">Action</th>
              <th></th>
              <th>Məhsul</th>
              <th>Qiymet</th>
              <th>Miqdar</th>
              <th>Ümumi</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-center border-[1px]  border-[#efefef]  items-center justify-center flex-col  md:flex-row relative py-4">
              <td>
                <button className="text-2xl absolute md:relative top-1 right-1">
                  <RiCloseLine />
                </button>
              </td>

              <td className="w-28">
                <Image width={150} height={200} src={Img.book1} alt="" />
              </td> 

              <td className="">
                <span className="text-[#0f3178]">Sirr heyatimi deyisdi</span>
              </td>
              <td className="text-xl text-[#5B6C8F]">
                <span>10.00$</span>
              </td>
              <td className="w-24 md:w-28 ">
                <div className="flex items-center bg-[#EFF2F5] rounded-[60px]  h-7 my-3 md:h-12 px-3">
                  <button>
                    <FaMinus className="text-[#5B6C8F] text-sm" />
                  </button>
                  <input
                    className="bg-[#eff2f5] text-[#5B6C8F] text-center text-xl outline-none border-0 w-full pointer-events-none"
                    step="1"
                    type="number"
                  />
                  <button>
                    <FaPlus className="text-[#5B6C8F] text-sm" />
                  </button>
                </div>
              </td>
              <td className="text-xl ">
                <span>10.00</span>
              </td>
            </tr>
            <tr className="text-center   flex-col md:flex-row justify-center items-center relative py-4">
              <td>
                <button className="text-2xl absolute md:relative top-1 right-1">
                  <RiCloseLine />
                </button>
              </td>

              <td className="w-28">
                <Image width={150} height={200} src={Img.book6} alt="" />
              </td>
              <td>
                <span className="text-[#0f3178]">Sirr heyatimi deyisdi</span>
              </td>
              <td>
                <span className="text-[#5B6C8F text-xl">10.00$</span>
              </td>
              <td className="w-32">
                <div className="flex items-center bg-[#EFF2F5] rounded-[60px]  h-12 px-3">
                  <button>
                    <FaMinus className="text-[#5B6C8F] text-sm" />
                  </button>
                  <input
                    className="bg-[#eff2f5] text-[#5B6C8F] text-center text-xl outline-none border-0 w-full pointer-events-none"
                    step="1"
                    type="number"
                  />
                  <button>
                    <FaPlus className="text-[#5B6C8F] text-sm" />
                  </button>
                </div>
              </td>
              <td>
                <span className="text-xl">10.00$</span>
              </td>
            </tr>
          </tbody>
        </table>
     
        {/* <div className="flex justify-end mt-5">
          <button className="bg-[#0f3178] py-2 px-7 text-white rounded-[50px]">
            Təmizlə
          </button>

        </div> */}
        </form>
      </div>
      
      <div className="flex-1 border-[1px] border-[#efefef] text-[#0f3178] px-3">
        <div className="flex justify-between border-[1px] border-[#efefef]">
            Ümumi məbləğ
            <span>120.25</span>
        </div>
        <p className="text-sm py-2">Çatdırılma:</p>
        <div className="my-3">
        <p className="pb-1 text-base">10₼-a qədər olan çatdırılma haqqı: 3.00 ₼</p>
        <p className="pb-1 text-base">10₼-a qədər olan çatdırılma haqqı: 3.00 ₼</p>
         <p className="text-base">Sumqayıt, Abşeron və şəhər kənarı qəsəbə əraziləri üzrə sifarişlər (minimum sifariş 20.00 azn olmalı):</p>
         <div className="flex justify-between my-7 items-center border-t-[1px] py-2  border-[#efefef]">
            <p className="text-2xl">Cəmi</p>
            <span className="text-2xl">15.97</span>
         </div>
         </div>
      </div>
    </div>
  );
};

export default Cart;
