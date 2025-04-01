"use client"
import Image from "next/image";
import Header from "../Component/header";
import Footer from "../Component/footer";
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
        < >

            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[100px] pb-[50px]">

                            <div className="flex justify-center">
                                <div className="col-lg-4 ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">Streamlined Online Invoicing</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        Effortlessly manage your cash flow by creating and sending invoices in no time, ensuring faster payments and providing a clear overview of your business’s incoming funds.</p>

                                    <div className=" lg:flex gap-4 lg:pb-[60px] pb-[50px] justify-center items-center ">
                                        <div className="lg:pb-[0px] pb-[10px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm sm: w-full px-5 py-2 text-center items-center">Get Started</button>
                                        </div>
                                        <div >
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 sm: w-full text-center items-center">Watch a demo</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="col-lg-8">
                                    <Image className="img-responsive w-full " src="/Images/5.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] bg-[#F3EFE7] ">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[50px] sm:pb-[50px] pb-[10px] text-center ">
                        <div className="flex justify-center ">
                            <div className="col-lg-5">
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">INVOICING FEATURES</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold">Take full control of your finances and get paid faster with smooth invoicing processes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 lg:pt-[80px] pt-[10px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-lg-12">
                                    <Image className="img-responsive w-full" src="/Images/image 1.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9">
                                        <p className="text-[#010202]  lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold">Faster Payments with PayPal</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] "> Generate invoices and offer a secure payment method for your customers. With PayPal integrated, customers can pay using credit or debit cards, without the need for a PayPal account.
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
                        <div className="lg:pt-[80px] pt-[30px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2 ">
                                    <div className="col-lg-9 justify-start">
                                        <p className="text-[#010202] lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold ">Stay on Top of Finances
                                        </p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] "> Your dashboard provides a quick summary of all your invoices—highlighting what’s due, overdue, and paid—keeping you organised and confident about your finances.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/image 2.png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[120px] px-[20px] overflow-hidden bg-[#F3EFE7] ">
                <div className="row  justify-center ">
                    <div className="col-lg-10 lg:pt-[80px] pt-[30px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-lg-12">
                                    <Image className="img-responsive w-full" src="/Images/image 3.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9">
                                        <p className="text-[#010202]   lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold "> Speed Up Invoicing</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] ">Easily set up invoice templates, save customer details, and send invoices quickly to clients with minimal effort.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[120px] px-[20px] overflow-hidden lg:pb-[70px] pb-[40px] bg-[#F3EFE7]">
                <div className="row  justify-center ">
                    <div className="col-lg-10 ">
                        <div className="lg:pt-[80px] pt-[30px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2 ">
                                    <div className="col-lg-9 justify-start">
                                        <p className="text-[#010202]  lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold  ">Automatic Tax Reporting
                                        </p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] "> Our app automatically tracks your transactions, applies the correct tax codes, and prepares your tax records, ensuring compliance and giving you more time to focus on growing your business.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/image 2.png" alt="logo" width={1830} height={750} />
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
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[30px] pb-[20px]">What You Get with CloudBSS</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[450px]">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/comp1.svg" alt="logo" width={1830} height={750} />
                                    </div>

                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Integrations</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[20px] pb-[20px]">Effortlessly connect your sales platforms and bank accounts to access real-time data, returns, and fees. This gives you the insights needed to make informed, smarter business decisions.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>

                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy2.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Accounting</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Your dedicated accountant will fully understand your business, helping you manage taxes, VAT reports, and more, ensuring your finances are always in order.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#F3EFE7] border  rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy3.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Ecommerce</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[20px] pb-[20px]">Automate your bookkeeping across all sales platforms, relying on an expert accountant who specialises in ecommerce to keep your financials on track.</p>
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
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Reporting</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Get clear and actionable insights into how your business is performing. This allows you to take steps to improve and increase profitability.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy4.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Expenses</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[70px] pb-[20px]">Keep track of your expenses and ensure compliance when reporting your personal expenditures.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>

                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy2.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Payments</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[70px] pb-[20px]">Track bills and receipts, and gain full control over due dates and payments.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="lg:px-[100px] px-[20px]  overflow-hidden bg-[#F3EFE7]">
                <div className="row justify-center">

                    <div className="col-lg-5 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[50px] sm:pb-[50px] pb-[10px] text-center ">
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[50px] overflow-hidden bg-[#FFF]">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="lg:text-[2.5vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[20px] pb-[10px]">Frequently Asked Questions</p>
                        <p className="font-medium underline lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center :pb-[20px] pb-[10px]"> More FAQs</p>

                    </div>
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-9">

                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">What is Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  rounded-4 ">Cloud BSS is a comprehensive platform offering tailored financial management tools, accounting services, and expert advice designed to help small businesses streamline their financial processes, stay compliant, and maximize growth.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>




                                    <AccordionItem value="item-2">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">How does Cloud BSS help with company registration?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">
                                                                We provide an effortless online company formation service, handling everything from company registration with Companies House to providing key documents and expert guidance. We also offer advice on structuring your company for future growth.
                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>



                                    <AccordionItem value="item-3">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0  ">What are the benefits of using Cloud BSS for bookkeeping?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] ">Cloud BSS includes unlimited bookkeeping in your plan. Our software automatically matches transactions, helps prepare tax records, and ensures compliance, while your dedicated accountant is always available to offer expert guidance.


                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>


                                    <AccordionItem value="item-4">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">Can Cloud BSS handle VAT and tax filings?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Yes! We track tax deadlines, manage VAT filings, and ensure you’re paying the right amount of tax. Your accountant will handle all the required filings, saving you time and minimising the risk of penalties.


                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>



                                    <AccordionItem value="item-5">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">What platforms can Cloud BSS integrate with for ecommerce?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">Cloud BSS integrates with major ecommerce platforms like Amazon, Shopify, and eBay, as well as payment gateways like PayPal and Stripe. These integrations automate your bookkeeping and ensure all your financial data stays in sync.


                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>


                                    <AccordionItem value="item-6">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0  ">How does Cloud BSS support property owners and landlords?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">We specialise in property accounting, providing support to buy-to-let landlords, property developers, property flippers, and serviced accommodation owners. We help optimize tax deductions, ensure compliance, and manage property-specific finances.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>


                                    <AccordionItem value="item-7">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">How do I contact Cloud BSS for support?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">You can contact us at any time via live chat or phone. Our dedicated accountants are available to answer your questions and provide personalised guidance for your business.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>



                                    <AccordionItem value="item-8">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">Can Cloud BSS help me understand and manage my cash flow?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] ">Absolutely! Our software provides a real-time snapshot of your cash flow, allowing you to stay on top of your finances and make more informed decisions. Your dedicated accountant will always be available to offer advice based on this data.

                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>




                                    <AccordionItem value="item-9">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4  shadow-md ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">How does Cloud BSS help with cash flow?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] ">Our pricing plans are flexible and customizable to fit your needs. Whether you’re just starting or running an established business, you can choose a plan that suits your stage. All plans include bookkeeping, tax filing, and expert accounting support.

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