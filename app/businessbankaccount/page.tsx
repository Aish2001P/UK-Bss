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
        <>

            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[200px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[100px] pb-[50px]">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="col-lg-9 ">
                                        <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] lg:pt-[130px] pt-[30px] text-[#212833]">Seamlessly open a business bank account online with ease.</p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">
                                            After registering your company, the next step is opening a business bank account and ensuring compliance. We provide remote guidance and connect you with our partner banks to help you open an account online seamlessly.</p>

                                        <div className=" flex gap-4 lg:pb-[0px] pb-[40px]">
                                            <div>
                                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Get Started</button>
                                            </div>
                                            <div>
                                                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Pricing</button>
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
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center">WHAT YOU GET</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[50px] pb-[20px]">Start your business the right way with Cloud BSS</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm  lg:h-[430px]">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-30 " src="/Images/3(2).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Instant access to expert support</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161]">Register your limited company with us and get a dedicated business expert, available via live chat or phone whenever you need assistance.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[430px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-27 " src="/Images/3(3).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]"> Seamless and hassle-free online process</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[20px] pb-[20px]">All you have to do is send us your documents via live chat. We fill out your Companies House application and send it to you to sign digitally.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[430px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-27 " src="/Images/3(4).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">Help opening a bank account</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[58px] pb-[20px]">Set up a business bank account based on your needs. Our partners include UK banks and neobanks that can open accounts remotely for you</p>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-4 ">
                                <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[430px] ">
                                    <div className="lg:pt-[20px] pt-[10px]">
                                        <Image className="img-responsive w-27 " src="/Images/3(5).svg" alt="logo" width={1830} height={750} />
                                    </div>
                                    <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]">All documents stored in one, convenient place</p>
                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] font-medium text-[#616161] lg:pb-[18px] pb-[20px]">Safely store all your limited company&apos;s incorporation documents, ready to go from day one.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section className="lg:px-[100px] px-[20px] bg-[#FFF] ">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[90px] pt-[40px] sm:pb-[50px] pb-[10px]  ">
                        <div className="flex justify-center ">
                            <div className="col-lg-5">
                                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center">Our partners</p>
                                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold text-center lg:pb-[40px] pb-[20px]">Business bank account referrals for UK residents and foreigners
                                </p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm    ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/p1.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[240px]">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  ">Airwallex</p>


                                        <p className="text-[#616161]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                            A great bank for non-residents, Airwallex boasts fantastic FX rates, a free card, and an expense management feature. You can sign up to Airwallex using our unique application link.
                                        </p>


                                    </div>
                                    <div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Get referral</button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm    ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/p2.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[240px]">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[40px] pt-[20px]  ">Wise</p>


                                        <p className="text-[#616161]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                            A great bank for non-residents, Airwallex boasts fantastic FX rates, a free card, and an expense management feature. You can sign up to Airwallex using our unique application link.
                                        </p>


                                    </div>
                                    <div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Get referral</button>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm    ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/p3.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[240px] ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  ">Revolut</p>


                                        <p className="text-[#616161]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                            Revolut is a global neobank which allows business owners to securely transfer money across borders in over 25 currencies at competitive rates. Open an account with this popular bank by using our referral link for unique benefits.
                                        </p>


                                    </div>
                                    <div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Get referral</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="row ">
                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm    ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/p4.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[240px] ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  ">Cashplus</p>


                                        <p className="text-[#616161]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                            Cashplus provides prepaid MasterCards and current accounts to small businesses in the UK. Sign up with them here to get a free Business Go account, free card, and a 70% savings on payments and transfers.
                                        </p>


                                    </div>
                                    <div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Get referral</button>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-3 bg-[#F3EFE7] border rounded-4 shadow-sm    ">
                                    <div className="">
                                        <Image className="img-responsive w-full " src="/Images/p5.png" alt="logo" width={1830} height={750} />
                                    </div>
                                    <div className="lg:h-[240px] ">
                                        <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[30px] pt-[20px]  ">Silverbird</p>


                                        <p className="text-[#616161]  lg:text-[1vw] text-[3vw] lg:leading-[1.3vw] leading-[4vw] lg:pb-[20px] pb-[20px]  ">
                                            Silverbird targets business owners trading physical goods or are in logistics. They have no transaction limits and great foreign exchange rates. Once your nature of business is verified and you&apos;ve successfully signed up with Cloud BSS, we will complete the referral process.
                                        </p>


                                    </div>
                                    <div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Get referral</button>
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
                                    <button type="button" className="border border-dark  font-medium !rounded-full text-md px-5 py-2 text-center items-center">PRICING</button>
                                    <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[3vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px]">Simple and fast company formation</p>
                                    <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pt-[10px] pt-[5px]">The cost to register a company with Cloud BSS depends on what you need. We can simply handle the registration for you. Or we can handle your compliance and accounting needs too. Take a look at your options below:</p>
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
                                            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">Basic for residents</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161]">Set up as a limited company and receive all legal paperwork</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[0vw] leading-[3.5vw]  text-[#000] font-medium">from</p>
                                            <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£50</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3.5vw]  text-[#616161] font-bold">VAT included</p>
                                        </div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                    
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px] font-medium">
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] ">
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold ">Setting up</p>

                                            <div className="flex gap-2">
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
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Documents</p>
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
                                                <div className=" flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> Registered London office address</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£100/y</p>
                                                    </div>
                                                </div>
                                                <div className=" flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> Manual document review</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£49</p>
                                                    </div>
                                                </div>
                                                <div className=" flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> Confirmation Statement</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£100</p>
                                                    </div>
                                                </div>
                                                <div className=" flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> PAYE registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className=" flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> VAT registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className=" flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> Accounting services</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">from £71/m</p>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                </div>
                            </div>

                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7] rounded-4 shadow-sm  ">
                                <div className=" p-6 bg-[#FFFDFA]  rounded-4 flex-1 h-full  ">
                                        <div className="lg:h-[250px] overflow-hidden">
                                            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one for residents</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161]">Register a limited company and get all compliance related to your incorporation</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[0vw] leading-[3.5vw]  text-[#000] font-medium line-through">£299</p>
                                            <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£289</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3.5vw]  text-[#616161] font-bold">VAT included</p>
                                        </div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                    

                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[30px]">
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-black font-medium">
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold ">Setting up</p>
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
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE] ">Registered London office address</p>
                                                </div>
                                            </div>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Documents</p>
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
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE]">Same-day document scanning</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE]">Manual document review</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE]">Confirmation Statement</p>
                                                </div>
                                            </div>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Beyond incorporation</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE]">Unlimited corporate changes</p>
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
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> PAYE registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> VAT registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> Accounting services</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">from £71/m</p>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>



                                </div>

                            </div>

                            <div className="col-lg-4 mb-4 ">
                                <div className="block  p-1 bg-[#F3EFE7] rounded-4 shadow-sm  ">
                                <div className=" p-6 bg-[#FFFDFA]  rounded-4 flex-1 h-full  ">
                                        <div className="lg:h-[250px] overflow-hidden">
                                            <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium lg:pt-[10px] pt-[5px]">All-in-one forforeigners</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.1vw] leading-[3.5vw]  text-[#616161]">Register a limited company as a non-UK resident</p>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[0vw] leading-[3.5vw]  text-[#000] font-medium line-through">£349</p>
                                            <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[3.5vw] leading-[7vw] font-medium m-0 p-0">£299</p>
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3.5vw]  text-[#616161] font-bold"> + VAT</p>
                                        </div>
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md w-full py-2 text-center items-center">Get this plan</button>
                                    </div >
                                   
                                    <div className="lg:pl-[25px] pl-[10px] lg:pt-[30px] pt-[10px]">
                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-black font-medium">
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold ">Setting up</p>
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
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE] ">Registered London office address</p>
                                                </div>
                                            </div>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Documents</p>
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
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE]">Same-day document scanning</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE]">Manual document review</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE]">Confirmation Statement</p>
                                                </div>
                                            </div>
                                            <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold lg:pt-[30px] pt-[20px]">Beyond incorporation</p>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE]">Unlimited corporate changes</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="p-0 m-0" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="" color="#0061FE" fill="none">
                                                        <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg></div>
                                                <div>
                                                    <p className="p-0 m-0 font-medium lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] text-[#0061FE]">VAT registration</p>
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
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> PAYE registration</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">£50</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="col-lg-10">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-medium lg:pl-[25px] pl-[5px]"> Accounting services</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <p className="lg:text-[1vw] text-[3.4vw] lg:leading-[1.7vw] leading-[3.5vw] font-semibold text-[#767676] ">from £71/m</p>
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[30px] overflow-hidden lg:pb-[30px] pb-[15px] bg-[#CCDFFF]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="col-lg-5">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#0061FE]">Download free guide on how to set up business in the UK</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#0061FE]">We&apos;ve put together all of the documents and details you need to figure out before you open a company</p>


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
                                <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[30px] font-medium text-[#0061FE]">By clicking, you agree to our<span className="underline">Terms & Conditions,Privacy and Data Protection Policy</span></p>
                            </div>
                            <div className="col-lg-3">
                                <Image className="img-responsive w-full " src="/Images/copy14.png" alt="logo" width={1830} height={750} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                    <p className=" text-[#212833] lg:text-[1.3vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium   lg:pt-[20px] pt-[20px]">How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className="text-[#616161]   lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pb-[20px] pb-[10px]">A year end package with everything you need to file comes standard with Cloud Bss. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-md text-sm px-5 py-2 text-center items-center">Learn More</button>
                                </div>


                            </div>
                            <div className="col-lg-4 mb-4 lg:pt-[0px] pt-[30px]">

                                <div className="lg:pt-[20px] pt-[10px]">
                                    <Image className="img-responsive w-full " src="/Images/3(14).png" alt="logo" width={1830} height={750} />
                                </div>
                                <div >
                                    <p className=" text-[#212833] lg:text-[1.3vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium   lg:pt-[20px] pt-[20px]">How to Deal with Inflation&apos;s Effects on Your Small Business</p>
                                    <p className="text-[#616161]   lg:text-[0.9vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pb-[20px] pb-[10px]">A year end package with everything you need to file comes standard with Cloud Bss. Upgrade your plan, and cross even more off your to-do list. With Premium, you get expert tax prep, filing, and year-round tax advisory support.</p>
                                    <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-md text-sm px-5 py-2 text-center items-center">Learn More</button>
                                </div>

                            </div>
                            <div className="col-lg-4 mb-4 lg:pt-[0px] pt-[30px]">

                                <div className="lg:pt-[20px] pt-[10px]">
                                    <Image className="img-responsive w-full " src="/Images/3(15).png" alt="logo" width={1830} height={750} />
                                </div>
                                <div >
                                    <p className=" text-[#212833] lg:text-[1.3vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium   lg:pt-[20px] pt-[20px]">How to Deal with Inflation&apos;s Effects on Your Small Business</p>
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