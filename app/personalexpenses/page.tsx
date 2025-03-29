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
        < >

            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[100px] pb-[50px]">

                            <div className="flex justify-center">
                                <div className="col-lg-5 ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">Effortlessly report your personal expenses.</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        Manage your personal expenses effortlessly and ensure compliance with Cloud BSS. Upload receipts, categorize your spending, and see your deductions accumulate.</p>

                                    <div className=" lg:flex gap-4 lg:pb-[60px] pb-[50px] justify-center items-center ">
                                        <div className="lg:pb-[0px] pb-[10px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] sm: w-full font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Get Started</button>
                                        </div>
                                        <div>
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2  sm: w-full text-center items-center">Watch a demo</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="col-lg-8">
                                    <Image className="img-responsive w-full " src="/Images/8.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] bg-[#F3EFE7] ">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[70px] pt-[40px] sm:pb-[10px] pb-[10px] text-center ">
                        <div className="flex justify-center ">
                            <div className="col-lg-5">
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">EXPENSES FEATURES</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold">Take complete control of your business finances.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 lg:pt-[80px] pt-[10px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-md-12">
                                    <Image className="img-responsive w-full" src="/Images/8(1).png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[70px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-8">
                                        <p className="text-[#010202]   lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold ">Submit your receipts effortlessly.</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] ">Simply drag and drop your receipts to upload them instantly to your Cloud BSS account. They’ll be processed directly into accounting, allowing you to track their status anytime.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="lg:px-[120px] px-[20px] overflow-hidden bg-[#F3EFE7] ">
                <div className="row  justify-center ">
                    <div className="col-md-10 ">
                        <div className="lg:pt-[80px] pt-[30px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[90px] pt-[20px] order-lg-1 order-2 ">
                                    <div className="col-lg-8 justify-start">
                                        <p className="text-[#010202]  lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold ">Categorize your expenses.
                                        </p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] ">Was that client brunch a business expense? Categorize your spending to gain insights into your finances and determine what qualifies as a claimable expense.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/8(2).png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] bg-[#F3EFE7] lg:pb-[70px] pb-[20px]">
                <div className="row justify-center">

                    <div className="col-md-10 lg:pt-[80px] pt-[30px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-md-12">
                                    <Image className="img-responsive w-full" src="/Images/8(3).png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[80px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-8">
                                        <p className="text-[#010202]   lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold ">Maximize your returns while staying compliant.</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] ">Reviewed by our expert accountants, ensuring you secure maximum returns and tax deductions while staying fully compliant.
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
                        <div className="row items-end">
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-5 ">
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[30px] pb-[20px]">What You Get With Cloud BSS</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[450px]">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/comp1.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div>
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Integrations</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[20px] pb-[20px]">Easily connect all your marketplaces and bank accounts to receive real-time updates on sales, returns, and fees, empowering you to make smarter, data-driven decisions.</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy2.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Accounting</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[20px] pb-[20px]">A dedicated accountant will get to know your business inside and out, providing support for taxes, VAT reports, and more, ensuring your finances are always in order.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#F3EFE7] border  rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy3.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Ecommerce</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[20px] pb-[20px]">Automate bookkeeping from your various sales platforms and rely on an expert accountant who understands the specific needs of ecommerce businesses.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row justify-center">
                        <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy4.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Reporting</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Stay informed with clear, actionable reports. Make better business decisions and improve profitability with real-time insights.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy2.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Invoices</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Gain insights into your cash flow, create and send invoices effortlessly, and use tools to get paid faster while tracking your business finances.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy4.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Payments</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[70px] pb-[20px]">Keep track of your expenses and ensure compliance when reporting your personal expenditures.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>
                            

                            
                        </div>
                    </div>
                </div>

            </section>

            <section className="lg:px-[100px] px-[20px]  overflow-hidden bg-[#F3EFE7]">
                <div className="row justify-center">

                    <div className="col-md-5 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[50px] sm:pb-[50px] pb-[10px] text-center ">
                        <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">WHY CHOOSE US</p>
                        <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold">From founding to filing and beyond, we’re with you
                        </p>
                    </div>
                    <div className="col-lg-10 ">
                        <div className="lg:pb-[90px] pb-[70px]">
                            <div className="row ">
                                <div className="col-lg-6">
                                    <div className="col-lg-12 mb-4 ">
                                        <Image className="img-responsive w-full rounded-5" src="/Images/image 4.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-10 lg:pb-[0px] pb-[30px]">
                                        <p className="lg:text-[2vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold lg:pb-[15px] pb-[5px] lg:pt-[30px] pt-[10px] ">Accountants Who Understand UK Business</p>
                                        <p className="text-[#353535] lg:text-[1.1vw] text-[3.5vw] lg:leading-[1.5vw] leading-[4.5vw]  sm:pb-[15px] pb-[5px] ">Our UK-based accountants are experts in local tax laws, deadlines, and financial best practices. We work alongside you to streamline your finances and support your business growth.</p>

                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center ">Schedule a Call</button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="col-lg-12 mb-4 lg:pt-[0px] pt-[20px]">
                                        <Image className="img-responsive w-full rounded-5" src="/Images/image 5.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="col-lg-11">
                                        <p className="lg:text-[2vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold lg:pb-[15px] pb-[5px] sm:pt-[30px] pt-[10px] ">Intelligent Software for Seamless Financial Management</p>
                                        <p className="text-[#353535] lg:text-[1.1vw] text-[3.5vw] lg:leading-[1.5vw] leading-[4vw] sm:pb-[15px] pb-[5px] ">  Our tailored software makes bookkeeping, invoicing, and tax filing effortless. Keep all your financial data in one place, with real-time updates, so you can stay focused on growing your business.</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn More</button>
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