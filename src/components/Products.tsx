import Image from "next/image";
// import Bedroom from "../public/bedroom.png"
export default function Products(){

    interface Card{
        name: string,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          image: "/images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          image: "/Images (6).png",
          description: 'Stylish cafa chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.00.000",
          image: "/Images (1).png",
          description: "luxury big sofa",
        },
        {
          name: 'Respira',
          price: "Rp 500.000",
          image: '/Images (2).png',
          description: 'outdoor bar table and stool.',
        },
        {
          name: 'Grifo',
          price: "Rp 1.500.000",
          image: '/Images (3).png',
          description: 'Night lmap',
        },
        {
          name: 'Muggp',
          price: "Rp 150.000",
          image: '/Images (4).png',
          description: 'small mug .',
        },
        {
          name: 'Pingky',
          price: "Rp 7.00.000",
          image: '/Images (5).png',
          description: 'cute bed set.',
        },
        {
          name: 'Potty',
          price: "Rp 500.000",
          image: '/image 8.png',
          description: 'Minimailst flower pot',
        },
      ];
    
    return (
        <>
          <div  className="product">
            <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
          </div>
          <div className="cardsContainer">
            {data.map((card, index) => (
              
          <div className=" bg-[#F4F5F7] mb-7">  
            <div className="card" key={index} style={{ width: "19rem" }}>
                <img
                  src={card.image}
                  style={{ width: "19rem", height: "20rem" }}
                  className="card-img-top"
                //   alt={card.title}
                />
                <div className="card-body pl-4 pb-4">
                  <h5 className="card-title mt-2" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text mt-2">{card.description}</p>
                  <h5 className="card-title mt-2" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
                </div>
            </div>
        </div>
                    ))}


        </div>
        <div className="flex items-center justify-center mb-12">
            <button className="productBtn text-[#B88E2F] h-12 font-bold border-2 border-[#B88E2F] w-64">Show More</button>
        </div>
        </>
    )
}