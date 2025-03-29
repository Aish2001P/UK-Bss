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
                                    <p className="font-semibold lg:text-[3vw] text-[4.5vw] lg:leading-[3.5vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">Accounting plans to fit your business</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        Cloud BSS accounting packages are tailored to your business stage and financial year revenue. Not sure which plan to choose? This breakdown should help you select the one just right for you. Choose extra add-ons according to your operational needs.</p>
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
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4  lg:h-[350px] ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Operate</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">For business owners who want to ensure they tick all basic compliance boxes as they grow</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium m-0 p-0 ">from</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0 ">£71/m</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">£850 billed annually, per financial year + VAT</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4 lg:h-[350px]  ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one for residents</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pb-[25px] pb-[10px]">Register a limited company and get all needed compliance</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium m-0 p-0 ">from</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£137/m</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] "> £1,640 billed annually, per financial year + VAT</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7]  rounded-4   ">
                                    <div className="block  p-6 bg-[#FFFDFA]  rounded-4 lg:h-[350px]  ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one for foreigners</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pb-[25px] pb-[10px] ">Register a limited company as a non-UK resident</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium m-0 p-0 ">from</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£224</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] "> £2,690 billed annually, per financial year + VAT</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center items-center ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center">
                                    <div className="col-lg-10">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Financial software</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Create, send and chase invoices</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Capture bills and receipts easily</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Pay bills in one click</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Reimburse expenses</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Connect your banks</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Use multiple currencies</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Connect ecommerce marketplaces</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[500px] items-center ">
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
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[500px] items-center ">
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
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[500px] items-center ">
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
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Bookkeeping</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Unlimited bookkeeping</p>

                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Automatic reconciliations</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[150px] items-center ">
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


                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center items-center p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[150px]  ">
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

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center items-center  p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[150px]  ">
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

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center items-center ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center">
                                    <div className="col-lg-10">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Expert service</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Initial consultation with a tax expert</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">In-app chat</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Tax advice on payroll and dividends</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Video calls with an expert</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Business review with accountant</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Ad-hoc tax advice</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Dedicated accountant</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Senior dedicated accountant</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[550px] items-center ">
                                    <div >
                                        <div className="lg:pt-[30px] pt-[10px] justify-center " >
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
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£100/h</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">Annually</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#000000" viewBox="0 0 100 100" id="subtract">
                                                <path d="M95 50c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2s.9-2 2-2h86c1.1 0 2 .9 2 2z"></path>
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#000000" viewBox="0 0 100 100" id="subtract">
                                                <path d="M95 50c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2s.9-2 2-2h86c1.1 0 2 .9 2 2z"></path>
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#000000" viewBox="0 0 100 100" id="subtract">
                                                <path d="M95 50c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2s.9-2 2-2h86c1.1 0 2 .9 2 2z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center items-center p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[550px]  ">
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
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">Monthly</p>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#000000" viewBox="0 0 100 100" id="subtract">
                                                <path d="M95 50c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2s.9-2 2-2h86c1.1 0 2 .9 2 2z"></path>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center items-center p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[550px]  ">
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
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">Monthly</p>
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
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Payroll</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">PAYE registration</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">1st Director Payroll</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Full payroll</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Additional Full payroll, per employee</p>


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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="#000000" viewBox="0 0 100 100" id="subtract">
                                                <path d="M95 50c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2s.9-2 2-2h86c1.1 0 2 .9 2 2z"></path>
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£10/m</p>
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
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">5 employees</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£10/m</p>
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
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">10 employees</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£10/m</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center items-center ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center">
                                    <div className="col-lg-10">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Company admin</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Unlimited corporate changes</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Registered London office address</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Professional references</p>

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[250px] items-center ">
                                    <div >

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="" color="#000000" fill="none">
                                                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£100/y</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£100</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center items-center p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[250px]  ">
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
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£100</p>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center items-center  p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[250px]  ">
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


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-center items-center ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center">
                                    <div className="col-lg-10">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Historical work</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Catch-up bookkeeping</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Urgency filing</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Historical annual filing and bookkeeping</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161] lg:pt-[20px] pt-[10px]">Historical VAT filing, per report</p>

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center p-1 bg-[#F3EFE7]  rounded-4   lg:h-[280px] items-center ">
                                    <div className="items-center justify-center">
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£85/m</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£200</p>
                                        </div>

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">680/y</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£150</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className=" flex justify-center items-center p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[280px]  ">
                                    <div className="items-center justify-center">
                                    <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£164/m</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£200</p>
                                        </div>

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">680/y</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£150</p>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="flex justify-center items-center  p-1 bg-[#F3EFE7]  rounded-4  lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] lg:h-[280px]  ">
                                    <div className="items-center justify-center">
                                    <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£269/m</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£200</p>
                                        </div>

                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">680/y</p>
                                        </div>
                                        <div className="lg:pt-[30px] pt-[10px] " >
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] font-medium p-0 m-0">£150</p>
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