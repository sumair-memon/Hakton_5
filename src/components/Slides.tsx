import Image from "next/image";
import InnerPeace from "@/Pictures/inner.png" 
import SideInner from "@/Pictures/Sideinner.png" 
export default function () {
  return (
    <>
      <div className=" flex justify-center bg-[#FCF8F3] h-[660px] items-center">
        <div className="slideText pt-9 w-[422px] ">
        <h4 className=" font-extrabold text-[2rem] ">50+ Beautiful rooms inspiration</h4>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="bg-[#B88E2F] p-2 text-white mt-6  w-[10rem] ">Exlore More</button>
        </div>
        <div className="slideImages">
        <Image src="/Products.png" alt="Picture of the author" 
        width={880}
        height={200}
        />

        </div>
      </div>
    </>
  );
}

