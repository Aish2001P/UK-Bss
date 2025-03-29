"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


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
            <section className="lg:px-[100px] px-[20px] overflow-hidden lg:pt-[50px] pt-[60px] bg-[#212833]">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="row lg:pb-[30px] pb-[30px]">
                            <div className="col-lg-4 lg:pb-[0px] pb-[30px] ">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] ">SOLUTIONS  FOR  BUSINESS</p>

                                <p><Link href="/Accountingservices" className=" text-white lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  hover:text-black !no-underline">Accounting & Tax</Link></p>

                                <p><Link href="/ecommerceaccounting" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Ecommerce Accounting</Link></p>

                                <p><Link href="/bookkeeping" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black"> Bookkeeping</Link></p>

                                <p><Link href="/londonaccountants" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">London Accountants</Link></p>

                                <p><Link href="/propertyaccountants" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Property Accountants</Link></p>

                                <p><Link href="/accountingoutsourcing" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Accounting Outsourcing</Link></p>

                                <p><Link href="/Registeracompany" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Company Registration</Link></p>

                                <p><Link href="/businessbankaccount" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Business Bank Account</Link></p>


                            </div>
                            <div className="col-lg-3 lg:pb-[0px] pb-[30px]">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw]">FEATURES</p>

                                <p><Link href="/invoicing" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Invoicing</Link></p>

                                <p><Link href="/ecommerceintegration" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Ecommerce Integrations</Link></p>

                                <p><Link href="/reporting" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Reporting</Link></p>

                                <p><Link href="/demo" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Demo</Link></p>



                            </div>
                            <div className="col-lg-3 lg:pb-[0px] pb-[30px]">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw]">RESOURCES</p>

                                <p><Link href="/blog" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Our Blog</Link></p>

                                <p><Link href="/guides" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Guides</Link></p>

                                <p><Link href="/companynamecheck" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Company Name Check</Link></p>

                                <p><Link href="/ebaycalculator" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">eBay Fee Calculator</Link></p>

                                <p><Link href="/amazon-calculator" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Amazon Fee Calculator</Link></p>

                                <p><Link href="/margin-calculator" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Margin Calculator</Link></p>

                            </div>
                            <div className="col-lg-2 lg:pb-[0px] pb-[30px]">
                                <p className="text-[#939393] font-medium lg:text-[1vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw]">COMPANY</p>
                                <p><Link href="/aboutus" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">About Us</Link></p>


                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Our Partners</p>

                                <p><Link href="/carrers" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Career at Cloud Bss</Link></p>

                                <p><Link href="/contactus" className=" lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-white !no-underline hover:text-black">Contact Us</Link></p>


                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Privacy Policy</p>
                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Terms & Conditions</p>
                                <p className="text-[#FFF] lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw]">Terms of Business</p>
                            </div>
                        </div>
                    </div>
                    <hr className=" border-2 border-white"></hr>
                </div>
                <div className="col-lg-12 lg:pt-[30px] pt-[10px] lg:pb-[50px] pb-[50px]">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="lg:flex gap-8">
                                <div>
                                    <Image className="img-responsive w-48" src="/Images/logo 1.svg" alt="logo" width={1080} height={1080} />
                                </div>
                                <div className="lg:pt-[0px] pt-[30px] ">

                                    <button type="button" className="border border-[#939393]  font-medium rounded-3 text-sm px-3 py-2 text-center items-center text-[#939393]">
                                        <div className="flex items-center  gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="##939393" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                                                <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                                <path d="M21 15H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M21 9H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <p className="p-0 m-0">United Kingdom</p>

                                            <div
                                                className="relative"
                                                onMouseEnter={() => handleMouseEnter("UK")}
                                                onMouseLeave={handleMouseLeave}
                                            >

                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#939393" fill="none">
                                                        <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#939393" fill="none">
                                                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>


                                                {openMenu === "UK" && (
                                                    <div className="absolute right-[-15] top-[-190px] border   py-2 mt-2 w-[215px] px-3 bg-[#212833] shadow-md rounded-md transition-all ease-in-out">


                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-center  items-center text-lg !text-[#fff]  !no-underline hover:text-gray-900 group ">


                                                                <p className="font-medium lg:text-[1vw] text-[3vw] p-0 m-0 ">Singapore</p>
                                                            </Link>
                                                        </div>
                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-center  items-center  !text-[#fff] !no-underline hover:text-gray-900 group">


                                                                <p className="font-medium lg:text-[1vw] text-[3vw] p-0 m-0">HongKong</p>
                                                            </Link>

                                                        </div>
                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left pl-9  items-center  !text-[#fff]  !no-underline hover:text-gray-900 group">


                                                                <p className="font-medium lg:text-[1vw] text-[3vw] p-0 m-0 ">UAE</p>
                                                            </Link>
                                                        </div>
                                                        <div className="pt-2">
                                                            <Link href="" className="flex gap-3 justify-left pl-9  items-center  !text-[#fff] !no-underline hover:text-gray-900 group">


                                                                <p className="font-medium lg:text-[1vw] text-[3vw] p-0 m-0 ">US</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>


                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className="lg:flex gap-8 justify-end">
                                <div className="lg:pt-[0px] pt-[30px]">
                                    <button type="button" className="border border-[#939393] bg-black  font-medium rounded-5 text-sm px-3 py-2 text-center items-center text-[#939393]">
                                        <div className="flex gap-2">
                                            <Image className="img-responsive w-5" src="/Images/vector 3.svg" alt="logo" width={1080} height={1080} />
                                            <p className="p-0 m-0">App Store</p>
                                        </div>
                                    </button>
                                </div>
                                <div className="lg:pt-[0px] pt-[20px]">
                                    <button type="button" className="border border-[#939393] bg-[#000] font-medium rounded-5 text-sm px-3 py-2 text-center items-center text-[#939393]">
                                        <div className="flex gap-2">
                                            <Image className="img-responsive w-5" src="/Images/vector 4.svg" alt="logo" width={1080} height={1080} />
                                            <p className="p-0 m-0">Play Store</p>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-6 order-lg-1 order-2">
                                <p className="text-[#C1C1C1] lg:pt-[40px] pt-[30px]"> Copyright © 2018–2024 Cloud BSS Pvt. Ltd., United States. All rights reserved </p>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1">
                                <div className="flex gap-8 lg:justify-end">
                                    <div className="flex gap-5 lg:pt-[40px] pt-[30px]">
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