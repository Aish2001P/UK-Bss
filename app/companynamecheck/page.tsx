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

export default function Home() {
    return (
        < >

            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[100px] overflow-hidden bg-[#FFFDFA]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[100px] pb-[50px]">

                            <div className="flex justify-center">
                                <div className="col-lg-5 ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">Company Name Checker for UK Entrepreneurs</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        Use our free tool to quickly check if your desired company name is available. Plus, we’ll handle your registration with Companies House, saving you the £50 government fee. We’ll have everything set up for you within just 2 hours.</p>

                                    <div className=" lg:flex gap-4 lg:pb-[60px] pb-[50px] justify-center items-center ">
                                        <div className="lg:pb-[0px] pb-[10px] ">
                                            <input type="text" id="text" className="bg-white border-black border-1 rounded-full px-6 py-2 text-black sm: w-full " placeholder="Any Company Name you have in mind" required></input>
                                        </div>
                                        <div >
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 sm: w-full text-center items-center">Check The Name</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[50px] pb-[30px] overflow-hidden bg-[#F3EFE7]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">WHERE ARE YOU FROM?</button>

                        </div>
                        <div className="flex justify-center">
                            <div className="col-lg-4 ">
                                <p className="uppercase lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pt-[30px] pt-[20px]">Useful Tips for Picking a Company Name</p>
                                <p className=" text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]  text-center  lg:pb-[30px] pb-[20px]">When choosing a name for your business, keep these important points in mind to ensure it complies with UK regulations:</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="flex justify-center">
                                <div className="col-lg-9">
                                    <div className="row">
                                        <div className="col-lg-12 mb-4">

                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <p>
                                                                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="36" height="36" rx="18" fill="#0061FE" />
                                                                        <path d="M20.64 25H18.48V14.8H15.2V13.26H15.84C17.32 13.26 18.16 12.88 18.74 11.6H20.64V25Z" fill="white" />
                                                                    </svg></p>
                                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[15px] pl-[5px] text-[#212833]">
                                                                    Unique </p>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]">
                                                                        Your company name must be distinct and cannot match any existing registered business. Simply changing punctuation or adding special characters does not make it unique. To prevent confusion, the name should be clearly distinguishable from others. Use our free company name search tool to check its availability.</p>

                                                                </div>
                                                                <div className="col-lg-4 justify-center ">
                                                                    <Image className="img-responsive w-80 " src="/Images/new.png" alt="logo" width={1830} height={750} />
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>

                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-4">

                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <p>
                                                                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="36" height="36" rx="18" fill="#0061FE" />
                                                                        <path d="M23.9 25H12.68V23.58C12.68 21.1 13.66 19.86 16.42 18.92L19.62 17.82C21.22 17.24 21.78 16.7 21.78 15.52C21.78 14.1 20.86 13.38 18.46 13.38C15.78 13.38 14.78 14.32 14.78 16.08V16.32H12.66V16.12C12.66 13.64 14.36 11.4 18.54 11.4C22.34 11.4 23.94 13.2 23.94 15.56C23.94 17.76 22.52 18.92 20.16 19.64L17.34 20.5C15.54 21.12 14.92 21.76 14.92 23.28L18.16 23.06H23.9V25Z" fill="white" />
                                                                    </svg></p>
                                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[15px] pl-[5px] text-[#212833]">
                                                                    Non-offensive </p>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]">
                                                                        It’s important to ensure your company name is free from offensive terms. While something may not seem offensive to you, it could be to others, especially in the UK’s diverse, multicultural society. Always check for cultural sensitivities before finalizing your name. Additionally, consider its meaning internationally, as you may expand your business overseas in the future.</p>

                                                                </div>
                                                                <div className="col-lg-4 justify-center ">
                                                                    <Image className="img-responsive w-80 " src="/Images/new.png" alt="logo" width={1830} height={750} />
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>

                                            </div>


                                        </div>
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4   ">

                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <p>
                                                                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="36" height="36" rx="18" fill="#0061FE" />
                                                                        <path d="M18.64 25.2C14.44 25.2 12.6 23.34 12.6 20.62V20.3H14.88V20.58C14.88 22.34 15.6 23.16 18.56 23.16C21.34 23.16 22.34 22.52 22.34 20.94C22.34 19.58 21.42 18.96 19.74 18.96H16V17.16H19.44C21.06 17.16 21.9 16.56 21.9 15.36C21.9 14.06 21.1 13.44 18.5 13.44C15.76 13.44 14.88 14.26 14.88 16.02V16.16H12.6V15.98C12.6 13.36 14.52 11.4 18.68 11.4C22.1 11.4 24.04 12.66 24.04 14.94C24.04 16.46 23.14 17.54 21.42 17.82V17.98C23.36 18.32 24.52 19.4 24.52 21.26C24.52 23.8 22.3 25.2 18.64 25.2Z" fill="white" />
                                                                    </svg></p>
                                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[15px] pl-[5px] text-[#212833]">
                                                                    Non-sensitive </p>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]">
                                                                        Certain "sensitive words" can imply a connection to a government or local authority, which may raise concerns with Companies House and potentially delay your registration. While these terms are not entirely prohibited, they require government approval before use. As a result, the registration process may take longer, and your company formation application could face delays.</p>

                                                                </div>
                                                                <div className="col-lg-4 justify-center ">
                                                                    <Image className="img-responsive w-80 " src="/Images/new.png" alt="logo" width={1830} height={750} />
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>



                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-4">

                                            <div className="block  p-6 bg-white border border-white rounded-4   ">
                                                <Accordion type="single" collapsible>
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <p>
                                                                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <rect width="36" height="36" rx="18" fill="#0061FE" />
                                                                        <path d="M23.1 25H20.96V22.28H12.4V20.78L20.6 11.6H23.1V20.34H25.4V22.28H23.1V25ZM15.38 20.34H20.96V14.12H20.8L15.38 20.18V20.34Z" fill="white" />
                                                                    </svg></p>
                                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[15px] pl-[5px] text-[#212833]">
                                                                    Limited or Ltd. </p>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]">
                                                                        If you are a limited company, your name must end with "Limited" or its abbreviation, "Ltd." This requirement applies to both private limited companies and limited liability partnerships. In certain cases, such as charities, the term "Limited" can be omitted, but this exemption requires approval from Companies House in accordance with their regulations.</p>

                                                                </div>
                                                                <div className="col-lg-4 justify-center ">
                                                                    <Image className="img-responsive w-80 " src="/Images/new.png" alt="logo" width={1830} height={750} />
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
                            <div className="text-[#000] font-medium lg:text-[2.5vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] lg:pt-[80px] pt-[40px] lg:pb-[50px] pb-[20px] text-center">
                                <div className="flex justify-center align-items-center">
                                    <p >Company name </p> <Image className="img-responsive w-24 item-center" src="/Images/svg3.svg" alt="logo" width={1830} height={750} /><p>is good to go</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="lg:px-[100px] px-[20px] lg:pt-[90px] pt-[60px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#fff]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-4 ">
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center">How it works</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[50px] pb-[20px]">Register Your Company in 4 Simple Steps</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7]  rounded-4 shadow-sm  lg:h-[430px]">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-28 " src="/Images/one.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Choose a Company Name</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161]">We'll quickly check if your preferred name is available with Companies House. If it’s free, we’ll reserve it for you.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="block  p-6 bg-[#F3EFE7]  rounded-4 shadow-sm lg:h-[430px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-18 " src="/Images/two.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Provide Us with the Documents</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[20px] pb-[20px]">Once your name is confirmed, submit the required documents online. We’ll complete the application and send it to you for e-signing.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="block  p-6 bg-[#F3EFE7] rounded-4 shadow-sm lg:h-[430px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-18 " src="/Images/Group 17847.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">No Need to Go Anywhere</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[58px] pb-[20px]">We handle everything remotely, including KYC (Know Your Customer), company registration, and even provide a registered office address for your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-6 bg-[#F3EFE7]  rounded-4 shadow-sm lg:h-[430px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-18 " src="/Images/four.svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Get a Free Bank Account</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[18px] pb-[20px]">Our experts will help you choose the best business bank account and connect you to trusted partners to set up your account.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] overflow-hidden lg:pb-[60px] pb-[50px] bg-[#F3EFE7]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="flex justify-center">
                            <div className="col-lg-5">
                                <div className="lg:pb-[60px] pb-[30px] text-center">
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">PRICING</button>
                                    <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">Simple and fast company formation</p>
                                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw] lg:pt-[10px] pt-[5px]">The cost to register a company with Cloud BSS depends on what you need. We can simply handle the registration for you. Or we can handle your compliance and accounting needs too. Take a look at your options below:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row justify-center">
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-1 bg-[#FFF]  rounded-4   ">
                                    <div className="block  p-6 bg-[#F3EFE7]  rounded-4   ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Basic for residents</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">Set up as a limited company and receive all legal paperwork</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£50</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">VAT included</p>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium">
                                        <p className="lg:text-[0.8vw] text-[3vw] lg:leading-[1.7vw] leading-[4vw] ">
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[0.5vw] leading-[4vw] font-semibold ">Setting up</p>

                                            <div className="flex gap-6">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Company formation, including £50 Companies House fee</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#000000" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0">Live chat with an expert</p>
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
                                <div className="block  p-1 bg-[#FFF] rounded-4 shadow-sm  ">
                                    <div className="block  p-6 bg-[#F3EFE7]  rounded-4   ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one for residents</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">Register a limited company and get all compliance related to your incorporation</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[3vw] font-medium m-0 p-0 line-through">£299</p>
                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£289</p>
                                        <p className="lg:text-[0.7vw] text-[2vw] lg:leading-[1vw] leading-[3vw]  text-[#616161] ">VAT included</p>
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
                                                    <p className="p-0 m-0">  Company formation, including £50 Companies House fee</p>
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
                                <div className="block  p-1 bg-[#FFF] rounded-4 shadow-sm  ">
                                    <div className="block  p-6 bg-[#F3EFE7]  rounded-4 shadow-sm  ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one for foreigners</p>
                                        <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw]  text-[#616161]">Register a limited company as a non-UK resident</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[3vw] font-medium m-0 p-0 line-through">£349</p>
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
                                                    <p className="p-0 m-0">  Company formation, including £50 Companies House fee</p>
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[60px] pt-[40px] lg:pb-[40px] pb-[30px] overflow-hidden bg-[#000]">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="row justify-between">
                            <div className="col-lg-3">
                                <Image className="img-responsive w-full " src="/Images/1.png" alt="logo" width={1830} height={750} />
                            </div>
                            <div className="col-lg-7">
                                <div className="col-lg-7">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#FFF]">Get tips on how to run your business smarter</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#ABABAB]">Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.</p>


                                    </div>
                                    <div className="lg:flex sm:row gap-4 ">

                                        <div >
                                            <input type="text" id="text" className="bg-transparent rounded-full px-5 py-2 text-white border border-white " placeholder="Email address" required></input>
                                        </div>

                                        <div className="lg:pt-[0px] pt-[15px]">
                                            <button type="button" className="border border-light text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Subscribe</button>
                                        </div>

                                    </div>

                                </div>
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[10px] font-medium text-[#ABABAB]">By clicking, you agree to our<span className="text-[#fff]">Terms & Conditions,Privacy and Data Protection Policy</span></p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[50px] overflow-hidden bg-[#F3EFE7]">
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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What is the Company Name Check Tool?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">
                                                                Our Company Name Check Tool allows you to verify if your desired company name is available with Companies House. This ensures that your name is unique and complies with necessary regulations.
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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">How does the Business Name Check Tool work?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833] "> Simply enter your preferred name into the tool, and we’ll check it against the Companies House database. If the name is available, you can proceed with registration.


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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">Why should I check the availability of a company name in the UK?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  "> It's important to check your company name to ensure it’s unique and meets regulatory requirements. You can't use a name already registered with Companies House, so checking availability prevents delays.


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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">What are the criteria for a valid company name in the UK?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  ">  A valid name must be unique, non-offensive, non-sensitive, and typically include "Limited" or "Ltd." for private limited companies (with some exceptions, like charities).
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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0 ">What should I do if my desired company name is already taken?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  "> If your name is already taken, you'll need to choose a new one. Our Company Name Check Tool offers suggestions to help you find an alternative.
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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px]  p-0 m-0">How can I reserve a company name once it’s available?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pl-[25px] pl-[5px] text-[#212833]  "> If the name is available, we’ll assist you in reserving it with Companies House during the registration process.

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

            <Footer />
        </>
    );
}
