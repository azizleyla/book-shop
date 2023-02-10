import React from "react";
import { ITitle } from "../../types/types";

const Title = ({ title }: ITitle) => {
  return (
    <div className="flex flex-[2]" style={{ justifyContent: "center" }}>
      <h2 className="text-center text-[#0F3178] text-xl md:text-3xl">
        {title}
      </h2>
    </div>
  );
};

export default Title;
