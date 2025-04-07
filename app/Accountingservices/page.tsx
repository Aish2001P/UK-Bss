"use client"
import Image from "next/image";
import Header from "../Component/header";
import Footer from "../Component/footer";
import Link from "next/link";
import React, { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
                            <div className="row items-center">
                                <div className="col-lg-6">
                                    <div className="col-lg-10">
                                        <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw]  text-[#212833]">Streamlined Accounting Services for Your Business Success</p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">
                                            Let Cloud BSS take care of your financial administration so you can focus on growing your business. With our all-in-one accounting services, you&apos;ll streamline your finances, simplify tax filing, and get clear insights into your cash flow.</p>

                                        <div className=" flex gap-4 lg:pb-[0px] pb-[40px]">
                                            <div>
                                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Get Started</button>
                                            </div>
                                            <div>
                                                <Link href="/accountingprices" className="text-black">
                                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Pricing</button></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Image className="img-responsive w-full " src="/Images/3(1).png" alt="logo" width={1830} height={750} />
                                </div>
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
                                <p className="uppercase text-[#353535] lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center">What You Get with Our Accounting Services</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[50px] pb-[20px]">Complete Visibility and Control Over Your Finances</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  lg:h-[480px]">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/3(2).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Your Personal Accountant</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161]">Gain access to a dedicated accountant who is available via live chat to help with everything from everyday questions to complex financial decisions. You'll get expert assistance within 24 hours.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[480px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-27 " src="/Images/3(3).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> User-Friendly Accounting Software</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[20px] pb-[20px]">Our intuitive tools automate everything from invoicing to payments and expenses, keeping you organized and saving you valuable time.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[480px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-27 " src="/Images/3(4).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Unlimited bookkeeping</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[58px] pb-[20px]">Included in your plan, we manage all your bookkeeping, from keeping track of your financial records to handling taxes, transaction matching, and billing.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[480px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-27 " src="/Images/3(5).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Tax Filing and Compliance Made Easy</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[18px] pb-[20px]">Say goodbye to paperwork! We ensure your tax filings are accurate, deadlines are met, and your business remains compliant with HMRC regulations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[90px] pt-[60px] lg:pb-[60px] pb-[40px] overflow-hidden bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-4 ">
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold ">WHO WE HELP</p>
                                <p className=" text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center lg:pb-[50px] pb-[20px]">At Cloud BSS, we provide personalized support for businesses of all sizes and stages, offering services that ensure your financial success and compliance.</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <Image className="img-responsive w-full " src="/Images/3(6).png" alt="logo" width={1830} height={750} />
                                <div className="flex justify-center">
                                    <div className="col-lg-11">
                                        <p className=" text-[#212833] lg:text-[1.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] font-medium text-center  lg:pt-[50px] pt-[30px]">Solo Entrepreneurs</p>
                                        <p className="text-[#616161] text-center font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Starting a business alone can be overwhelming. Cloud BSS ensures your company is fully registered and compliant, leaving you to focus on what matters most—growing your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 lg:pt-[0px] pt-[20px]">
                                <Image className="img-responsive w-full " src="/Images/3(7).png" alt="logo" width={1830} height={750} />
                                <div className="flex justify-center">
                                    <div className="col-lg-11">
                                        <p className=" text-[#212833] lg:text-[1.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] font-medium text-center  lg:pt-[50px] pt-[30px]">Small & Growing Businesses</p>
                                        <p className="text-[#616161] text-center font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Whether you're a small business starting up or expanding, we provide the expertise, tools, and support to efficiently manage your finances, track cash flow, and stay on top of tax obligations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 lg:pt-[0px] pt-[20px]">
                                <Image className="img-responsive w-full " src="/Images/3(8).png" alt="logo" width={1830} height={750} />
                                <div className="flex justify-center">
                                    <div className="col-lg-11">
                                        <p className=" text-[#212833] lg:text-[1.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] font-medium text-center  lg:pt-[50px] pt-[30px]">Ecommerce Businesses</p>
                                        <p className="text-[#616161] text-center font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Generic accounting tools often don't work for ecommerce. We specialize in supporting ecommerce businesses, seamlessly integrating with platforms like Amazon, Shopify, and eBay, and offering tailored solutions to meet your online selling needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] overflow-hidden bg-[#F3EFE7]">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[60px] sm:pb-[10px] pb-[10px] text-center ">
                        <div className="flex justify-center ">
                            <div className="col-lg-4">
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold text-[#353535] ">WHY CLOUD BSS</p>
                                <p className=" text-[#000] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center lg:pb-[50px] pb-[20px]">Take control of your business finances with the support of our dedicated team of experts. Here&apos;s why Cloud BSS should be your go-to partner for accounting:</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 lg:pt-[10px] pt-[10px]">
                        <div className="row items-center">
                            <div className="col-lg-6 mb-4">
                                <div className="col-lg-12">
                                    <Image className="img-responsive w-full" src="/Images/3(9).png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Expert Accountants at Your Service</p>
                                        <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">From day one, you'll have access to a personal accountant who specializes in navigating taxes and compliance. If you have questions or need assistance, we guarantee a response within 24 hours via live chat.
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
                    <div className="col-lg-10 ">
                        <div className="lg:pt-[80px] pt-[40px]">
                            <div className="row items-center">
                                <div className="col-lg-6 order-lg-1 order-2">
                                    <div className="flex lg:justify">
                                        <div className="col-lg-9 ">
                                            <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Real-Time Cash Flow Insights</p>
                                            <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Monitor your business&apos;s financial health in real time. Our dashboard gives you an up-to-the-minute view of your cash flow, highlighting exactly what you have, owe, and are owed—all in one place.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1 mb-4">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/3(10).png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] overflow-hidden bg-[#F3EFE7]">
                <div className="row justify-center">

                    <div className="col-lg-10 lg:pt-[80px] pt-[40px]">
                        <div className="row items-center">
                            <div className="col-lg-6 mb-4">
                                <div className="col-lg-12">
                                    <Image className="img-responsive w-full" src="/Images/3(11).png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9 ">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Tax Filing Made Simple</p>
                                        <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Cloud BSS ensures that your tax filings are accurate and submitted on time. We handle VAT, compliance deadlines, and tax returns, so you can focus on business growth without worrying about taxes.
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="text-[#000] font-medium lg:text-[2.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] lg:pt-[80px] pt-[30px] lg:pb-[50px] pb-[40px] text-center">
                            <div className="flex justify-center align-items-center">
                                <p >Bookkeeping? </p> <Image className="img-responsive w-24 item-center" src="/Images/svg3.svg" alt="logo" width={1830} height={750} /><p> It’s included.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] overflow-hidden lg:pb-[60px] pb-[60px] bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="flex justify-center">
                            <div className="col-lg-6">
                                <div className="lg:pb-[60px] pb-[30px] text-center">
                                    <button type="button" className="border border-dark font-medium !rounded-full text-md px-5 py-2 text-center items-center">PRICING</button>
                                    <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">Plans to fit your business</p>
                                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[10px] pt-[5px]">Packages tailored to what your business needs. Choose extra add-ons according to your operational needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row justify-center">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className=" p-6 bg-[#FFFDFA]  rounded-4 flex-1 h-full  ">
                                        <div className="lg:h-[250px] overflow-hidden">
                                            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Operate</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161]">For business owners who want to ensure they tick all basic compliance boxes as they grow</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[0vw] leading-[3.5vw]  text-[#000] font-medium">from</p>
                                            <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£71/m</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3.5vw]  text-[#616161] font-bold">£850 billed annually + VAT</p>
                                        </div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium">
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] ">
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold ">Financial software</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Bookkeeping</p>
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

                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Expert service</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Tax & Filings</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Payrolls</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Company admin</p>
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
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Catch-up bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£85/m</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Urgency filing</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£200</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Historical annual filing and bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£680/m</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4 shadow-sm  ">
                                    
                                    <div className=" p-6 bg-[#FFFDFA]  rounded-4 flex-1 h-full  ">
                                        <div className="lg:h-[250px] overflow-hidden">
                                            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Grow</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161]">For businesses nearing VAT registration, seeking up-to-date analytics and consultations</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[0vw] leading-[3.5vw]  text-[#000] font-medium">from</p>
                                            <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£137/m</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3.5vw]  text-[#616161] font-bold">£1,640 billed annually + VAT</p>
                                        </div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >

                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium">
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] ">
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold ">Financial software</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Bookkeeping</p>
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

                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Expert service</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Tax & Filings</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Payrolls</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Company admin</p>
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
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Catch-up bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£164/m</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Urgency filing</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£200</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium  lg:pl-[15px] pl-[5px] ">?  Historical annual filing and bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£680/m</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4 shadow-sm  ">
                                <div className=" p-6 bg-[#FFFDFA]  rounded-4 flex-1 h-full  ">
                                        <div className="lg:h-[250px] overflow-hidden">
                                            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Scale</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161]">For entrepreneurs earning £350k+ annually, managing multiple roles and seeking to simplify financial tasks</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[0vw] leading-[3.5vw]  text-[#000] font-medium">from</p>
                                            <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£224/m</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3.5vw]  text-[#616161] font-bold">£2,690 billed annually, per financial year + VAT</p>
                                        </div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                    
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium">
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] ">
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold ">Financial software</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Bookkeeping</p>
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

                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Expert service</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Tax & Filings</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Payrolls</p>
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


                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Company admin</p>
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
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw]  font-medium  lg:pl-[15px] pl-[5px] ">?  Catch-up bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw]  font-semibold text-[#767676] ">£269/m</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw]  font-medium  lg:pl-[15px] pl-[5px] ">?  Urgency filing</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw]  font-semibold text-[#767676] ">£200</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="col-lg-9">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw]  font-medium  lg:pl-[15px] pl-[5px] ">?  Historical annual filing and bookkeeping</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw]  font-semibold text-[#767676] ">£680/m</p>
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[30px] overflow-hidden lg:pb-[30px] pb-[15px] bg-[#000]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="col-lg-5">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#fff]">Download free guide on how to set up business in the UK</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#fff]">We&apos;ve put together all of the documents and details you need to figure out before you open a company</p>


                                    </div>
                                    <div className="lg:flex sm:row gap-4">
                                        <div>
                                            <input type="text" id="text" className="bg-white rounded-full px-5 py-2 text-black " placeholder="Email address" required></input>
                                        </div>
                                        <div className="lg:pt-[0px] pt-[15px]">
                                            <button type="button" className="border border-light text-[#fff] hover:bg-[#fff] hover:text-[#000] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Download</button>
                                        </div>
                                    </div>

                                </div>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[30px] font-medium text-[#fff]">By clicking, you agree to our<span className="underline">Terms & Conditions,Privacy and Data Protection Policy</span></p>
                            </div>
                            <div className="col-lg-3">
                                <Image className="img-responsive w-full " src="/Images/copy14.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[60px] pb-[50px] overflow-hidden bg-[#F3EFE7]">
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
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What is Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  rounded-4 ">Cloud BSS is an all-in-one business service platform designed to help entrepreneurs and companies manage company registration, accounting, bookkeeping, tax compliance, and financial operations with ease.
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
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How long does it take to register my company with Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">
                                                                Company registration typically takes 24-48 hours. Once you provide your documents, we take care of everything else to set up your company quickly.</p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-3">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What documents do I need to register my company?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833] ">You'll need a passport copy and proof of address for all directors and shareholders, along with a company name and registered business address (we can provide this if needed).

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

                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Can Cloud BSS help with tax filing and compliance?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Yes! We handle tax filings, VAT registration, compliance deadlines, and overall tax compliance to keep your business in good standing with HMRC.

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
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How does Cloud BSS assist with bookkeeping?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  "> Our bookkeeping services are included in every plan. We handle your financial records, transaction matching, and tax filing, so you don't have to manage it all yourself.
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
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">Do I get a personal accountant with Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  "> Yes! You&apos;ll have access to your own dedicated accountant who is available via live chat to answer your questions and provide support within 24 hours.

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
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Can I integrate my business accounts with Cloud BSS software?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Yes, our software integrates seamlessly with your business bank accounts and ecommerce platforms like Amazon, Shopify, and eBay for smooth transaction tracking.
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

                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What happens if I miss my tax deadline?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833] ">With Cloud BSS, you'll never miss a deadline. We track VAT, tax returns, and compliance deadlines, ensuring everything is filed on time.
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
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Is Cloud BSS only for UK businesses?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">While we specialize in UK business registration, our accounting services are available to businesses worldwide. No matter where you&apos;re based, Cloud BSS can help you stay compliant and manage your finances effectively.
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
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Can I upgrade my plan as my business grows?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Absolutely! We offer flexible accounting plans that can easily be upgraded as your business expands, whether you need more bookkeeping, tax filing assistance, or additional accounting services.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-11">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How do I get started with Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Getting started is simple! Choose the plan that fits your business, submit your company details, and our team will guide you through the rest of the process. You can also schedule a call to discuss your needs.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>





                                    <AccordionItem value="item-12">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How do I contact support?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Our support team is available via live chat for quick answers. For more complex inquiries, you can also schedule a call with one of our experts.


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
            </section >

            <section className="lg:px-[100px] px-[20px] lg:pt-[90px] pt-[60px] lg:pb-[80px] pb-[50px] overflow-hidden bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-4 text-center ">
                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">RESOURCES</button>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[50px] pb-[20px] lg:pt-[30px] pt-[20px]">Fresh insights from our business blog</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">

                                <div className="lg:pt-[20px] pt-[10px]">
                                    <Image className="img-responsive w-full " src="/Images/3(13).svg" alt="logo" width={1830} height={750} />
                                </div>
                                <div >
                                    <p className=" text-[#212833] lg:text-[1.3vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium   lg:pt-[20px] pt-[20px]">How to Deal with Inflation's Effects on Your Small Business</p>
                                    <p className="text-[#616161]   lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pb-[20px] pb-[10px]">A year end package with everything you need to file comes standard with Cloud Bss. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-md text-sm px-5 py-2 text-center items-center">Learn More</button>
                                </div>


                            </div>
                            <div className="col-lg-4 mb-4 lg:pt-[0px] pt-[30px]">

                                <div className="lg:pt-[20px] pt-[10px]">
                                    <Image className="img-responsive w-full " src="/Images/3(14).png" alt="logo" width={1830} height={750} />
                                </div>
                                <div >
                                    <p className=" text-[#212833] lg:text-[1.3vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium   lg:pt-[20px] pt-[20px]">How to Deal with Inflation's Effects on Your Small Business</p>
                                    <p className="text-[#616161]   lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pb-[20px] pb-[10px]">A year end package with everything you need to file comes standard with Cloud Bss. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-md text-sm px-5 py-2 text-center items-center">Learn More</button>
                                </div>

                            </div>
                            <div className="col-lg-4 mb-4 lg:pt-[0px] pt-[30px]">

                                <div className="lg:pt-[20px] pt-[10px]">
                                    <Image className="img-responsive w-full " src="/Images/3(15).png" alt="logo" width={1830} height={750} />
                                </div>
                                <div >
                                    <p className=" text-[#212833] lg:text-[1.3vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium   lg:pt-[20px] pt-[20px]">How to Deal with Inflation's Effects on Your Small Business</p>
                                    <p className="text-[#616161]   lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pb-[20px] pb-[10px]">A year end package with everything you need to file comes standard with Cloud Bss. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-md text-sm px-5 py-2 text-center items-center">Learn More</button>
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
