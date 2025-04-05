import Image from "next/image";
import Header from "../Component/header";
import Footer from "../Component/footer";

export default function Home() {


    return (
        < >

            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[20px] pb-[20px]">

                            <div className="flex justify-center">
                                <div className="col-lg-5 ">
                                    <p className="font-semibold lg:text-[3vw] text-[4.5vw] lg:leading-[3.5vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">Company registration plans to fit your business</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        The cost to register a company with Cloud Bss depends on what you need. Not sure which plan to choose? This breakdown should help you select the one just right for you.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] overflow-hidden lg:pb-[60px] pb-[50px] bg-[#FFF]">

                <div className="row ">

                    <div className="col-lg-12 ">
                        <div className="row justify-end">
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className=" p-6 bg-[#FFFDFA]  rounded-4 flex-1 h-full  ">
                                        <div className="lg:h-[250px] overflow-hidden">
                                            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Basic for residents</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161]">Set up as a limited company and receive all legal paperwork</p>

                                            <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£50</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3.5vw]  text-[#616161] font-bold"> + VAT</p>
                                        </div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">

                                    <div className=" p-6 bg-[#FFFDFA]  rounded-4 flex-1 h-full  ">
                                        <div className="lg:h-[250px] overflow-hidden">
                                            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one for residents</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161]">Register a limited company and get all needed compliance</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[0vw] leading-[3.5vw]  text-[#000] font-medium line-through lg:pt-[10px] pt-[5px]">£299</p>
                                            <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£289</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3.5vw]  text-[#616161] font-bold">+ VAT</p>
                                        </div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >

                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                <div className=" p-6 bg-[#FFFDFA]  rounded-4 flex-1 h-full  ">
                                        <div className="lg:h-[250px] overflow-hidden">
                                            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one for foreigners</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161]">Register a limited company as a non-UK resident</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[0vw] leading-[3.5vw]  text-[#000] font-medium line-through lg:pt-[10px] pt-[5px]">£349</p>
                                            <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£299</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3.5vw]  text-[#616161] font-bold">+ VAT</p>
                                        </div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                   
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center items-center ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center">
                                    <div className="col-lg-10">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Setting up</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] font-[500]  text-[#616161] lg:pt-[20px] pt-[10px]">Company formation , including £50 Companies House fee</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] font-[500] text-[#616161] lg:pt-[20px] pt-[10px]">Live chat with an expert</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] font-[500] text-[#616161] lg:pt-[20px] pt-[10px]">Registered London office address</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] font-[500] text-[#616161] lg:pt-[20px] pt-[10px]">Exclusive offers from our Banking Partners</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[350px] items-center ">
                                    <div >

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-[500] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">£100/y</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center items-center p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[350px]  ">
                                    <div className="items-center justify-center">


                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-[500] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">1 Year</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center items-center  p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[350px]  ">
                                    <div className="items-center justify-center">

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-[500] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">1 Year</p>
                                        </div>

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-center items-center ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center">
                                    <div className="col-lg-10">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Documents</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] font-[500] text-[#616161] lg:pt-[20px] pt-[10px]">Digital incorporation certificates</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] font-[500] text-[#616161] lg:pt-[20px] pt-[10px]">Share Certificate</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] font-[500] text-[#616161] lg:pt-[20px] pt-[10px]">Same-day document scanning</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] font-[500] text-[#616161] lg:pt-[20px] pt-[10px]">Manual document review</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] font-[500] text-[#616161] lg:pt-[20px] pt-[10px]">Confirmation Statement</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[400px] items-center ">
                                    <div >

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >

                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#000000" viewBox="0 0 100 100" id="subtract">
                                                <path d="M95 50c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2s.9-2 2-2h86c1.1 0 2 .9 2 2z"></path>
                                            </svg>

                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]   p-0 m-0">£49</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">£100</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center items-center p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[400px]  ">
                                    <div className="items-center justify-center">


                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center items-center  p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[400px]  ">
                                    <div className="items-center justify-center">

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center items-center ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center">
                                    <div className="col-lg-10">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Beyond incorporation</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] text-[#616161] font-[500] lg:pt-[20px] pt-[10px]">Unlimited corporate changes</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] text-[#616161] font-[500] lg:pt-[20px] pt-[10px]">VAT registration</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw] text-[#616161] font-[500] lg:pt-[20px] pt-[10px]">Accounting services</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[250px] items-center ">
                                    <div >
                                        <div className="lg:pt-[30px] pt-[10px] justify-center" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#000000" viewBox="0 0 100 100" id="subtract">
                                                <path d="M95 50c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2s.9-2 2-2h86c1.1 0 2 .9 2 2z"></path>
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£50</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw]  text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">from £71/m</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center items-center p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[250px]  ">
                                    <div className="items-center justify-center">
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">1 Year</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">£50</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">from £71/m</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center items-center  p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[250px]  ">
                                    <div className="items-center justify-center">
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">1 Year</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">from £71/m</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center items-center ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center">
                                    <div className="col-lg-10">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium  lg:pt-[10px] pt-[5px]">Additional services</p>
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161] font-[500] lg:pt-[20px] pt-[10px]">PAYE registration</p>

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[150px] items-center ">
                                    <div >

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">£50</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center items-center p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[150px]  ">
                                    <div className="items-center justify-center">

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">£50</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center items-center  p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[150px]  ">
                                    <div className="items-center justify-center">
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] font-medium text-[3vw] lg:leading-[1.3vw] leading-[4vw]  p-0 m-0">£50</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

            </section >

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[30px] overflow-hidden lg:pb-[50px] pb-[30px] bg-[#CCDFFF]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="col-lg-5">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#0061FE]">Kickstart your business with expert accounting services</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#0061FE]">Streamline your company's financial admin right from the start with our accounting packages, starting at just £65/month.</p>


                                    </div>


                                    <div className="lg:pt-[0px] pt-[15px]">
                                        <button type="button" className="border border-dark text-[#0061FE] hover:bg-[#0061FE] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Get this offer</button>
                                    </div>



                                </div>

                            </div>
                            <div className="col-lg-3">
                                <Image className="img-responsive w-full " src="/Images/copy14.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}