import Image from "next/image"
import Dining from "@/Pictures/dining.png"
import Living from "@/Pictures/living.png" 
import Bedroom from "@/Pictures/bedroom.png" 
export default function SubHero(){

    return (
        <div className="mt-10">
        <div className="subText">
            <h3> Browse The Range</h3>
            <p className="pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">
            <div className="imgOne mr-6">

            <Image src={Dining} width={381} height={48} alt="Picture of the author" />
                <h6 className="pt-5">Dining</h6>
            </div>
                

            <div className="imgTow mr-6">
            <Image src={Living} width={381} height={48} alt="Picture of the author" />
            <h6 className="pt-5">Living</h6>
            </div>
            
            <div className="imgThree mr-6">

            <Image src={Bedroom} width={381} height={48} alt="Picture of the author" />
            <h6 className="pt-5">Bedroom</h6>    
            </div>
           </div>

        </div>
    )
}