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
                        <div className="lg:pb-[100px] pb-[30px]">

                            <div className="flex justify-center">
                                <div className="col-lg-4 ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">Ecommerce Insights at Your Fingertips</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        Gain complete visibility into your online business performance by connecting your marketplaces and bank accounts. With Cloud BSS, you can easily track real-time sales, returns, and fees, empowering you to make smarter, more informed business decisions.</p>

                                    <div className=" lg:flex gap-4 lg:pb-[60px] pb-[50px] justify-center items-center ">
                                        <div className="lg:pb-[0px] pb-[20px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-5 py-2 text-center items-center">Get Started</button>
                                        </div>
                                        <div >
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-5 py-2 text-center items-center">Watch a demo</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="col-lg-8">
                                    <Image className="img-responsive w-full " src="/Images/6.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] bg-[#FFF] ">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[40px] sm:pb-[50px] pb-[10px]  ">
                        <div className="flex justify-center ">
                            <div className="col-lg-5">
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center">ECOMMERCE INTEGRATIONS</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold text-center lg:pb-[30px] pb-[20px]">An accounting and tax solution designed specifically for eCommerce sellers.
                                </p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[580px]  ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/6(1).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  "> Shopify</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium text-[#616161] ">Integrated platform</p>

                                    <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                        <ul className="list-disc list-outside ">
                                            <li className="lg:pt-[20px] pt-[10px]" >Fully automated accounting</li>
                                            <li className="lg:pt-[20px] pt-[10px]">Bulk transaction reconciliation</li>
                                            <li className="lg:pt-[20px] pt-[10px]">Real-time financial reports</li>
                                            <li className="lg:pt-[20px] pt-[10px]">Shopify accounting expert</li></ul>
                                    </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[580px]  ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/6(2).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  "> eBay</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium text-[#616161] ">Integrated platform</p>

                                    <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                        <ul className="list-disc list-outside ">
                                            <li className="lg:pt-[20px] pt-[10px]" >Fully automated accounting</li>
                                            <li className="lg:pt-[20px] pt-[10px]">Bulk transaction reconciliation</li>
                                            <li className="lg:pt-[20px] pt-[10px]">Real-time financial reports</li>
                                            <li className="lg:pt-[20px] pt-[10px]">Shopify accounting expert</li></ul>
                                    </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[580px]  ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/6(3).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  ">Amazon</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium text-[#616161] ">Integrated platform</p>

                                    <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                        <ul className="list-disc list-outside ">
                                            <li className="lg:pt-[20px] pt-[10px]" >Fully automated accounting</li>
                                            <li className="lg:pt-[20px] pt-[10px]">Bulk transaction reconciliation</li>
                                            <li className="lg:pt-[20px] pt-[10px]">Real-time financial reports</li>
                                            <li className="lg:pt-[20px] pt-[10px]">Shopify accounting expert</li></ul>
                                    </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[580px]  ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/6(4).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  "> PayPal</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium text-[#616161] ">Integrated payment gateway</p>

                                    <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                        <ul className="list-disc list-outside ">
                                            <li className="lg:pt-[20px] pt-[10px]" >Automated payment processing
                                            </li>
                                            <li className="lg:pt-[20px] pt-[10px]">PayPal accounting expert</li>
                                        </ul>
                                    </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[580px]  ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/6(5).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  ">Stripe</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium text-[#616161] ">Integrated payment gateway</p>

                                    <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                        <ul className="list-disc list-outside ">
                                            <li className="lg:pt-[20px] pt-[10px]" >Automated payment processing
                                            </li>
                                            <li className="lg:pt-[20px] pt-[10px]">Stripe accounting expert</li>
                                        </ul>
                                    </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[580px]  ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/6(6).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  "> Plaid</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium text-[#616161] ">Integrated payment processing with UK and EU banks</p>
</div>

                                </div>
                            </div>

                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[580px]  ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/6(7).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  "> Square</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium text-[#616161] ">Supported payment gateway</p>

                                    <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                        <ul className="list-disc list-outside ">
                                            <li className="lg:pt-[20px] pt-[10px]" >Square accounting expert
                                            </li>
                                            <li className="lg:pt-[20px] pt-[10px]">  Automated payment processing coming soon</li>
                                        </ul>
                                    </p>
