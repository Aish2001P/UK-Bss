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
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="col-lg-10">
                                        <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] lg:pt-[130px] pt-[30px] text-[#212833]">Expert Property Accountants for Your UK Portfolio</p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">
                                            Managing a property portfolio in the UK can be complex, but with Cloud BSS, we simplify your financial management and help you maximise your returns. Whether you’re a buy-to-let landlord or involved in property management for additional income, our team of expert accountants is here to ensure your business stays compliant, efficient, and tax-smart.</p>

                                        <div className=" lg:flex gap-4 lg:pb-[0px] pb-[50px]">
                                            <div className="lg:pb-[0px] pb-[10px]">
                                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 sm: w-full text-center items-center">Book a Consultation</button>
                                            </div>
                                            <div>
                                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 sm: w-full text-center items-center">Pricing</button>
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
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[50px] sm:pb-[50px] pb-[10px] text-center ">
                        <div className="flex justify-center ">
                            <div className="col-lg-4">
                                <p className=" text-[#000] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center ">Why Choose Cloud BSS?</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold text-[#353535] ">Tailored Financial Advice for the Property Sector</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 lg:pt-[80px] pt-[10px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-lg-12">
                                    <Image className="img-responsive w-full" src="/Images/4(1).png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Specialist Property Accountants</p>
                                        <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Our accountants have a deep understanding of property-specific tax laws. From tax deductions on rental income to optimising capital gains, we help you maximise your portfolio’s performance and minimise tax liabilities, allowing you to focus on expanding your investments.
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
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2">
                                    <div className="flex lg:justify">
                                        <div className="col-lg-9 ">
                                            <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Guidance on Limited Company Structures</p>
                                            <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Thinking about holding your properties in a limited company? Our expert accountants provide tailored guidance on the benefits and tax implications of using a limited company structure for property investments. We ensure our advice aligns with your specific goals, helping you make informed, confident decisions.
                                            </p>

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

            <section className="lg:px-[100px] px-[20px] overflow-hidden bg-[#F3EFE7] ">
                <div className="row justify-center">

                    <div className="col-lg-10 lg:pt-[80px] pt-[40px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-lg-12">
                                    <Image className="img-responsive w-full" src="/Images/4(3).png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9 ">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Ongoing Compliance</p>
                                        <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Property investments come with various compliance requirements. Staying current with tax filings is crucial, and Cloud BSS ensures that your property business remains compliant with HMRC regulations, taking the stress out of deadlines, filings, and tax obligations.
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="lg:px-[120px] px-[20px] overflow-hidden bg-[#F3EFE7] lg:pb-[80px] pb-[30px]">
                <div className="row  justify-center ">
                    <div className="col-lg-10 ">
                        <div className="lg:pt-[80px] pt-[40px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2">
                                    <div className="flex lg:justify">
                                        <div className="col-lg-9 ">
                                            <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Simple Accounting Software</p>
                                            <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Forget the hassle of manual bookkeeping. Our easy-to-use software allows you to manage your property finances in one place. Track cash flow, access reports, and communicate directly with your accountant through a user-friendly app—keeping everything organised and efficient.
                                            </p>
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
                        <div className="text-[#000] font-medium lg:text-[2.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] lg:pt-[80px] pt-[40px] lg:pb-[50px] pb-[20px] text-center">
                            <div className="flex justify-center align-items-center">
                                <p >Bookkeeping? </p> <Image className="img-responsive w-24 item-center" src="/Images/svg3.svg" alt="logo" width={1830} height={750} /><p> It’s included.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden bg-[#000]">
                <div className="row">
                    <div className="col-lg-12">
                        <div className=" row items-end">
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
                                <p className=" text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center ">WHO WE HELP</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[50px] pb-[20px] ">For Property Side Hustlers</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <Image className="img-responsive w-full " src="/Images/4(8).png" alt="logo" width={1830} height={750} />
                                <div className="flex justify-center">
                                    <div className="col-lg-11">
                                        <p className=" text-[#212833] lg:text-[1.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] font-medium text-center  lg:pt-[50px] pt-[30px]">Property Flippers and Developers</p>
                                        <p className="text-[#616161] text-center font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Accelerate your property projects by leaving the financial admin to us. Focus on flipping and developing properties while we take care of your accounting and tax filings.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 lg:pt-[0px] pt-[30px] ">
                                <Image className="img-responsive w-full " src="/Images/4(9).png" alt="logo" width={1830} height={750} />
                                <div className="flex justify-center">
                                    <div className="col-lg-11">
                                        <p className=" text-[#212833] lg:text-[1.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] font-medium text-center  lg:pt-[50px] pt-[30px]">Buy-to-Let Landlords</p>
                                        <p className="text-[#616161] text-center font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Maximise your rental income with the peace of mind that you're staying tax-efficient. Our property accountants guide you through the complexities of property taxes, ensuring you're paying the right amount while making the most of available savings.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4  lg:pt-[0px] pt-[30px]">
                                <Image className="img-responsive w-full " src="/Images/4(10).png" alt="logo" width={1830} height={750} />
                                <div className="flex justify-center">
                                    <div className="col-lg-11">
                                        <p className=" text-[#212833] lg:text-[1.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] font-medium text-center  lg:pt-[50px] pt-[30px]">Service Accommodation Owners</p>
                                        <p className="text-[#616161] text-center font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">From serviced apartments to aparthotels, we provide tailored accounting services to ensure your rental income is managed properly and taxed accordingly.</p>
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
                                            <div className="flex gap-6">
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
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium ">
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
                <div className="col-lg-12 ">
                    <div className="flex justify-center lg:pt-[0px] pt-[20px]">
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[30px] overflow-hidden  bg-[#CCDFFF]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="row items-end">
                            <div className="col-lg-9 lg:pb-[30px] pb-[15px]">
                                <div className="col-lg-5 ">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#0061FE]">Download free guide on how to set up business in the UK</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#0061FE]">We’ve put together all of the documents and details you need to figure out before you open a company</p>


                                    </div>
                                    <div className="lg:flex sm:row gap-4 lg:pb-[0px] pb-[15px]">
                                        <div>
                                            <input type="text" id="text" className="bg-white rounded-full px-5 py-2 text-black " placeholder="Email address" required></input>
                                        </div>
                                        <div className="lg:pt-[0px] pt-[15px] ">
                                            <button type="button" className="border border-dark text-[#0061FE] hover:bg-[#0061FE] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Download</button>
                                        </div>
                                    </div>

                                </div>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[10px] font-medium text-[#0061FE]">By clicking, you agree to our<span className="underline">Terms & Conditions,Privacy and Data Protection Policy</span></p>
                            </div>
                            <div className="col-lg-3  ">
                                <Image className="img-responsive w-full " src="/Images/copy 14.png" alt="logo" width={1830} height={750} />
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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">What services does Cloud BSS offer?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  rounded-4 ">Cloud BSS offers expert property accounting services, including bookkeeping, tax advice, compliance support, and tailored guidance for property investments. We specialise in helping buy-to-let landlords, property developers, and serviced accommodation owners manage their finances efficiently.


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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">How can Cloud BSS help with property taxes?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">
                                                                Our property accountants help you navigate the complexities of property tax laws, ensuring you're paying the correct tax while identifying opportunities to reduce liabilities. We help you maximize your returns on property investments.
                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>


                                    <AccordionItem value="item-3">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">Is bookkeeping included in the service?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] ">Yes, bookkeeping is included in all our plans. We take care of your financial records, ensuring everything is accurate and up-to-date so you can focus on growing your property portfolio.


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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">What kind of accounting software does Cloud BSS provide?
                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">We offer simple, easy-to-use accounting software that centralises your finances in one place. You can track cash flow, manage your property income, and communicate directly with your accountant—all through a user-friendly app.



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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">Do I need to set up a limited company to benefit from Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Not necessarily. While setting up a limited company can offer specific benefits for property investments, it's not a requirement to use our services. Our accountants provide tailored advice to determine if a limited company structure is right for you.


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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How do I get started with Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Simply choose your plan and schedule a call with one of our experts. We’ll guide you through the process, offering tailored services based on your unique needs.


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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">Is there ongoing support for compliance?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Yes, our team ensures your property business stays compliant with tax laws and deadlines. We handle all your filings and tax obligations, so you never have to worry about missing deadlines.

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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">Can I customize my plan as my business grows?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] ">Absolutely! Our plans are scalable. As your business grows, you can add additional services like tax filing, advanced reporting, and more to meet your evolving needs.
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
                        <div className="row items-end">
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