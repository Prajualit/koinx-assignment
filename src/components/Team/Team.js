import React from "react";
import Image from "next/image";
import team1 from "@/assets/team1.png";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";

const Team = () => {
  return (
    <div className="px-12 pr-[68px] pb-12">
      <div className=" w-[70%] bg-white rounded-[8px] p-[24px] px-[28px] flex flex-col space-y-8">
        <h1 className="text-[24px] font-[600] leading-[28.8px]">Team</h1>
        <div className="flex flex-col space-y-6 items-start">
          <p className="text-[#3E424A] font-[500] leading-[25.6px] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
            nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
            quam. Facilisis purus convallis quam augue.
          </p>
          <Image className="w-[821px] h-[177px] " src={team1} alt="" />
          <Image className="w-[821px] h-[177px] " src={team2} alt="" />
          <Image className="w-[821px] h-[177px] " src={team3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Team;