</div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[580px]  ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/6(8).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  ">Etsy</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium text-[#616161] ">Supported platform</p>

                                    <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                        <ul className="list-disc list-outside ">
                                            <li className="lg:pt-[20px] pt-[10px]" >Etsy accounting expert
                                            </li>
                                            <li className="lg:pt-[20px] pt-[10px]"> Automated Etsy accounting coming soon</li></ul>

                                    </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[580px]  ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/6(9).png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[300px]">
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  "> Wix</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] font-medium text-[#616161] ">Supported platform</p>

                                    <p className="text-[#000]  lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                        <ul className="list-disc list-outside ">
                                            <li className="lg:pt-[20px] pt-[10px]" >Wix accounting expert
                                            </li>
                                            <li className="lg:pt-[20px] pt-[10px]"> Automated Wix accounting coming soon</li>
                                        </ul>
                                    </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

            <section className="lg:px-[100px] px-[20px] bg-[#F3EFE7] ">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[40px] pt-[50px] sm:pb-[50px] pb-[10px] text-center ">
                        <div className="flex justify-center ">
                            <div className="col-lg-5">
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">ECOMMERCE FEATURES</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold">Full Control of Your Finances
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 lg:pt-[80px] pt-[10px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-md-12">
                                    <Image className="img-responsive w-full" src="/Images/6(10).png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[50px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-8">
                                        <p className="text-[#010202]   lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold ">Power Up Your Decision-Making</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] ">We consolidate data from all your connected marketplaces and banks to generate real-time reports on sales, transactions, and marketplace performance. This helps you make informed decisions with confidence.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="lg:px-[120px] px-[20px] overflow-hidden bg-[#F3EFE7] lg:pb-[70px] pb-[40px]">
                <div className="row  justify-center ">
                    <div className="col-md-10 ">
                        <div className="lg:pt-[80px] pt-[40px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[130px] pt-[20px] order-lg-1 order-2 ">
                                    <div className="col-lg-8 justify-start">
                                        <p className="text-[#010202]  lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold ">Enjoy Automated Accounting
                                        </p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] "> With integrated accounting that aligns with your business routines, we automatically generate reports that our accounting experts review and file, giving you peace of mind.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/6(11).png" alt="logo" width={1830} height={750} />
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



            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[60px] pb-[40px] overflow-hidden bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-5 ">
                            <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center">WHAT YOU GET</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[30px] pb-[20px]">Get things done with Cloud BSS</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7] border rounded-4 shadow-sm  lg:h-[450px]">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/comp1.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Ecommerce</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Automate bookkeeping for all your sales platforms. Lean on your accounting expert who understands ecommerce business operations and nuances.</p>
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
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Your dedicated accountant will fully understand your business, helping you manage taxes, VAT reports, and more, ensuring your finances are always in order.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Learn more</button>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="block  p-6 bg-[#F3EFE7] border  rounded-4 shadow-sm lg:h-[450px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/copy3.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Invoices</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[40px] pb-[20px]">Keep track of your cash flow, create and send invoices, and get paid faster. Automate your invoicing process to streamline payments.</p>
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

                    <div className="col-md-5 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[50px] sm:pb-[50px] pb-[10px] text-center ">
                        <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">WHY CHOOSE US</p>
                        <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold">From founding to filing and beyond, we’re with you
                        </p>
                    </div>
                    <div className="col-lg-10 ">
                        <div className="lg:pb-[90px] pb-[60px]">
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[50px] lg:pb-[60px] pb-[50px] overflow-hidden bg-[#FFF]">
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
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">

                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0 ">What services does Cloud BSS offer?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  rounded-4 ">Cloud BSS provides tailored accounting services, including bookkeeping, tax advice, ongoing compliance support, and ecommerce platform integrations. Our services are designed to streamline your financial operations, helping you stay compliant and focus on growing your business.</p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                                </div>
                                </div>
                                            </AccordionItem>
                                       

                              
                                            <AccordionItem value="item-2">
                                            <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">How does Cloud BSS help with my ecommerce business?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">
                                                            Cloud BSS integrates with your sales platforms, such as Shopify, Amazon, eBay, and others. Our accounting software automates bookkeeping, provides real-time financial reporting, and offers expert advice to help you manage taxes, VAT, and other business needs effectively.
                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                                </div>
                                </div>
                                            </AccordionItem>
                                       
                                            <AccordionItem value="item-3">
                                            <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">Do I get a dedicated accountant?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] "> Yes! When you sign up with Cloud BSS, you'll be paired with a dedicated accountant who understands your business inside and out. You can easily communicate with them via live chat or calls to receive personalised advice and support.



                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                                </div>
                                </div>
                                            </AccordionItem>
                                       
                                            <AccordionItem value="item-4">
                                            <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">Can I automate my invoicing and payments?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  "> Absolutely! With Cloud BSS, you can create and send invoices, track payments, and even integrate with PayPal and Stripe for automated payment processing. This helps you get paid faster and manage your finances more efficiently.


                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                                </div>
                                </div>
                                            </AccordionItem>
                                       
                                            <AccordionItem value="item-5">
                                            <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">How does Cloud BSS ensure tax compliance?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  "> Cloud BSS automatically applies the correct tax codes to your transactions and generates tax reports for VAT and other filings. We handle your tax filing deadlines, ensuring you're always compliant with HMRC.



                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                                </div>
                                </div>
                                            </AccordionItem>
                                       
                                            <AccordionItem value="item-6">
                                            <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0 ">Can Cloud BSS help with cross-border ecommerce?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  "> Yes! Cloud BSS supports international ecommerce sellers, offering multi-currency transactions, global VAT management, and country-specific tax reporting. We help you navigate complex international tax regulations.


                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                                </div>
                                </div>
                                            </AccordionItem>
                                       
                                            <AccordionItem value="item-7">
                                            <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">What is included in the pricing?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  "> Our packages include bookkeeping, accounting services, tax advice, and ongoing compliance. You can also add extras like ecommerce integrations or advanced reporting tools, depending on your business needs.


                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                                </div>
                                </div>
                                            </AccordionItem>
                                       
                                            <AccordionItem value="item-8">
                                            <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">Is there customer support available?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] "> Yes! Cloud BSS offers customer support via live chat and email, with responses typically within 24 hours. Our team is always ready to assist you with any questions or issues you may have.


                                                            </p>

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                                </div>
                                </div>
                                            </AccordionItem>
                                      
                                            <AccordionItem value="item-9">
                                            <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How can I get started with Cloud BSS?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] "> Getting started is easy! Choose a package that suits your business needs, sign up online, and we’ll assign you a dedicated accountant to help you manage your financials


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