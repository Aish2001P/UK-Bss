'use client'
import Header from '@/app/Component/header';
import Footer from '@/app/Component/footer'
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"




import { useState } from "react";

export default function Home() {

    const [cost, setCost] = useState<number>(0);
    const [revenue, setRevenue] = useState<number>(0);
    const [activeRegStep, setActiveRegStep] = useState<number | null>(null);

    const regStep = (index: number) => {
        setActiveRegStep(activeRegStep === index ? null : index);
    };


    const handleCostChange = (value: string) => {
        setCost(value ? parseFloat(value) : 0);
    };

    const handleRevenueChange = (value: string) => {
        setRevenue(value ? parseFloat(value) : 0);
    };

    const calculateProfit = (): number => {
        return revenue - cost;
    };

    const calculateMargin = (): string => {
        if (revenue === 0) return "-Infinity %";
        const margin = ((calculateProfit() / revenue) * 100).toFixed(2);
        return `${margin} %`;
    };

    const closeContent = () => {
        setActiveRegStep(null);
    };



    return (
        <>
            <Header />
            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[100px] pb-[50px]">

                            <div className="flex justify-center lg:pb-[50px] pb-[20px]">
                                <div className="col-lg-5 ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">Profit Margin Calculator</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        If you're in the UK, use this free profit margin calculator to work out the increase in revenue and determine the best price for your products. Let us know if you have any questions.</p>

                                </div>
                            </div>
                            <div className="row align-items-center pb-[20px] justify-center">
                                <div className='col-lg-10 sm:pt-5'>
                                    <div className="row align-items-center justify-between ">
                                        <div className='col-lg-4 mb-4'>
                                            <div className='rounded-[20px] bg-[#F3EDE6] py-3 sm:px-5 px-3 w-full '>
                                                <div className='sm:p-5'>
                                                    <p className='sm:text-[25px] text-[22px] leading-[25px] font-medium pt-4'>Selling information</p>
                                                    <p className='sm:text-[18px] text-[16px]'>First, lets enter some numbers. You don&apos;t need to calculate anything from top to bottom - do it in any order you like.</p>
                                                    <div className='pt-4'>
                                                        <input type="number" className="form-control py-2" value={cost || ""} onChange={(e) => handleCostChange(e.target.value)} placeholder="Enter cost" />
                                                    </div>
                                                    <div className='pt-3'>
                                                        <input type="number" className="form-control py-2 " value={revenue || ""} onChange={(e) => handleRevenueChange(e.target.value)} placeholder="Enter revenue"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='col-lg-7 mb-4'>
                                            <div className='px-4 py-3'>
                                                <div className='d-flex  justify-between'>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[40px] pt-[20px]">Cost :</p></div>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[40px] pt-[20px]">£ {cost}</p></div>
                                                </div>
                                                <div className='!border-[#F3EDE6] border '></div>
                                                <div className='d-flex align-items-center justify-between pt-4'>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[40px] pt-[20px]">Profit:</p></div>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[40px] pt-[20px]">£ {calculateProfit()}</p></div>
                                                </div>
                                                <div className='!border-[#F3EDE6] border '></div>
                                                <div className='d-flex align-items-center justify-between pt-4'>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[40px] pt-[20px]">Revenue:</p></div>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[40px] pt-[20px]">£{revenue}</p></div>
                                                </div>
                                                <div className='!border-[#F3EDE6] border '></div>
                                                <div className='d-flex align-items-center justify-between pt-4'>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[40px] pt-[20px]">Margin:</p></div>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-medium lg:pt-[40px] pt-[20px]">{calculateMargin()}</p></div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>



                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[30px] overflow-hidden lg:pb-[50px] pb-[30px] bg-[#000]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="col-lg-5">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#fff]">Accounting for your ecommerce business from £71/m</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#fff]">We chat directly with your previous accountant to get all the information required, and transfer your accounting software subscription and data all in one go. Making your transition to Cloud BSS effortless.</p>


                                    </div>


                                    <div className="lg:pt-[0px] pt-[15px]">
                                        <button type="button" className="border border-light text-[#fff] hover:bg-[#fff] hover:text-[#000] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Get Started</button>
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[50px] pb-[30px] overflow-hidden bg-[#F3EFE7]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">How it works</button>

                        </div>
                        <div className="flex justify-center">
                            <div className="col-lg-4 ">
                                <p className="uppercase lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pt-[30px] pt-[20px]">Gross margin calculator: how does it work?</p>
                                <p className=" text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]  text-center  lg:pb-[30px] pb-[20px]">Monitoring your business and measuring your performance is critical for growing your business. A measure you should consider is your business' profit margin. If you know this, you can plan profitability for a specific period.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="flex justify-center">
                                <div className="col-lg-9">
                                    <div className="row">

                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1" className=' items-center'>
                                                <div className="col-lg-12 mb-4">

                                                    <div className="block   bg-white border border-white rounded-4 items-center p-6  ">
                                                        <AccordionTrigger className='items-center'>
                                                            <div className="flex items-center ">
                                                                <div className="flex items-center">
                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[15px] pl-[5px] text-[#212833] p-0 m-0">
                                                                        Profit</p>
                                                                </div>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]   text-[#212833]">
                                                                        A company's profit is the difference between the amount they spend on products and how much they make.</p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  text-[#212833]">In order to calculate the profit of your products, you should use gross profit margin.
                                                                    </p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  text-[#212833]">If you want to calculate the profitability of your business, you need to know how to calculate net profit margin.</p>
                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  text-[#212833]">If you want to determine the profitability of each item you sell, a gross profit margin is sufficient. Nevertheless, it is important to calculate net profit to know business' revenue and profitability.</p>

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

                                                    <div className="block   bg-white border border-white rounded-4 items-center p-6  ">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[15px] pl-[5px] text-[#212833] p-0 m-0">
                                                                    Gross Profit Margin

                                                                </p>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  text-[#212833]">
                                                                        In simple words, gross profit margin is the money you keep when all the direct costs of producing the goods or services you sell are covered.</p>
                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  text-[#212833]">The higher your gross margin, the more money you can keep after paying off your expenses and debt.</p>

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

                                                    <div className="block   bg-white border border-white rounded-4 items-center p-6  ">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[15px] pl-[5px] text-[#212833] p-0 m-0">
                                                                    Net Profit Margin

                                                                </p>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  text-[#212833]">
                                                                        For every dollar of revenue you spend on operating expenses, interest, and taxes, you make a net profit.</p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  text-[#212833]">It is crucial to understand your business's net profit margin in order to determine how profitable it is. By doing so, you can cut unnecessary expenses and improve profitability.</p>
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[60px] pt-[40px] lg:pb-[40px] pb-[30px] overflow-hidden bg-[#000]">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="row  items-center justify-between">
                            <div className="col-lg-5">
                                <Image className="img-responsive w-full " src="/Images/1.png" alt="logo" width={1830} height={750} />
                            </div>
                            <div className="col-lg-7">
                                <div className='flex justify-end'>
                                    <div className="col-lg-8">
                                        <div>
                                            <div className="row justify-end">

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
                                            <p className="lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[4vw] lg:pt-[30px] pt-[10px] font-medium text-[#ABABAB]">By clicking, you agree to our<span className="text-[#fff]">Terms & Conditions,Privacy and Data Protection Policy</span></p>

                                        </div>

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
                        <p className="font-medium underline lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] text-center lg:pb-[20px] pb-[10px]"> More FAQs</p>

                    </div>
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-9">

                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What is a good profit margin?


                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">
                                                                What qualifies as a good profit margin varies by industry, as costs for materials, services, and operations differ. Business location also influences profit margins due to factors like rent and payroll expenses. </p>

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">When it comes to measuring profitability, a gross profit margin is fine for determining the profitability of a particular item. Still, net profit margins are a better measure of overall profitability. Generally, a 10% net profit margin is considered average, a 20% margin is considered high (or “good”), and a 5% margin is low. Hitting a 5-10% net profit margin can be considered a good profit margin.

                                                            </p>



                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How does this Profit Margin Calculator work?

                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833] ">Use Cloud's BSS Profit Margin Calculator to determine a selling price that ensures a strong profit margin.</p>

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833] ">Simply enter the gross cost per product and your desired profit percentage. The calculator applies a profit margin formula to compute the optimal selling price, saving you the effort of manual calculations. The final result suggests the price you should charge to achieve your target profit margin. </p>.

                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How to calculate gross profit margin?

                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">The formula for calculating gross profit margin is:Gross Profit Margin = Gross Profit / Revenue x 100
                                                            </p>
                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Let's break it down with an example:

                                                                FYR Company, an eCommerce business selling customized gifts, generated $700,000 in revenue from selling mugs in 2023. The cost of goods sold (COGS) was $200,000, and other operating expenses totaled $400,000.</p>
                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Income Statement:

                                                                <ul className="list-disc list-outside ">
                                                                    <li className="lg:pt-[20px] pt-[10px]" >Revenue: $700,000</li>
                                                                    <li className="lg:pt-[20px] pt-[10px]">Cost of Goods Sold: ($200,000)</li>
                                                                    <li className="lg:pt-[20px] pt-[10px]" >Gross Profit: $500,000</li>
                                                                    <li className="lg:pt-[20px] pt-[10px]" >Other Expenses: ($400,000)</li>
                                                                    <li className="lg:pt-[20px] pt-[10px]" >Net Income: $100,000</li>
                                                                </ul></p>
                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Using the income statement figures, FYR’s gross profit margin is calculated by dividing $500,000 gross profit by $700,000 revenue, resulting in 71.4%.</p>

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Similarly, the net profit margin is determined by dividing $100,000 net income by $700,000 revenue, equaling 14.3%.</p>
                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>

                                    <AccordionItem value="item-4">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What is the difference between gross and net profit margin?


                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833] p-0 m-0 ">The gross profit margin measures how much profit a single product generates, while the net profit margin assesses the overall profitability of your business.
                                                                <ul className="list-disc list-outside ">
                                                                    <li className="lg:pt-[20px] pt-[10px]" >Calculating Gross Profit Margin
                                                                        If a product sells for $50 and costs $35 to produce, the gross profit is $15. Dividing this by the selling price ($15 ÷ $50) gives a gross profit margin of 30%. While useful, this metric alone does not determine overall business profitability.</li>
                                                                    <li className="lg:pt-[20px] pt-[10px]">Calculating Net Profit Margin
                                                                        Net profit margin considers total sales and subtracts business expenses before dividing by total revenue. For example, if a business earns $300,000 in revenue and incurs $250,000 in expenses, the net profit margin is 16% ($50,000 ÷ $300,000).</li>

                                                                </ul>



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

                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What is the difference between gross margin and markup?



                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">
                                                                Gross profit margin and markup are distinct accounting terms that use the same inputs—revenue and costs—but provide different insights into a transaction. </p>

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">So what is the difference between these two measurements? Profit margin refers to sales minus the cost of goods sold, while markup refers to the amount by which the cost of goods is increased to get the final selling price or price that you set to your customers.

                                                            </p>
                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Both metrics are essential for pricing strategies, helping ensure that your business sets prices effectively to maintain profitability without losing sales.</p>



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