"use client"
import Image from "next/image";
import Header from "../Component/header";
import Footer from "../Component/footer";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[200px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[100px] pb-[50px]">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="col-lg-10">
                                        <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] lg:pt-[130px] pt-[30px] text-[#212833]">Ecommerce Accounting Experts for Seamless Growth</p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">
                                            As an ecommerce business, your accounting requirements are anything but ordinary. From handling returns, discounts, gift cards, and platform fees to navigating global VAT regulations, traditional accounting services won’t cut it. That’s where Cloud BSS comes in. We specialize in ecommerce accounting, offering customized solutions designed to meet the unique needs of your business.</p>

                                        <div className=" flex gap-4 lg:pb-[0px] pb-[50px]">
                                            <div>
                                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Get Started</button>
                                            </div>
                                            <div>
                                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Pricing</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Image className="img-responsive w-full " src="/Images/4.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] overflow-hidden bg-[#F3EFE7]">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[60px] sm:pb-[50px] pb-[10px] text-center ">
                        <div className="flex justify-center ">
                            <div className="col-lg-4">
                                <p className=" text-[#000] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center ">Why Choose Cloud BSS?</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold text-[#353535] ">Tailored Financial Solutions for Ecommerce Sellers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 lg:pt-[80px] pt-[10px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-md-12">
                                    <Image className="img-responsive w-full" src="/Images/4(1).png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Accountants Who Get Ecommerce</p>
                                        <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Ecommerce businesses face challenges that require specialized knowledge. Traditional accountants often miss the mark. Cloud BSS specializes in ecommerce, dealing with everything from platform fees and returns to complex VAT requirements. Our expert accountants understand the intricacies of ecommerce and provide tailored advice. You can even chat directly with your accountant via our app, with a guaranteed response within 24 hours.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="lg:px-[120px] px-[20px] overflow-hidden bg-[#F3EFE7]">
                <div className="row  justify-center ">
                    <div className="col-md-10 ">
                        <div className="lg:pt-[80px] pt-[40px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2">
                                    <div className="flex lg:justify">
                                        <div className="col-lg-9 ">
                                            <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Seamless Integration with Sales Platforms</p>
                                            <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Tired of juggling multiple platforms for your transactions? Cloud BSS integrates directly with leading sales platforms such as Amazon, Shopify, and eBay. We automatically process platform fees, returns, discounts, and gift cards, saving you time and minimizing errors. Additionally, we manage payments from PayPal, Stripe, and Square, ensuring smooth, automated transactions.
                                            </p>
                                            <Image className="img-responsive w-70" src="/Images/4(11).svg" alt="logo" width={1830} height={750} />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/4(2).png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] overflow-hidden bg-[#F3EFE7] lg:pb-[80px] pb-[30px]">
                <div className="row justify-center">

                    <div className="col-md-10 lg:pt-[80px] pt-[40px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-md-12">
                                    <Image className="img-responsive w-full" src="/Images/4(3).png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9 ">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Effortless VAT Management</p>
                                        <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Handling VAT can be one of the trickiest aspects of ecommerce, especially for global businesses. Cloud BSS takes the headache out of VAT calculation and filing for UK-based businesses, ensuring compliance and timely submissions. Focus on growing your business without the worry of tax complications.
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden bg-[#000]">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="col-lg-5 lg:pb-[60px] pb-[30px]">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#FFF]">Got questions? Chat with our local experts</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#ABABAB]">Choose a convenient time to chat with our accounting experts and get the answers you need to take the next step.</p>


                                    </div>
                                    <div className="lg:pt-[0px] pt-[15px]">
                                        <button type="button" className="border border-light text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Schedule a call</button>
                                    </div>



                                </div>
                            </div>
                            <div className="col-lg-3">
                                <Image className="img-responsive w-full " src="/Images/4(4).png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[90px] pt-[60px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#F3EFE7]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-4 ">
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[50px] pb-[20px]">What You Get with Cloud BSS</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[480px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/4(5).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Complete Control and Transparency Over Your Sales</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161]">With Cloud BSS, you’ll have access to a single dashboard to manage all your sales platforms, payment gateways, and bank accounts. No more switching between tools and apps to track your finances—everything is centralized, giving you more time to grow your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[480px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-27 " src="/Images/4(6).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Expert Support for Global Expansion</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[20px] pb-[20px]">Whether you’re entering new markets or managing international sales, our experts have got your back. We ensure VAT is calculated for each country you sell in and that returns are filed on time, helping you scale globally with ease.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[480px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-27 " src="/Images/4(7).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Full Financial Clarity</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[58px] pb-[20px]">Gain insight into every detail of your business with complete visibility of profits and expenses. Cloud BSS offers in-depth breakdowns of each SKU, market, and country tax rate, so you can make informed decisions and optimize your ecommerce operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[90px] pt-[40px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#F3EFE7]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-4 ">
                                <p className=" text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center ">WHO WE HELP</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[50px] pb-[20px] ">Empowering Ecommerce Entrepreneurs at Every Stage</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <Image className="img-responsive w-full " src="/Images/4(8).png" alt="logo" width={1830} height={750} />
                                <div className="flex justify-center">
                                    <div className="col-lg-11">
                                        <p className=" text-[#212833] lg:text-[1.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] font-medium text-center  lg:pt-[50px] pt-[30px]">Dropshippers</p>
                                        <p className="text-[#616161] text-center font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Maximize your margins with seamless accounting and return management. Cloud BSS helps dropshippers manage operations smoothly, providing expert support and accounting solutions that make running your business hassle-free.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 lg:pt-[0px] pt-[20px]">
                                <Image className="img-responsive w-full " src="/Images/4(9).png" alt="logo" width={1830} height={750} />
                                <div className="flex justify-center">
                                    <div className="col-lg-11">
                                        <p className=" text-[#212833] lg:text-[1.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] font-medium text-center  lg:pt-[50px] pt-[30px]">Your own brand</p>
                                        <p className="text-[#616161] text-center font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Whether you're working from home or expanding into a commercial space, Cloud BSS grows with you. We offer flexible services that scale alongside your business, helping you stay organized and compliant as you build your brand.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 lg:pt-[0px] pt-[20px]">
                                <Image className="img-responsive w-full " src="/Images/4(10).png" alt="logo" width={1830} height={750} />
                                <div className="flex justify-center">
                                    <div className="col-lg-11">
                                        <p className=" text-[#212833] lg:text-[1.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] font-medium text-center  lg:pt-[50px] pt-[30px]">White-label sellers</p>
                                        <p className="text-[#616161] text-center font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Focus on what matters most—growing your products and revenue. Let Cloud BSS manage the complexity of taxes, filings, and financial operations. We provide the behind-the-scenes support that keeps your business compliant and organized for success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] overflow-hidden lg:pb-[60px] pb-[50px] bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="flex justify-center">
                            <div className="col-lg-6">
                                <div className="lg:pb-[60px] pb-[30px] text-center">
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">PRICING</button>
                                    <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">Plans to fit your business</p>
                                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[10px] pt-[5px]">Our packages are tailored to your business stage and financial year revenue. Customise your package with add-ons to suit your needs as you grow.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row justify-center">
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4   ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Operate</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">For business owners who want to ensure they tick all basic compliance boxes as they grow</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0vw] leading-[4vw]  text-[#000] font-medium">from</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£71/m</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">£850 billed annually + VAT</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium">
                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] ">
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold ">Financial software</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">  Create, send, and chase invoices</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Capture bills and receipts easily </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Pay bills in one click</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Reimburse expenses</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Connect your banks</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Use multiple currencies</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Connect ecommerce marketplace</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Bookkeeping</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Unlimited bookkeeping
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Automatic reconciliations</p>
                                                </div>
                                            </div>

                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Expert service</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Initial consultation with a tax expert</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">In-app chat</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Tax advice on payroll and dividends</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Business review with accountant annually</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Tax & Filings</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Annual filings</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Self-assessment</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Payrolls</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">PAYE registration</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0"> 1st Director Payroll</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Company admin</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Unlimited corporate changes
                                                    </p>
                                                </div>
                                            </div>



                                        </p>
                                    </div>
                                    <hr className="border-2 border-[#B0B0B0]"></hr>

                                    <div className="col-lg-12">
                                        <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px] lg:pl-[15px] pl-[5px] ">Historical work</p>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Catch-up bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£85/m</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Urgency filing</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£200</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Historical annual filing and bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£680/m</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4 shadow-sm  ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4   ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Grow</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">For businesses nearing VAT registration, seeking up-to-date analytics and consultations</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0vw] leading-[4vw]  text-[#000] font-medium">from</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£137/m</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">£1,640 billed annually + VAT</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >

                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium">
                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] ">
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold ">Financial software</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">  Create, send, and chase invoices</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Capture bills and receipts easily </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Pay bills in one click</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Reimburse expenses</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Connect your banks</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Use multiple currencies</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Connect ecommerce marketplace</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Bookkeeping</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Unlimited bookkeeping
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Automatic reconciliations</p>
                                                </div>
                                            </div>

                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Expert service</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Initial consultation with a tax expert</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">In-app chat</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Tax advice on payroll and dividends</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Video calls with an expert</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Business review with accountant monthly</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Ad-hoc tax advice</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Dedicated accountant</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Tax & Filings</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Annual filings</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Self-assessment</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">VAT filing</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">VAT registration</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Payrolls</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">PAYE registration</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0"> 1st Director Payroll</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Full payroll, 5 employees</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Company admin</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Unlimited corporate changes
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Registered London office address</p>
                                                </div>
                                            </div>



                                        </p>




                                    </div>
                                    <hr className="border-2 border-[#B0B0B0]"></hr>
                                    <div className="col-lg-12">
                                        <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px] lg:pl-[15px] pl-[5px] ">Historical work</p>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Catch-up bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£164/m</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Urgency filing</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£200</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Historical annual filing and bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£680/m</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4 shadow-sm  ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4 shadow-sm  ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Scale</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">For entrepreneurs earning £350k+ annually, managing multiple roles and seeking to simplify financial tasks

                                        </p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0vw] leading-[4vw]  text-[#000] font-medium">from</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£224/m</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">£2,690 billed annually, per financial year + VAT</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div>
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium">
                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] ">
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold ">Financial software</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">  Create, send, and chase invoices</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Capture bills and receipts easily </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Pay bills in one click</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Reimburse expenses</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Connect your banks</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Use multiple currencies</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Connect ecommerce marketplace</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Bookkeeping</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Unlimited bookkeeping
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Automatic reconciliations</p>
                                                </div>
                                            </div>

                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Expert service</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Initial consultation with a tax expert</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">In-app chat</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Tax advice on payroll and dividends</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Video calls with an expert</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Business review with accountant monthly</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Ad-hoc tax advice</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Dedicated accountant</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Tax & Filings</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Annual filings</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Self-assessment</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">VAT filing</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">VAT registration</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Payrolls</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">PAYE registration</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0"> 1st Director Payroll</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Full payroll, 10 employees</p>
                                                </div>
                                            </div>


                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Company admin</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Unlimited corporate changes
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Registered London office address</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 text-[#0061FE]">Professional references</p>
                                                </div>
                                            </div>




                                        </p>





                                    </div>
                                    <hr className="border-2 border-[#B0B0B0]"></hr>
                                    <div className="col-lg-12">
                                        <p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pt-[10px] pt-[5px] lg:pl-[15px] pl-[5px] ">Historical work</p>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Catch-up bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£269/m</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Urgency filing</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£200</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Historical annual filing and bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£680/m</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-lg-12 lg:pt-[0px] pt-[20px]">
                    <div className="flex justify-center">
                        <Link href="/accountingprices" className="text-black">
                            <button
                                type="button"
                                className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                                <div className="flex gap-2 items-center">
                                    <div>Compare Pricing</div>
                                    <div className="p-0 m-0">
                                        <div className="w-6 h-6  rounded">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                className="stroke-black group-hover:stroke-white transition duration-300">
                                                <path d="M20.0001 11.9998L4.00012 11.9998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </button></Link>

                    </div>
                </div>

            </section >

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[30px] overflow-hidden lg:pb-[30px] pb-[15px] bg-[#CCDFFF]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="col-lg-5">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#0061FE]">Download free guide on how to set up business in the UK</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#0061FE]">We’ve put together all of the documents and details you need to figure out before you open a company</p>


                                    </div>
                                    <div className="lg:flex sm:row gap-4">
                                        <div>
                                            <input type="text" id="text" className="bg-white rounded-full px-5 py-2 text-black " placeholder="Email address" required></input>
                                        </div>
                                        <div className="lg:pt-[0px] pt-[15px] lg:pb-[0px] pb-[15px]">
                                            <button type="button" className="border border-dark text-[#0061FE] hover:bg-[#0061FE] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Download</button>
                                        </div>
                                    </div>

                                </div>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[10px] font-medium text-[#0061FE]">By clicking, you agree to our<span className="underline">Terms & Conditions,Privacy and Data Protection Policy</span></p>
                            </div>
                            <div className="col-lg-3">
                                <Image className="img-responsive w-full " src="/Images/copy14.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[50px] lg:pb-[60px] pb-[50px] overflow-hidden bg-[#F3EFE7]">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="lg:text-[2.5vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[20px] pb-[10px]">Frequently Asked Questions</p>
                        <p className="font-medium underline lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center lg:pb-[20px] pb-[10px]"> More FAQs</p>

                    </div>
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-9">

                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What is Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  rounded-4 ">Cloud BSS is an all-in-one business management platform designed to streamline company registration, accounting, bookkeeping, and tax compliance for entrepreneurs. We provide expert support to help your business grow smoothly and stay compliant.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-2">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Who can use Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">
                                                                Cloud BSS is ideal for entrepreneurs at any stage, from solo founders to scaling small businesses and ecommerce brands. We offer specialized solutions for dropshippers, white-label sellers, and ecommerce entrepreneurs.</p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-3">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How does the registration process work?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] ">The process is straightforward and fully digital. We help you select your company name, choose your SIC code, gather the necessary documents, and submit everything to Companies House. You’ll receive your certificate of incorporation once your company is officially registered.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-4">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What documents do I need to register my company?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">You’ll need identification documents (passport copies and proof of address) for yourself and any directors or shareholders, plus a company address (either your home address or a registered office from us).


                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-5">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Do I need to be an accounting expert to use Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Not at all! Cloud BSS simplifies accounting for ecommerce businesses. We provide expert accountants and user-friendly software to help you manage expenses, taxes, and stay compliant with ease.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>




                                    <AccordionItem value="item-6">

                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">How does Cloud BSS help with tax compliance?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">We ensure tax compliance by calculating and filing your VAT and other taxes on time. Cloud BSS tracks deadlines and handles VAT registration and filings, so you can focus on growing your business.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-7">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Can Cloud BSS help with ecommerce businesses?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Yes! Cloud BSS specializes in ecommerce. We integrate with platforms like Amazon, Shopify, and eBay to manage your sales, platform fees, returns, discounts, and VAT—offering tailored accounting services for online sellers.
                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-8">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How does Cloud BSS help with cash flow?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] ">Cloud BSS gives you a real-time view of your cash flow, showing how much you owe, how much you’re owed, and your available balance. This helps you make informed financial decisions and plan for the future.
                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-9">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What support will I have during the registration and accounting process?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">You’ll have access to a dedicated business expert and live chat support to guide you through the entire process. From company registration to ongoing financial management, we’re here to support you every step of the way.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-10">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How do I get started with Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Getting started is easy! Simply sign up, choose the services you need, and provide the required documents. Our team will handle the rest—from company registration to ongoing financial management. Schedule a call with us today to begin your journey.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>
                                </Accordion>

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