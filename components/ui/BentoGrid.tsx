'use client'
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";

import Lottie from "react-lottie";

import { cn } from "@/lib/utils";
import { Meteors } from "./Meteors";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/hearts-feedback.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  link,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  link?: string;
}) => {
  const leftLists = ["ReactJS", "NextJS", "Angular"];
  const rightLists = ["Java", "MySQL", "Python"];

  const [liked, setLike] = useState(false);

  const defaultOptions = {
    loop: liked,
    autoplay: liked,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleLike = () => {
    setLike(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-1xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>


          {id === 4 && (
            <div className="flex flex-col space-y-4 font-sans text-sm lg:text-base max-w-80 z-10 mt-4">
              <div className="bg-[#10132E]/50 rounded-lg p-3 border border-white/10">
                <div className="font-bold text-white mb-1">České vysoké učení technické v Praze</div>
                <div className="text-[#C1C2D3] text-xs">Ing., FIT - Webové inžinierstvo</div>
                <div className="text-blue-400 text-xs">2025 - súčasnosť</div>
              </div>
              <div className="bg-[#10132E]/50 rounded-lg p-3 border border-white/10">
                <div className="font-bold text-white mb-1">České vysoké učení technické v Praze</div>
                <div className="text-[#C1C2D3] text-xs">Bc., FIT - Webové inžinierstvo</div>
                <div className="text-blue-400 text-xs">2021 - 2025</div>
              </div>
              <div className="bg-[#10132E]/50 rounded-lg p-3 border border-white/10">
                <div className="font-bold text-white mb-1">Evanjelické gymnázium J. A. Komenského</div>
                <div className="text-[#C1C2D3] text-xs">Košice</div>
                <div className="text-blue-400 text-xs">2013 - 2021</div>
              </div>
            </div>
          )}


          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 7 && (
            <div className="cursor-pointer" onClick={() => link && window.open(link, '_blank')}>
              <div className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline pt-4">
                Visit my LinkedIn →
              </div>
              <GridGlobe />
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${liked ? "block" : "block"
                  }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={liked ? "" : "Give it a like"}
                icon={<FaHeart />}
                position="left"
                handleClick={handleLike}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}

          {id === 2 && (
            <div className="flex flex-col space-y-4 font-sans text-sm lg:text-base max-w-80 z-10 mt-4">
              <div className="bg-[#10132E]/50 rounded-lg p-3 border border-white/10">
                <div className="font-bold text-white mb-1">Junior software developer</div>
                <div className="text-[#C1C2D3] text-xs">innovis, s.r.o.</div>
                <div className="text-blue-400 text-xs">2023 - súčasnosť</div>
              </div>
              <Meteors number={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};