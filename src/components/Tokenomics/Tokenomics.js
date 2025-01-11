import React from "react";
import Image from "next/image";
import tokenomics from "@/assets/tokenomics.png";

const Tokenomics = () => {
  return (
    <div className="px-12 pr-[68px] pb-12">
      <div className=" w-[70%] bg-white rounded-[8px] p-[24px] px-[28px] flex flex-col space-y-12">
        <div className="flex flex-col space-y-2 items-start">
          <div className="flex flex-col space-y-6">
            <h1 className="text-[24px] font-[600] leading-[28.8px]">
              Tokenomics
            </h1>
            <h1 className="text-[20px] font-[600] leading-[36px]">
              Initial Distribution
            </h1>
          </div>
          <Image className="w-[700px] h-[179px] " src={tokenomics} alt="" />
          <p className="text-[#3E424A] font-[500] leading-[25.6px] text-[16px]">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
