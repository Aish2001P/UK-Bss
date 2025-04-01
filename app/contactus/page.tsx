"use client"
import Image from "next/image";
import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Home() {
    //accordion code
    const [isPlus, setIsPlus] = useState(true);

    const toggleIcon = () => {
        setIsPlus((prev) => !prev);
    };
    return (
        <>
            <Header />
            <section className="lg:px-[80px] px-[20px] lg:pt-[120px] pt-[80px] overflow-hidden  bg-[#f3efe7]">

                <div className="row">
                    <div className="col-lg-12 ">



                        <div className="lg:pb-[60px] pb-[30px] text-center">

                            <p className="lg:text-[3vw] text-[6vw] lg:leading-[3vw] leading-[5vw] font-bold lg:pt-[30px] pt-[20px]">Contact Us</p>
                            <div className="flex  justify-center">
                                <div className="col-lg-6 ">
                                    <p className="lg:text-[1vw] text-[3vw] text-[#212833]  text-center lg:leading-[1.5vw] leading-[4vw] lg:pt-[8px] pt-[5px]">Contact us for all your queries. From explaining the difference between bookkeeping and accounting, starting a business in Madagascar, to recommending the business books our CEO loves – we've got the answers.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section >
            <section className="lg:px-[80px] px-[20px] overflow-hidden lg:pb-[60px] pb-[30px] bg-[#f3efe7]">
                <div className="row justify-center">
                    <div className="col-lg-8">
                        <form>
                            <div className="row mb-4">
                                <div className="col-lg-6 mb-4">
                                    <input type="email" id="email" className="border bg-white rounded-sm !w-full p-2 h-9 " placeholder="*Your Name" required />
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <input type="email" id="email" className="border bg-white rounded-sm !w-full h-9 p-2" placeholder="Your Email*" required />
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <PhoneInput
                                        country={"in"}


                                        inputClass=" border border-gray-300 rounded-lg !p-3 !w-full  outline-none "
                                        placeholder="Enter your phone number"
                                        specialLabel="Phone Number"



                                    />
                                </div>
                                <div className="col-lg-6 mb-4">


                                    <select
                                        name="interest"
                                        className="border border-gray-300  form-select outline-none"

                                    >
                                        <option value="" hidden>Interested in*</option>

                                        <option value="Consulting">Consulting</option>
                                        <option value="Accounting">Accounting</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <textarea id="message" className="border form-control rounded-r-lg w-full  " placeholder="How Can We Help?*"
                                        rows={6} ></textarea>
                                </div>

                            </div>
                            <div className="flex justify-center mb-4">
                            <div className="lg:pb-[0px] pb-[10px] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]" >
                                <button type="button" className=" border border-dark bg-[#000] text-[#fff]  !rounded-md font-medium text-sm px-4  py-3 text-center items-center ">Send Your Message</button>
                            </div>
                            </div>
                        
                            <div className="flex justify-center">
                                <div className="col-lg-5">
                                    <p className="lg:text-[0.8vw] text-[3vw] text-[#212833]  text-center lg:leading-[1vw] leading-[4vw] lg:pt-[8px] pt-[5px]">By clicking, you agree to our<span className="font-medium underline">Terms & Conditions, Privacy and Data Protection Policy</span>
                                    </p>
                                </div>
                            </div>


                        </form>

                    </div>
                </div>




                <div className="flex justify-center items-center">
                    <div className="col-lg-5">
                        <form className="">

                        </form></div></div>


            </section >
            <section className=" overflow-hidden  bg-[#FFF]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9581906.28187281!2d-15.002409269120564!3d54.10330769454136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sin!4v1742809679316!5m2!1sen!2sin" width="1920" height="900" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </section>
            <Footer />
        </>
    )
};