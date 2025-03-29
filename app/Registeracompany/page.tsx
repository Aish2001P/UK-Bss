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
                                        <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] lg:pt-[130px] pt-[30px] text-[#212833]">Start Your UK Business the Right Way with CloudBSS</p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[30px] lg:pb-[0px] pb-[10px] ">
                                            Starting a company in the UK should be exciting, not stressful. CloudBSS removes the complexity from the registration process, allowing you to focus on what truly matters—growing your business. Our streamlined online process ensures your company is set up quickly, efficiently, and fully compliant with UK regulations.</p>
                                        <div className="row">
                                            <div>
                                                <input type="text" id="text" className="bg-white border border-black text-gray-900 text-sm rounded-full focus:ring-black block w-full p-2.5  dark:placeholder-gray-400 dark:text-white " placeholder="Any Company Name you have in mind" required />


                                            </div>
                                            <div className="lg:pt-[20px] pt-[10px] lg:pb-[0px] pb-[40px]">
                                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Check The Name</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <Image className="img-responsive w-full " src="/Images/comp.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#F3EFE7]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-3 ">
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[30px] pb-[20px]">What You Get with CloudBSS</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  lg:h-[420px]">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/comp1.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Hassle-Free Online Company Formation</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161]">Starting your business has never been easier! CloudBSS handles the entire registration process, ensuring a smooth and efficient experience every step of the way.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[420px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy2.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Expert Support at Every Stage</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[48px] pb-[10px]">Have questions? Our team of dedicated business specialists is always available via live chat or phone to provide answers and guide you through the process.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[420px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy3.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Simple & Effortless Registration</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[48px] pb-[10px]">Send us your documents via live chat, and we’ll take care of everything—from completing your Companies House application to securing your digital signature.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row justify-center">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[420px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy4.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Business Bank Account Support</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[48px] pb-[10px]">We’ll help you select the right business bank account and connect you with trusted banking partners to simplify the process.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[420px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy4.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> All Essential Documents in One Place</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[48px] pb-[10px]">You’ll receive a complete set of company incorporation documents, securely stored and readily available from day one.</p>
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
                                    <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">Simple, Fast, and Affordable Company Formation</p>
                                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[10px] pt-[5px]">At CloudBSS, we make starting your business in the UK straightforward and stress-free. Whether you need just company registration or complete compliance and accounting support, we have you covered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row justify-center">
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4   ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Basic</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">Set up as a limited company and receive all legal paperwork</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£50</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">+ VAT</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium">
                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] ">
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold ">Setting up</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">  Company formation</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Live chat with an expert </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Exclusive offers from our Banking Partners</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Companies House fee included</p>
                                                </div>
                                            </div>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Documents</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Digital incorporation certificates</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Share Certificate</p>
                                                </div>
                                            </div>


                                        </p>
                                    </div>
                                    <hr className="border-2 border-[#B0B0B0]"></hr>


                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger><p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pl-[10px] pl-[5px]">Optional add-ons</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> Registered London office address</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£100/y</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> Manual document review</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£49</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> Confirmation Statement</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£100</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> PAYE registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> VAT registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> Accounting services</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">from £71/m</p>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                </div>
                            </div>

                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7] rounded-4 shadow-sm  ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4   ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">Register a limited company and get all compliance related to your incorporation</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£289</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">+ VAT</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >

                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px]">
                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-black font-medium">
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold ">Setting up</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">  Company formation</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Live chat with an expert </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Exclusive offers from our Banking Partners</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Companies House fee included</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE] ">Registered London office address</p>
                                                </div>
                                            </div>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Documents</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Digital incorporation certificates</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Share Certificate</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE]">Same-day document scanning</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE]">Manual document review</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE]">Confirmation Statement</p>
                                                </div>
                                            </div>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Beyond incorporation</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE]">Unlimited corporate changes</p>
                                                </div>
                                            </div>
                                        </p>





                                    </div>
                                    <hr className="border-2 border-[#B0B0B0]"></hr>

                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger><p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pl-[10px] pl-[5px]">Optional add-ons</p></AccordionTrigger>
                                            <AccordionContent>


                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> PAYE registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> VAT registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> Accounting services</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">from £71/m</p>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>



                                </div>

                            </div>

                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7] rounded-4 shadow-sm  ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4 shadow-sm  ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one for foreigners</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">Register a limited company as a non-UK resident</p>
                                        <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[3.5vw] leading-[6vw] font-medium m-0 p-0">£299</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">+ VAT</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div>
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[10px]">
                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-black font-medium">
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold ">Setting up</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">  Company formation</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Live chat with an expert </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Exclusive offers from our Banking Partners</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Companies House fee included</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE] ">Registered London office address</p>
                                                </div>
                                            </div>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Documents</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Digital incorporation certificates</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Share Certificate</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE]">Same-day document scanning</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE]">Manual document review</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE]">Confirmation Statement</p>
                                                </div>
                                            </div>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold lg:pt-[30px] pt-[20px]">Beyond incorporation</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE]">Unlimited corporate changes</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] text-[#0061FE]">VAT registration</p>
                                                </div>
                                            </div>
                                        </p>

                                    </div>
                                    <hr className="border-2 border-[#B0B0B0]"></hr>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger><p className="lg:text-[1vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-semibold lg:pl-[10px] pl-[5px]">Optional add-ons</p></AccordionTrigger>
                                            <AccordionContent>


                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> PAYE registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium lg:pl-[25px] pl-[5px]"> Accounting services</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-semibold text-[#767676] ">from £71/m</p>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                </div>
                            </div>



                        </div>

                    </div>
                </div>
                <div className="col-lg-12 lg:pt-[0px] pt-[20px]">
                    <div className="flex justify-center">
                        <Link href="/Companyregistrationprices" className="text-black">
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[40px] overflow-hidden lg:pb-[30px] pb-[15px] bg-[#CCDFFF]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="col-lg-5">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px] text-[#0061FE]">Kickstart your business with expert accounting services</p>
                                        <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[10px] pt-[5px] text-[#0061FE]">Streamline your company's financial admin right from the start with our accounting packages, starting at just £65/month.</p>


                                    </div>
                                    <button type="button" className="border border-dark text-[#0061FE] hover:bg-[#0061FE] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Get this offer</button>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <Image className="img-responsive w-full" src="/Images/copy5.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] overflow-hidden ">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[60px] sm:pb-[50px] pb-[10px] text-center ">
                        <div className="flex justify-center ">
                            <div className="col-lg-5">
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">HOW IT WORKS</p>
                                <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[3vw] leading-[6vw] font-bold">Registering Your Company in the UK
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 lg:pt-[80px] pt-[10px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-md-12">
                                    <Image className="img-responsive w-full" src="/Images/copy6.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Choose Your Company Name</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Your company name must be unique and comply with Companies House regulations. To avoid delays, ensure it follows the official naming guidelines.
                                        </p>
                                        <Link href="/companynamecheck" className="text-black">
                                            <button
                                                type="button"
                                                className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                                                <div className="flex gap-2 items-center">
                                                    <div>Check Your Company Name</div>
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
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="lg:px-[120px] px-[20px] overflow-hidden">
                <div className="row  justify-center ">
                    <div className="col-md-10 ">
                        <div className="lg:pt-[80px] pt-[60px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2">
                                    <div className="flex lg:justify">
                                        <div className="col-lg-9 ">
                                            <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Select Your SIC Code</p>
                                            <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Every business in the UK must have a Standard Industrial Classification (SIC) Code, which identifies your industry. This code helps define the rules and regulations that apply to your company.
                                            </p>

                                            <button
                                                type="button"
                                                className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                                                <div className="flex gap-2 items-center">
                                                    <div>Search for SIC Code</div>
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
                                            </button>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/copy7.png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] overflow-hidden ">
                <div className="row justify-center">

                    <div className="col-md-10 lg:pt-[80px] pt-[60px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-md-12">
                                    <Image className="img-responsive w-full" src="/Images/copy8.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9 ">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Prepare Your Documents</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Before registering, you’ll need:
                                            <ul className="list-disc list-outside">
                                                <li className="lg:pt-[20px] pt-[10px]">A passport copy and proof of address for all directors and shareholders.</li>
                                                <li className="lg:pt-[20px] pt-[10px]">A registered company address—use your home address or select our London-based office address for privacy.</li></ul>
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[120px] px-[20px] overflow-hidden">
                <div className="row  justify-center ">
                    <div className="col-md-10 ">
                        <div className="lg:pt-[80px] pt-[60px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[160px] pt-[20px]  order-lg-1 order-2">
                                    <div className="flex lg:justify">
                                        <div className="col-lg-9">
                                            <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Open a Business Bank Account</p>
                                            <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] "> A business bank account is essential for managing payments and invoices. We partner with trusted banking institutions to help you set up your account quickly and securely..
                                            </p>
                                            <Image className="img-responsive w-50" src="/Images/svg.svg" alt="logo" width={1830} height={750} />


                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/copy9.png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] overflow-hidden ">
                <div className="row justify-center">

                    <div className="col-md-10 lg:pt-[80px] pt-[60px] lg:pb-[80px] pb-[50px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-md-12">
                                    <Image className="img-responsive w-full" src="/Images/copy10.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9 ">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Submit Your Application</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">We handle the entire registration process for you. Our team will:
                                            <ul className="list-disc list-outside ">
                                                <li className="lg:pt-[20px] pt-[10px]" >Complete and submit your application to Companies House.</li>
                                                <li className="lg:pt-[20px] pt-[10px]">Provide your Digital Incorporation Certificate and official documents.</li>
                                                <li className="lg:pt-[20px] pt-[10px]">Ensure everything is fully compliant and ready to go.</li></ul>
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[60px] pb-[50px] overflow-hidden bg-[#F3EFE7]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-3 ">
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center">Why Choose CloudBSS?</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[30px] pb-[20px]">Register your company in three easy steps</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy11.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Choose your package</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161]">Pick the package that fits your current needs. Whether you only need company registration or additional services like accounting or compliance, you can always scale as your business grows.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy12.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Submit your details</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161]">We’ll guide you through the registration process, explaining exactly what information and documents we need from you while providing expert advice along the way.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy13.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Receive Your Confirmation</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161]">Once everything is submitted, we’ll handle the paperwork. You’ll receive your Certificate of Incorporation and all the necessary documents to get your business officially registered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[40px] overflow-hidden lg:pb-[30px] pb-[15px] bg-[#CCDFFF]">
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
                                        <div className="lg:pt-[0px] pt-[15px]">
                                            <button type="button" className="border border-dark text-[#0061FE] hover:bg-[#0061FE] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Download</button>
                                        </div>
                                    </div>

                                </div>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[20px] font-medium text-[#0061FE]">By clicking, you agree to our<span className="underline">Terms & Conditions,Privacy and Data Protection Policy</span></p>
                            </div>
                            <div className="col-lg-3">
                                <Image className="img-responsive w-full " src="/Images/copy14.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-3 ">
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center">COMPANY FORMATION DOCUMENTS</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[30px] pb-[20px]">What You Get When You Register with CloudBSS</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="flex justify-center">
                                <div className="col-lg-9">
                                    <div className="row">


                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1">
                                                <div className="col-lg-12 mb-4">
                                                    <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                        <AccordionTrigger> <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium p-0 m-0" >Digital Certificate of Incorporation</p></AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] lg:pt-[20px] pt-[10px]">
                                                                        This document provides details about your limited company and verifies its legal ability to operate in the UK. It contains the following information:
                                                                        <ul className="list-disc list-outside ">
                                                                            <li className="lg:pt-[20px] pt-[10px]" >The registered name of the company</li>
                                                                            <li className="lg:pt-[20px] pt-[10px]">The company registration number</li>
                                                                            <li className="lg:pt-[20px] pt-[10px]">The location of company registration (England and Wales, Scotland, or Northern Ireland)</li>
                                                                            <li className="lg:pt-[20px] pt-[10px]" > The date of incorporation</li></ul></p>

                                                                </div>
                                                                <div className="col-lg-4 justify-center ">
                                                                    <Image className="img-responsive w-80 " src="/Images/new.png" alt="logo" width={1830} height={750} />
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </div>
                                                </div>
                                            </AccordionItem>





                                            <AccordionItem value="item-2">
                                                <div className="col-lg-12 mb-4">
                                                    <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                        <AccordionTrigger>  <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium p-0 m-0" >Digital Statutory forms</p></AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] lg:pt-[20px] pt-[10px]">
                                                                        These forms include details about the directors, secretaries, and members of the limited company.</p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] lg:pt-[20px] pt-[10px]">Any form submitted to Companies House becomes part of the public record. As a result, the information, including personal data, will be accessible to the public unless it is deemed sensitive or restricted.</p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] lg:pt-[20px] pt-[10px]">It’s essential to ensure these statutory forms are kept current.</p>

                                                                </div>
                                                                <div className="col-lg-4 justify-center ">
                                                                    <Image className="img-responsive w-80 " src="/Images/new.png" alt="logo" width={1830} height={750} />
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </div>
                                                </div>
                                            </AccordionItem>





                                            <AccordionItem value="item-3">
                                                <div className="col-lg-12 mb-4">
                                                    <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                        <AccordionTrigger>   <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium p-0 m-0" >Articles of Association</p></AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] lg:pt-[20px] pt-[10px]">The Articles of Association are formal regulations that govern the operation of a company. They are agreed upon by shareholders or guarantors, directors, and the company secretary. </p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] lg:pt-[20px] pt-[10px]">Every limited company is required to have Articles of Association upon registration. Companies can either draft their own customized Articles of Association or adopt the standard model provided by the UK government, which serves as the default set of rules.</p>

                                                                </div>
                                                                <div className="col-lg-4 justify-center ">
                                                                    <Image className="img-responsive w-80 " src="/Images/new.png" alt="logo" width={1830} height={750} />
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </div>
                                                </div>
                                            </AccordionItem>





                                            <AccordionItem value="item-4">
                                                <div className="col-lg-12 mb-4">
                                                    <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                        <AccordionTrigger>  <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium p-0 m-0" >Business Bank Account Assistance</p></AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] lg:pt-[20px] pt-[10px]">
                                                                        Opening a business bank account enables you to manage financial transactions under your company's name, with features designed specifically for business operations.</p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] lg:pt-[20px] pt-[10px]">For limited companies, having a business account is a legal requirement and helps maintain a clear separation between personal and company finances, which is beneficial for tax purposes.</p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] lg:pt-[20px] pt-[10px]">This type of account is exclusively used for business activities and functions independently from personal finances.
                                                                    </p>

                                                                </div>
                                                                <div className="col-lg-4 justify-center ">
                                                                    <Image className="img-responsive w-80 " src="/Images/new.png" alt="logo" width={1830} height={750} />
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
                    </div>
                </div>
            </section >

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[50px] overflow-hidden bg-[#F3EFE7]">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="lg:text-[2.5vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[20px] pb-[10px]">Frequently Asked Questions</p>
                        <p className="font-medium underline lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center lg:pb-[20px] pb-[10px]"> More FAQs</p>

                    </div>
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-9 ">

                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <div className="col-lg-12 mb-4">
                                        <div className="block  p-6 bg-white border border-white rounded-4  m-0  ">
                                            <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Where can I register my company?</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="lg:flex justify-between">
                                                    <div className="col-lg-12">

                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  rounded-4 ">


                                                            You can register your company with Companies House, the UK government department responsible for company registration. CloudBSS simplifies the process by managing everything for you, ensuring all documents are submitted correctly and efficiently.</p>

                                                    </div>

                                                </div>
                                            </AccordionContent>
                                        </div>
                                    </div>
                                </AccordionItem>





                                <AccordionItem value="item-2">
                                    <div className="col-lg-12 mb-4">
                                        <div className="block  p-6 bg-white border border-white rounded-4   ">
                                            <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How long does it take to register my company?</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="lg:flex justify-between">
                                                    <div className="col-lg-12">

                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">
                                                            The registration process can be completed within a few hours if all documents are in order. Typically, you will receive your Certificate of Incorporation within 24 hours after submission to Companies House.</p>

                                                    </div>

                                                </div>
                                            </AccordionContent>
                                        </div>
                                    </div>
                                </AccordionItem>




                                <AccordionItem value="item-3">
                                    <div className="col-lg-12 mb-4">
                                        <div className="block  p-6 bg-white border border-white rounded-4   ">

                                            <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">Do I need to be a UK resident to register a company?</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="lg:flex justify-between">
                                                    <div className="col-lg-12">

                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] "> No, you don’t need to be a UK resident to register a company. However, you must have at least one director and a registered office address in the UK. CloudBSS can provide you with a registered office address if needed.
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

                                            <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How do I choose a company name?</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="lg:flex justify-between">
                                                    <div className="col-lg-12">

                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Your company name must be unique and comply with Companies House naming rules. We provide a name-checking tool to ensure your name is available and meets legal requirements.
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

                                            <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What documents do I need to provide for company registration?</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="lg:flex justify-between">
                                                    <div className="col-lg-12">

                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  "> You’ll need:
                                                            <ul className="list-disc list-outside ">
                                                                <li className="lg:pt-[20px] pt-[10px]" >Passport copies and proof of address for directors and shareholders.</li>
                                                                <li className="lg:pt-[20px] pt-[10px]">A company address (either your home address or a registered office address via CloudBSS).</li>
                                                            </ul></p>

                                                    </div>

                                                </div>
                                            </AccordionContent>
                                        </div>
                                    </div>
                                </AccordionItem>




                                <AccordionItem value="item-6">
                                    <div className="col-lg-12 mb-4">
                                        <div className="block  p-6 bg-white border border-white rounded-4   ">

                                            <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">Can I change my company name after registration?</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="lg:flex justify-between">
                                                    <div className="col-lg-12">

                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  "> Yes, you can change your company name after registration. We offer unlimited corporate changes as part of our premium package.
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

                                            <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What is an SIC code, and why is it needed?</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="lg:flex justify-between">
                                                    <div className="col-lg-12">

                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">The Standard Industrial Classification (SIC) code defines your company’s primary business activity. It’s required during registration to ensure your business is classified correctly under UK law.</p>

                                                    </div>

                                                </div>
                                            </AccordionContent>
                                        </div>
                                    </div>
                                </AccordionItem>




                                <AccordionItem value="item-8">
                                    <div className="col-lg-12 mb-4">
                                        <div className="block  p-6 bg-white border border-white rounded-4   ">
                                           
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Do I need a business bank account?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] ">Yes, you need a business bank account to handle payments and manage finances. We offer assistance in setting up a business account with trusted UK banking partners.</p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                        </div>
                                    </div>
                                </AccordionItem>




                                <AccordionItem value="item-9">
                                    <div className="col-lg-12 mb-4">
                                        <div className="block  p-6 bg-white border border-white rounded-4   ">

                                            <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What happens after I register my company?</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="lg:flex justify-between">
                                                    <div className="col-lg-12">

                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Once registered, you will receive your official Certificate of Incorporation, Articles of Association, and other essential documents. You’ll also be able to start trading and managing your business legally.
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

                                            <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">Can I get help with taxes and accounting?</p></AccordionTrigger>
                                            <AccordionContent>
                                                <div className="lg:flex justify-between">
                                                    <div className="col-lg-12">

                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Yes, CloudBSS provides comprehensive accounting services to ensure your company remains compliant with tax and financial regulations. Our team is here to guide you through everything, from bookkeeping to tax filings.
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