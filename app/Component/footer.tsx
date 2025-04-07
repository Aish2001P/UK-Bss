"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { List } from "lucide-react";


export default function Home() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const handleMouseEnter = (menu: string) => {
        setOpenMenu(menu);
    };
    const handleMouseLeave = () => {
        setOpenMenu(null);
    };
    return (
        <>
            <section className="lg:px-[100px] px-[20px] overflow-hidden lg:pt-[40px] pt-[20px] bg-[#212833]">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="row lg:pb-[30px] pb-[30px]">
                            <div className="col-lg-4 lg:pb-[0px] pb-[20px] ">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] ">SOLUTIONS  FOR  BUSINESS</p>

                                <p className="p-1 m-0"><Link href="/Accountingservices" className=" text-white lg:text-[1vw] text-[3vw] font-[500]  hover:text-black !no-underline lg:pt-[10px] pt-[5px] lg:pb-[20px] pb-[5px]">Accounting & Tax</Link></p>

                                <p className="p-1 m-0"><Link href="/ecommerceaccounting" className=" lg:text-[1vw] text-[3vw] lg:leading-[0.8vw] leading-[3vw] font-[500] text-white !no-underline hover:text-black p-0 m-0">Ecommerce Accounting</Link></p>

                                <p className="p-1 m-0"><Link href="/bookkeeping" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black"> Bookkeeping</Link></p>

                                <p className="p-1 m-0"><Link href="/londonaccountants" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">London Accountants</Link></p>

                                <p className="p-1 m-0"><Link href="/propertyaccountants" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Property Accountants</Link></p>

                                <p className="p-1 m-0"><Link href="/accountingoutsourcing" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Accounting Outsourcing</Link></p>

                                <p className="p-1 m-0"><Link href="/Registeracompany" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Company Registration</Link></p>

                                <p className="p-1 m-0"><Link href="/businessbankaccount" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Business Bank Account</Link></p>


                            </div>
                            <div className="col-lg-3 lg:pb-[0px] pb-[30px]">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw]">FEATURES</p>

                                <p className="p-1 m-0" ><Link href="/invoicing" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black p-0 m-0">Invoicing</Link></p>

                                <p className="p-1 m-0"><Link href="/ecommerceintegration" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Ecommerce Integrations</Link></p>

                                <p className="p-1 m-0"><Link href="/reporting" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Reporting</Link></p>

                                <p className="p-1 m-0"><Link href="/demo" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Demo</Link></p>



                            </div>
                            <div className="col-lg-3 lg:pb-[0px] pb-[30px]">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw]">RESOURCES</p>

                                <p className="p-1 m-0"><Link href="/blog" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Our Blog</Link></p>

                                <p className="p-1 m-0"><Link href="/guides" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Guides</Link></p>

                                <p className="p-1 m-0"><Link href="/companynamecheck" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Company Name Check</Link></p>

                                <p className="p-1 m-0"><Link href="/ebaycalculator" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">eBay Fee Calculator</Link></p>

                                <p className="p-1 m-0"><Link href="/amazon-calculator" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Amazon Fee Calculator</Link></p>

                                <p className="p-1 m-0"><Link href="/margin-calculator" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Margin Calculator</Link></p>

                            </div>
                            <div className="col-lg-2 lg:pb-[0px] pb-[30px]">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw]">COMPANY</p>
                                <p className="p-1 m-0"><Link href="/aboutus" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">About Us</Link></p>


                                <p className="text-[#FFF] lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] p-1 m-0">Our Partners</p>

                                <p className="p-1 m-0"><Link href="/carrers" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Career at Cloud Bss</Link></p>

                                <p className="p-1 m-0"><Link href="/contactus" className=" lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] text-white !no-underline hover:text-black">Contact Us</Link></p>


                                <p className="text-[#FFF] lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] p-1 m-0">Privacy Policy</p>
                                <p className="text-[#FFF] lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] p-1 m-0">Terms & Conditions</p>
                                <p className="text-[#FFF] lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-[500] p-1 m-0">Terms of Business</p>
                            </div>
                        </div>
                    </div>
                    <hr className=" border-2 border-white"></hr>
                </div>
                <div className="col-lg-12 lg:pt-[30px] pt-[10px] lg:pb-[30px] pb-[30px]">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="lg:flex gap-8">
                                <div>
                                    <Image className="img-responsive w-48" src="/Images/logo 1.svg" alt="logo" width={1080} height={1080} />
                                </div>
                                <div className="lg:pt-[0px] pt-[30px] ">
                                    <div
                                        className="relative"
                                        onMouseEnter={() => handleMouseEnter("UK")}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <button type="button" className="border border-[#939393]  font-medium rounded-3 text-sm px-3 py-2 text-center items-center text-[#939393]">
                                            <div className="flex items-center  gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="##939393" fill="none">
                                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                                                    <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                                    <path d="M21 15H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M21 9H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <p className="p-0 m-0">United Kingdom</p>



                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#939393" fill="none">
                                                        <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="p-0 m-0" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" color="#939393" fill="none">
                                                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="p-0 m-0" />
                                                    </svg>
                                                </div>


                                                {openMenu === "UK" && (
                                                    <div className="absolute right-[1]  !border   py-2 mt-2 w-[215px] px-3 bg-[#212833] shadow-md rounded-md transition-all ease-in-out">


                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left pl-2  items-center text-lg !text-[#fff]  !no-underline hover:text-gray-900 group ">


                                                                <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0 ">Singapore</p>
                                                            </Link>
                                                        </div>
                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left pl-2  items-center  !text-[#fff] !no-underline hover:text-gray-900 group">


                                                                <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0">HongKong</p>
                                                            </Link>

                                                        </div>
                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left pl-2  items-center  !text-[#fff]  !no-underline hover:text-gray-900 group">


                                                                <p className="font-medium lg:text-[1.1vw] text-[3vw] p-0 m-0 ">UAE</p>
                                                            </Link>
                                                        </div>
                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left pl-2  items-center  !text-[#fff] !no-underline hover:text-gray-900 group">


                                                                <p className="font-medium lg:text-[1.2vw] text-[3vw] p-0 m-0 ">US</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}



                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 ">
                            <div className="lg:flex gap-8 justify-end">
                                <div className="lg:pt-[0px] pt-[30px]">
                                    <button type="button" className="border border-[#939393] bg-white  font-medium rounded-5 text-sm px-4 py-2 text-center items-center text-[#000]">
                                        <div className="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" id="apple">
                                                <path d="M30.54 26.24a14 14 0 0 1-1.41 2.52 13.16 13.16 0 0 1-1.8 2.24A3.55 3.55 0 0 1 25 32a5.94 5.94 0 0 1-2.15-.51 6.13 6.13 0 0 0-2.31-.49 6.42 6.42 0 0 0-2.38.51 6.49 6.49 0 0 1-2.05.54A3.35 3.35 0 0 1 13.73 31a14 14 0 0 1-1.89-2.27 15.54 15.54 0 0 1-2-4A14.55 14.55 0 0 1 9 20a8.6 8.6 0 0 1 1.14-4.52A6.6 6.6 0 0 1 12.51 13a6.44 6.44 0 0 1 3.22-.91 7.7 7.7 0 0 1 2.49.58 7.67 7.67 0 0 0 2 .58 12 12 0 0 0 2.19-.68 7.23 7.23 0 0 1 3-.53 6.34 6.34 0 0 1 4.95 2.61 5.48 5.48 0 0 0-2.92 5 5.52 5.52 0 0 0 1.81 4.16A6.18 6.18 0 0 0 31 25c-.15.42-.3.82-.46 1.21ZM25.5 6.4a5.59 5.59 0 0 1-1.43 3.66 4.85 4.85 0 0 1-4 2 3.79 3.79 0 0 1 0-.49 5.7 5.7 0 0 1 1.51-3.69 5.85 5.85 0 0 1 1.85-1.39 5.65 5.65 0 0 1 2.11-.6 4.67 4.67 0 0 1 0 .52Z"></path>
                                            </svg>
                                            <p className="p-0 m-0">App Store</p>
                                        </div>
                                    </button>
                                </div>
                                <div className="lg:pt-[0px] pt-[20px]">
                                    <button type="button" className="border border-[#939393] bg-[#fff] font-medium rounded-5 text-sm px-3 py-2 text-center items-center text-[#000]">
                                        <div className="flex gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="play-store">
                                                <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"></path>
                                            </svg>
                                            <p className="p-0 m-0">Play Store</p>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row items-center">
                            <div className="col-lg-6 order-lg-1 order-2">
                                <p className="text-[#C1C1C1] lg:pt-[70px] pt-[30px]"> Copyright © 2018–2024 Cloud BSS Pvt. Ltd., United States. All rights reserved </p>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1">
                                <div className="flex gap-8 lg:justify-end">
                                    <div className="flex gap-5 lg:pt-[70px] pt-[30px]">
                                        <div>
                                            <Image className="img-responsive w-3" src="/Images/ vector 5.svg" alt="logo" width={1080} height={1080} />
                                        </div>
                                        <div>
                                            <Image className="img-responsive w-6" src="/Images/vector 6.svg" alt="logo" width={1080} height={1080} />
                                        </div>
                                        <div>
                                            <Image className="img-responsive w-6" src="/Images/vector 7.svg" alt="logo" width={1080} height={1080} />
                                        </div>
                                        <div>
                                            <Image className="img-responsive w-6" src="/Images/vector 8.svg" alt="logo" width={1080} height={1080} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section >



        </>
    );
}