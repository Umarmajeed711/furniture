'use client'
import Link from "next/link"
import "./navbar.css"
import { FaRegUser } from "react-icons/fa6";

import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
// import { FiAlignJustify } from "react-icons/fi";
// import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { GrCart } from "react-icons/gr";


export const Navbar = () => {


 const [showSideBar, setShowSideBar] = useState(false);

 const showBar = () => {
    setShowSideBar(true)
 }
 
 const hideBar = () => {
    setShowSideBar(false)
 }

  return (
    <header>
        {/* navbar */}
        <nav className="nav" >
            {/* logo */}
            <div>
                LOGO
            </div>

            {/* links & icons */}
            <div className="d-flex align-items-center gap-5 ">

            
            <ul className="nav-links gap-5">
                <li><Link href="/" className="link active">Home</Link></li>
                <li><Link href="/shop" className="link">Shop</Link></li>
                <li><Link href="/products" className="link">About</Link></li>
                <li><Link href="/Contact" className="link">Contact</Link></li>
                
            </ul>

            <div className="nav-icons gap-4 ">
                
                 <p><Link href="/" className="link"><FaRegUser /></Link></p> 
                <p><FiSearch/></p>
                <p><Link href="/" className="link"><FaRegHeart /></Link></p>
                <p><Link href="/" className="link"><GrCart/></Link></p>  
                

                
                {/* <p><FaRegUser /></p>
                <p><FiSearch/></p>
                <p><FaRegHeart /></p>
                <p><GrCart/></p> */}
            </div>

            
            </div>

             {/* button for side bar */}
            <p onClick={showBar} className="hideOnPc">< GiHamburgerMenu/></p>
           
        </nav>

        {/* navbar links for mobile */}
        {
            (showSideBar) ? 

        <div className="sideBar">
         <p onClick={hideBar} className="closeIcon"><IoMdClose/></p>
        <ul className="sideBarLinks">
                <li><Link href="/" className="link ">Home</Link></li>
                <li><Link href="/" className="link">Shop</Link></li>
                <li><Link href="/" className="link">About</Link></li>
                <li><Link href="/" className="link">Contact</Link></li>
        </ul> 
        </div>
        : null
}

    </header>
  )
}
