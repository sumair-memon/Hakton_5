import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function Navbar() {
    return (
        <header>
            <Container className="h-24">
                <div className="flex items-center">
                    <Image src="/Frame 168.png" alt="logos-05.png" height={41} width={185}/>
                </div>
                
                <div className="h-6">
                    <ul className="flex items-center gap-14">
                        <li className="font-medium text-base"><a href="">Home</a></li>
                        <li className="font-medium text-base"><a href="/shop">Shop</a></li>
                        <li className="font-medium text-base"><a href="/blog">Blog</a></li>
                        <li className="font-medium text-base"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-8">
                <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <Link href={'/cart'}>
        <AiOutlineShoppingCart />
        </Link>
                </div>
            </Container>
        </header>
    )
}