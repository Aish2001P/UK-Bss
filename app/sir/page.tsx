

"use client"
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {

    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const handleMouseEnter = (menu: string) => {
        setOpenMenu(menu);
    };
    const handleMouseLeave = () => {
        setOpenMenu(null);
    };


    return (
        
        <section className="">
          <div className="relative flex space-x-8">
                                <div
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter("products")}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex items-center text-lg hover:text-gray-900 group font-[cd-r]">
                                        Incorporation
                                        <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
                                        </span>
                                    </button>

                                    {openMenu === "products" && (
                                        <div className="absolute left-[-2] top-[20px] py-1 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
                                            <ul className="pl-5 py-0 space-y-2 mt-3">

                                                <Link href="/incorporation/forLocals" className="no-underline" >
                                                    <li className="mb-3 leading-[18px] text-[16px] font-[500] text-[#000] hover:text-[#0073fd] twxt-[cdm-r]">
                                                        For Locals
                                                    </li>
                                                </Link>
                                                <Link
                                                    href="/incorporation/incorporation(Foreigners)"
                                                    className=" no-underline"
                                                >
                                                    <li className="mb-3 leading-[18px] text-[16px] font-[500] text-[#000] hover:text-[#0073fd]">
                                                        incorporation(Foreigners)
                                                    </li>
                                                </Link>

                                            </ul>
                                        </div>
                                    )}
                                </div>






                            </div>

        </section>
    );
};

export default Header;