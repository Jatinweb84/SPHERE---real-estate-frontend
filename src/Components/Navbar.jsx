import { useState } from "react";
import { href } from "react-router";
import React from "react";
import { Menu, X } from "lucide-react"


 export default function Navbar(){
    const [isOpen , setIsOpen] = useState(false)

    const navLinks = [
        {name : "Buy", href: "/properties"},
        {name : "Rent",href : "/rent"},
        {name : "Sell", href:"/sell"},
        {name : "Agents" , href : "/agents"},
        {name : "Explore", href : "/explore"},
    ];

    return <div>
<header className=" fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md" >
<nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
    <a href="/" className="text-2xl font-bold tracking-tight">SPHERE</a>
    <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => ( <a href={link.href} key={link.name} className="text-sm
         font-medium text-gray-600 transition-colors hover:text-black">
            {link.name}
         </a>
         ))
         }
    </div>
    <div className="hidden items-center gap-4 md:flex">
        <a href="/login" className="text-sm font-medium text-gray-700 hover:text-black">
        Login
        </a>
        <a href="/sell" className=" rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-110">
        List Property
        </a>

    </div>
    <div>
        <button onClick={()=> setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu" >
            {isOpen ? <X size={25} /> : <Menu size={24}/> }
        </button>
    </div>
</nav>
{isOpen && (
    <div className="border-t bg-white px-6 py-6 md:hidden">
        <div className="flex flex-col gap-5">
            {navLinks.map((link)=>(
                <a href={link.href} key={link.name} onClick={()=> setIsOpen(false)} className="text-base font-medium text-gray-700">
                    {link.name}
                </a>
                ))}
                <a href="/login" className="text-base font-medium text-gray-700"></a>
                <a href="/sell " className="rounded-full bg-black px-5 py-5 text-center font-medium text-white">
                    List Property
                </a>

        </div>

    </div>
)}
    
</header>
    </div>
 }
 