import Image from "next/image";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { IBookItem } from "../../types/types";
import Img from "../Data/Img";

interface Props {
  setIsOpenViewModal: (value: boolean) => void;
  selectedItem: IBookItem | undefined;
}

const QuickViewModal = ({ setIsOpenViewModal, selectedItem }: Props) => {
  const [countValue, setCountValue] = useState(1);

  const handleCount = (type: string) => {
    if (type === "dec") {
      if (countValue === 1) {
        return;
      } else {
        setCountValue((prev) => prev - 1);
      }
    } else {
      setCountValue((prev) => prev + 1);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="fixed top-0 w-full h-full bg-modal-color z-50">
      <div
        className="relative max-w-[900px] rounded-md w-full bg-[#fff] py-9 px-4 flex items-center justify-center top-1/2 left-1/2"
        style={{ transform: "translate(-50%,-50%)" }}
      >
        <button
          className="absolute top-2 right-2"
          onClick={() => setIsOpenViewModal(false)}
        >
          <RiCloseLine className="text-[#ccc] text-3xl" />
        </button>
        <div className="flex">
          <div>
            <Image
              width={600}
              height={700}
              src={selectedItem?.coverImg}
              alt=""
            />
          </div>

          <div>
            <p
              className={`${
                selectedItem?.isStock ? "bg-[#12a05c]" : "bg-red-900"
              } text-white p-1 px-4 whitespace-nowrap  rounded-2xl text-sm mb-6 w-32 flex items-center justify-center`}
            >
              {selectedItem?.isStock ? "Anbarda" : "Anbarda yoxdur"}
            </p>
            <h1 className="text-3xl text-[#0f3178] mb-2">
              {selectedItem?.title}{" "}
            </h1>
            <h4 className=" text-[#0f3178] my-3">
              Müəllif:
              <span> {selectedItem?.author}</span>
            </h4>
            <p className="text-[#ffc056] text-4xl">
              {selectedItem?.currentPrice}
              <span> ₼</span>
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div>
                <label className="text-[#0f3178]">Miqdar</label>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center bg-[#EFF2F5] rounded-[60px] w-32 h-12 px-3">
                    <button onClick={() => handleCount("dec")}>
                      <FaMinus className="text-[#5B6C8F] text-sm" />
                    </button>
                    <input
                      value={countValue}
                      className="bg-[#eff2f5] text-[#5B6C8F] text-center text-xl outline-none border-0 w-full pointer-events-none"
                      step="1"
                      type="number"
                    />
                    <button onClick={() => handleCount("inc")}>
                      <FaPlus className="text-[#5B6C8F] text-sm" />
                    </button>
                  </div>
                  {selectedItem?.isStock && (
                    <button className="bg-[#FF9923] text-white text-lg rounded-[60px] py-2 px-8 hover:opacity-90">
                      Səbətə at
                    </button>
                  )}
                </div>
              </div>
            </form>
            <div className="mt-8">
              <h4 className=" text-[#0f3178]">
                Məhsulun nömrəsi:
                <span className="text-[#5B6C8F]">
                  {" "}
                  {selectedItem?.product_no}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
