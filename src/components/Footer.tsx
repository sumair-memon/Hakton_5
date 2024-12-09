export default function Footer(){
    return (
        <>
        <footer className="h-[505]">

        <div className="footer pt-16 border-t-2 leading-10  border-gray-300">
            <div>
                <h2 className="font-bold text-[2rem]">Funiro.</h2>
                <p className="leading-none pt-16">400 University Drive Suite 200 Coral <br /> Gables, <br />
                FL 33134 USA</p>
            </div>


            <div className="">
                <h4>Link</h4>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>


            <div>
                <h4>Help</h4>
                <ul>
                    <li>Payment Option</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>

            <div>
                <h4>Newsletter</h4>
            <input type="text" placeholder="Your Email" />
            <button type="submit" className="font-bold">SUBSCRIBE</button>
            </div>
            
        </div>
        <div  className="para">

            <hr />
            <p>2023 furino. All rights reverved</p>
        </div>
        </footer>
        </>
    )

}