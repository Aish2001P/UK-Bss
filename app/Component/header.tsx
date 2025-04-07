"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowDropDown } from "react-icons/md";



function Header() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const handleMouseEnter = (menu: string) => {
        setOpenMenu(menu);
    };
    const handleMouseLeave = () => {
        setOpenMenu(null);
    };


    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleContent = () => {
        setIsVisible(!isVisible);
    }



    return (
        <>
            <section className="lg:px-[100px] px-[20px] z-100   fixed w-full bg-[#F3EFE7] ">

                <div className="container-fluid  w-full z-100  flex items-center justify-between  py-4 lg:h-30 lg:pt-[40px] pt-[20px] ">

                    <div className="col-5 col-lg-3">
                        <Link href="/">
                            <Image
                                className="img-responsive lg:w-[150px] w-full"
                                src="/Images/Group 17645.svg"
                                alt="logo"
                                width={1080}
                                height={1080}
                            /></Link>
                    </div>

                    <nav className=" col-lg-6 hidden lg:flex justify-center  items-center gap-8 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] font-medium ">
                        <Link href="/aboutus" className="text-black !no-underline hover:text-gray-400">About</Link>

                        <Link href="/Registeracompany" className="text-black !no-underline  hover:text-gray-400">Register a Company</Link>



                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("products")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center text-lg hover:text-gray-900 group font-[cd-r]">
                                Accounting
                                <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
                                </span>
                            </button>

                            {openMenu === "products" && (
                                <div className="lg:absolute  relative left-[-2] top-[10px] py-1 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
                                    <ul className="pl-5 py-0 space-y-2 mt-3">
                                        <div className="text-left font-[cd]  ">

                                            <p className="text-[#767676] lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Get Started</p>
                                            <p><Link href="/Accountingservices" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-black !no-underline hover:text-black">Accounting Services</Link></p>
                                            <p><Link href="/ecommerceaccounting" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Ecommerce Accounting</Link></p>
                                            <p><Link href="/bookkeeping" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Bookkeeping</Link></p>
                                            <p><Link href="/propertyaccountants" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Property Accountants</Link></p>
                                            <p className="text-[#767676] lg:pt-[20px] pt-[10px] lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Explore more</p>
                                            <p><Link href="/invoicing" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Invoicing</Link></p>
                                            <p><Link href="/ecommerceintegration" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Ecommerce Integration</Link></p>
                                            <p><Link href="/reporting" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Reporting</Link></p>
                                            <p><Link href="/personalexpenses" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Personal Expenses</Link></p>
                                            <p><Link href="/demo" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Demo</Link></p>


                                        </div>


                                    </ul>
                                </div>
                            )}
                        </div>



                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("pricing")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center text-lg hover:text-gray-900 group font-[cd-r]">
                                Pricing
                                <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
                                </span>
                            </button>

                            {openMenu === "pricing" && (
                                <div className="lg:absolute  relative left-[-2] top-[10px] py-1 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
                                    <ul className="pl-5 py-0 space-y-2 mt-3">
                                        <div className="text-left font-[cd]  ">


                                            <p><Link href="/Companyregistrationprices" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-black !no-underline hover:text-black">Company Registration Prices</Link></p>
                                            <p><Link href="/accountingprices" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Accounting Prices</Link></p>



                                        </div>


                                    </ul>
                                </div>
                            )}
                        </div>


                        <Link href="/blog" className="text-black !no-underline  hover:text-gray-400">Resources</Link>





                    </nav>
                    <div className="col-lg-3  lg:block hidden">
                        <div className="flex gap-3 items-center justify-end">
                            <div className="flex items-center gap-2">
                                <div
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter("UK")}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="flex gap-2  justify-center items-center text-lg hover:text-gray-900 group font-[cd-r]">
                                        <div>

                                            <Image className="img-responsive w-7" src="/Images/Vector.svg" alt="logo" width={1830} height={750} />
                                        </div>

                                        <p className="font-bold lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[3vw] p-0 m-0">UK</p>
                                    </button>


                                    {openMenu === "UK" && (
                                        <div className="lg:absolute  relative  border   py-2 mt-2 w-[200px] px-3 bg-white shadow-md rounded-md transition-all ease-in-out">


                                            <div className="pt-2">
                                                <Link href="" className="flex gap-3 justify-left   items-center text-lg !text-[#232323]  !no-underline hover:text-gray-900 group ">


                                                    <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0 ">Singapore</p>
                                                </Link>
                                            </div>
                                            <div className="pt-2">
                                                <Link href="" className="flex gap-3 justify-left   items-center  !text-[#232323]  !no-underline hover:text-gray-900 group">


                                                    <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0">HongKong</p>
                                                </Link>

                                            </div>
                                            <div className="pt-2">
                                                <Link href="" className="flex gap-3 justify-left   items-center  !text-[#232323]  !no-underline hover:text-gray-900 group">


                                                    <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0 ">UAE</p>
                                                </Link>
                                            </div>
                                            <div className="pt-2">
                                                <Link href="" className="flex gap-3 justify-left   items-center  !text-[#232323] !no-underline hover:text-gray-900 group">


                                                    <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0 ">US</p>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div>
                                <button type="button" className="text-white bg-black   font-medium rounded-5 text-sm py-2 px-5 w-full ">Log in</button>
                            </div>
                            {/* <div>
                                <button type="button" className="text-white bg-black hover:bg-transparent focus:ring-4 font-medium rounded-5 text-sm px-5 py-2.5 me-2 mb-2  dark:hover:bg-transparent ">Log in</button>
                            </div> */}
                        </div>
                    </div>





                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden inline-flex items-center justify-center p-2 rounded-3xl text-gray-500 hover:bg-gray-100 focus:outline-none"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>


                    {isOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                            <div className="fixed overflow-y-auto top-0 right-0 w-full h-full bg-white shadow-lg p-5 flex flex-col">
                                <button onClick={() => setIsOpen(false)} className="self-end text-gray-600">
                                    <XMarkIcon className="h-6 w-6" />
                                </button>

                                <div className="col-5 col-lg-3 pb-[30px]">
                                    <Link href="/">
                                        <Image
                                            className="img-responsive lg:w-[150px] w-full"
                                            src="/Images/Group 17645.svg"
                                            alt="logo"
                                            width={1080}
                                            height={1080}
                                        /></Link>
                                </div>

                                <nav className="mt-4 flex flex-col space-y-4 pb-[20px]">
                                    <Link href="/aboutus" className="text-black !no-underline hover:text-black">About</Link>
                                    <Link href="/Registeracompany" className="text-black !no-underline hover:text-black">Register a Company</Link>

                                    <button type="button" onClick={toggleContent} >
                                        <div className="text-black !no-underline  hover:text-gray-400 ">
                                            <div className="flex  ">
                                                <p className=" p-0 m-0" >Accounting</p>


                                                <MdOutlineArrowDropDown />
                                            </div>
                                            <div className=" ">

                                                {isVisible && (
                                                    <div className=" 
                                            z-100    rounded-lg  py-2 px-4  shadow-md w-auto bg-white ">

                                                        <div className="text-left font-[cd]  ">

                                                            <p className="text-[#000] font-medium uppercase lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] p-0 m-0">Get Started</p>
                                                            <p className="p-0 m-0"><Link href="/Accountingservices" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw]   text-black !no-underline hover:text-black p-0 m-0">Accounting Services</Link></p>
                                                            <p className="p-0 m-0"><Link href="/ecommerceaccounting" className=" lg:text-[0.9vw] text-[3vw] text-black !no-underline hover:text-black p-0 m-0">Ecommerce Accounting</Link></p>
                                                            <p className="p-0 m-0"><Link href="/bookkeeping" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black p-0 m-0">Bookkeeping</Link></p>
                                                            <p className=""><Link href="/propertyaccountants" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Property Accountants</Link></p>
                                                            <p className="text-[#000] lg:pt-[20px] pt-[10px] lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] p-0 m-0 font-medium uppercase ">Explore more</p>
                                                            <p className="p-0 m-0"><Link href="/invoicing" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Invoicing</Link></p>
                                                            <p className="p-0 m-0"><Link href="/ecommerceintegration" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Ecommerce Integration</Link></p>
                                                            <p className="p-0 m-0"><Link href="/reporting" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Reporting</Link></p>
                                                            <p className="p-0 m-0"><Link href="/personalexpenses" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Personal Expenses</Link></p>
                                                            <p className="p-0 m-0"><Link href="/demo" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Demo</Link></p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </button>



                                    <div
                                        className="relative"
                                        onMouseEnter={() => handleMouseEnter("pricing")}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <button className="flex items-center text-lg hover:text-gray-900 group pt-3">
                                            Pricing
                                            <span className="ml-1 text-sm icon icon-tabler icons-tabler-filled icon-tabler-caret-down transform transition-transform duration-300 group-hover:rotate-180">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" /></svg>
                                            </span>
                                        </button>

                                        {openMenu === "pricing" && (
                                            <div className="lg:absolute  relative left-[-2] top-[10px] py-1 mt-2 w-[280px] bg-white shadow-md rounded-md transition-all ease-in-out">
                                                <ul className="pl-5 py-0 space-y-2 mt-3">
                                                    <div className="text-left font-[cd]  ">


                                                        <p><Link href="/Companyregistrationprices" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-black !no-underline hover:text-black">Company Registration Prices</Link></p>
                                                        <p><Link href="/accountingprices" className=" lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-black !no-underline hover:text-black">Accounting Prices</Link></p>



                                                    </div>


                                                </ul>
                                            </div>
                                        )}
                                    </div>


                                    <Link href="/resources" className="text-black !no-underline hover:text-black">Resources</Link>
                                </nav>
                                <div className="col-lg-3  ">
                                    <div className=" items-center justify-end ">
                                        <div className="flex items-center gap-2 pb-[20px]">
                                            <div
                                                className="relative"
                                                onMouseEnter={() => handleMouseEnter("UK")}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <button className="flex gap-2  justify-center items-center text-lg hover:text-gray-900 group font-[cd-r]">
                                                    <div>

                                                        <Image className="img-responsive w-7" src="/Images/Vector.svg" alt="logo" width={1830} height={750} />
                                                    </div>

                                                    <p className="font-bold lg:text-[1.2vw] text-[6vw] lg:leading-[2vw] leading-[7vw] p-0 m-0">UK</p>
                                                </button>


                                                {openMenu === "UK" && (
                                                    <div className="lg:absolute  relative  border   py-2 mt-2 w-[200px] px-3 bg-white shadow-md rounded-md transition-all ease-in-out">


                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left   items-center text-lg !text-[#232323]  !no-underline hover:text-gray-900 group ">


                                                                <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0 ">Singapore</p>
                                                            </Link>
                                                        </div>
                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left   items-center  !text-[#232323]  !no-underline hover:text-gray-900 group">


                                                                <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0">HongKong</p>
                                                            </Link>

                                                        </div>
                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left   items-center  !text-[#232323]  !no-underline hover:text-gray-900 group">


                                                                <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0 ">UAE</p>
                                                            </Link>
                                                        </div>
                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left   items-center  !text-[#232323] !no-underline hover:text-gray-900 group">


                                                                <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0 ">US</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                        </div>

                                        <div className=" ">
                                            <button type="button" className="text-white bg-black   font-semibold rounded-5 text-sm  w-full lg:w-full py-2.5 px-5">Log in</button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </section>











        </>
    );
}

export default Header;