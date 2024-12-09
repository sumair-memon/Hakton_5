import Image from "next/image";
import HeroImage from "@/Pictures/Hero.png";
export default function Hero() {
  return (
    <>
      {/* w90rem h 63 */}
      <div className="heroImage">
        <Image
          src={HeroImage}
          width={1540}
          height={100}
          alt="Picture of the author"
        />
        <div className="heroText bg-[#FFF3E3]">
          <h6 className="font-bold">New Arrival</h6>
          <h3 className="mb-5 text-4xl font-extrabold text-[#b88e2f] ">Discover Our <br/> New Collection</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit Ducimus, necessitatibus est accusamus.</p>
            <button className="bg-[#b88e2f] py-4 px-12 text-white font-bold text-xs mt-12">BUY NOW</button>
        </div>
      </div>
    </>
  );
}
