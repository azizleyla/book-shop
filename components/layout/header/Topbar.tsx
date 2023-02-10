import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const Topbar = () => {
  const [isShowTopbar, setIsShowTopbar] = useState(true);
  return (
    <header
      className={`bg-[#103178] w-full  text-center text-[#FFC800] py-3 relative text-[12px] md:text-lg ${
        isShowTopbar ? "block" : "hidden"
      }`}
    >
      <span className="">BOOKSHOP.AZ </span>
      Mütaliənizin ən doğru ünvanı
      <span
        onClick={() => setIsShowTopbar(false)}
        className="absolute top-2/4 -mt-[10px] w-5 h-5 right-3 cursor-pointer"
      >
        <RiCloseLine className="text-[#ffc800]" />
      </span>
    </header>
  );
};

export default Topbar;
