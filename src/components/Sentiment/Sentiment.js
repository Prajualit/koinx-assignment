import React from "react";
import Image from "next/image";
import sentiment1 from "@/assets/sentiment1.png";
import sentiment2 from "@/assets/sentiment2.png";
import sentiment3 from "@/assets/sentiment3.png";

const Sentiment = () => {
  return (
    <div className="px-12 pr-[68px] pb-12">
      <div className=" w-[70%] bg-white rounded-[8px] p-[24px] px-[28px] flex flex-col space-y-12">
        <div className="flex flex-col space-y-6 items-start">
          <h1 className="text-[24px] font-[600] leading-[28.8px]">Sentiment</h1>
          <h1 className="text-[18.91px] font-[600] leading-[20px] text-[#44475B] ">
            Key Events
          </h1>
        </div>
        <div className="flex space-x-3">
          <div className="bg-[#E8F4FD] p-[18px] flex space-x-1 items-start rounded-[8px] w-[456px] h-[204px] ">
            <Image
              className="w-[44px] h-[44px] "
              width={28}
              height={28}
              src={sentiment1}
              alt=""
            />
            <div className="flex flex-col space-y-1">
              <p className="text-[14px] leading-[20px] font-[500]">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className=" text-[14px] leading-[20px] text-[#3E5765] font-[400] ">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
          <div className="bg-[#EBF9F4] p-[18px] flex space-x-1 items-start rounded-[8px] w-[456px] h-[204px] ">
            <Image
              className="w-[44px] h-[44px] "
              width={28}
              height={28}
              src={sentiment2}
              alt=""
            />
            <div className="flex flex-col space-y-1">
              <p className="text-[14px] leading-[20px] font-[500]">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className=" text-[14px] leading-[20px] text-[#3E5765] font-[400] ">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6 items-start">
          <h1 className="text-[18.91px] font-[600] leading-[20px] text-[#44475B] ">
            Analyst Estimates
          </h1>
          <Image className="w-[710px] h-[120px] " src={sentiment3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
