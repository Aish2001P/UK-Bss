"use client"
import Image from "next/image";
import Header from "../Component/header";
import Footer from "../Component/footer";
import React, { useState } from "react";

export default function Home() {
    //accordion code
    const [isPlus, setIsPlus] = useState(true);

    const toggleIcon = () => {
        setIsPlus((prev) => !prev);
    };

    return (
        <>

            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[100px] pb-[30px]">

                            <div className="flex justify-center">
                                <div className="col-lg-6 ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">How Can Cloud BSS Help You Succeed? We’ll Show You</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        Watch our quick 2-minute video to see how Cloud BSS can simplify your operations, optimize your finances, and fuel your business growth.</p>

                                    <div className=" lg:flex gap-4 lg:pb-[60px] pb-[30px] justify-center items-center ">
                                        <div className="lg:pb-[0px] pb-[10px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 sm: w-full text-center items-center">Get Started</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="col-lg-8">
                                    <Image className="img-responsive w-full " src="/Images/9.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[50px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#F3EFE7]">

                <div className="row">
                  
                <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-5 ">
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[30px] pb-[20px]">What You Get With Cloud BSS</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-[#FFFDFA] border rounded-4 shadow-sm lg:h-[500px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/comp1.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px] ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Integrations</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Effortlessly connect your marketplaces, payment systems, and bank accounts to gain real-time visibility into your sales, returns, and fees. This allows you to make smarter, data-driven decisions that drive your business forward.</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#FFFDFA] border rounded-4 shadow-sm lg:h-[500px]  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy2.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px] ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Accounting</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Let Cloud BSS handle the complexities of financial management. Your dedicated accountant will understand your business inside and out, managing your taxes, VAT reports, and ensuring your finances are always in perfect order.</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#FFFDFA] border  rounded-4 shadow-sm lg:h-[500px]  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy3.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Ecommerce Expertise</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Automate your bookkeeping across multiple sales platforms. Our team specializes in ecommerce accounting, allowing you to focus on scaling your business while we handle your financials with care and precision.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-[#FFFDFA] border rounded-4 shadow-sm  lg:h-[500px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/comp1.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px] ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Payments</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[130px] pb-[20px]">Capture bills, receipts, and have a complete control over what’s due and when.</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#FFFDFA] border rounded-4 shadow-sm lg:h-[500px]  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy2.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px] ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Expenses</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[120px] pb-[20px]">Keep track of your expenses and ensure compliance when reporting your personal expenditures.</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#FFFDFA] border  rounded-4 shadow-sm lg:h-[500px]  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy3.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Invoices</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[60px] pb-[20px]">Stay in control of your cash flow by creating and sending professional invoices with ease. Track outstanding payments and get paid faster with integrated payment options like PayPal.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-[#FFFDFA] border rounded-4 shadow-sm  lg:h-[500px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/comp1.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px] ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Reporting</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[70px] pb-[20px]">Monitor your business performance in real-time. Cloud BSS delivers clear, actionable reports on your revenue, expenses, and profitability, empowering you to make informed decisions that lead to growth.</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                  
                </div>

            </section>

              <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#000]">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="col-lg-5">
                                                <div className="row justify-start">
            
                                                    <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#FFF]">Get tips on how to run your business smarter</p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#ABABAB]">Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.</p>
            
            
                                                </div>
                                                <div className="lg:flex sm:row gap-4 ">
            
                                                    <div >
                                                        <input type="text" id="text" className="bg-white rounded-full px-5 py-2 text-black " placeholder="Email address" required></input>
                                                    </div>
            
                                                    <div className="lg:pt-[0px] pt-[15px]">
                                                        <button type="button" className="border border-light text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Subscribe</button>
                                                    </div>
            
                                                </div>
            
                                            </div>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[10px] font-medium text-[#ABABAB]">By clicking, you agree to our<span className="text-[#fff]">Terms & Conditions,Privacy and Data Protection Policy</span></p>
                                        </div>
                                        <div className="col-lg-3">
                                            <Image className="img-responsive w-full " src="/Images/gif.gif" alt="logo" width={1830} height={750} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
            
                        <Footer />

        </>
    );
}