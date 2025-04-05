'use client'
import Header from '@/app/Component/header';
import Footer from '@/app/Component/footer'
import Image from 'next/image';
import Link from 'next/link';
import { Checkbox, } from "@nextui-org/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



import { useState } from "react";

export default function Home() {


    const [activeRegStep, setActiveRegStep] = useState<number | null>(null);

    const [formData, setFormData] = useState({
        category: "",
        itemPrice: "",
        shippingCharge: "",
        quantitySold: "",
        itemCost: "",
        shippingCost: "",
        paymentMethod: "PayPal",
        reserveprice: '',
        listingUpdate: ''
    });
    const regStep = (index: number) => {
        setActiveRegStep(activeRegStep === index ? null : index);
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

                            <div className="flex justify-center">
                                <div className="col-lg-5 ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]"> eBay Fee Calculator</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        This calculator helps UK sellers calculate net profits from eBay sales. This is not an official eBay calculator, but it’ll give you an idea of how to price your items. If you need more clarity, talk to our accountants who specialise in ecommerce.</p>



                                </div>
                            </div>
                            <div className="row align-items-center pb-[20px] justify-center lg:pt-[50px] pt-30]">
                                <div className='col-lg-10 sm:pt-5 justify-between'>
                                    <div className="row align-items-center  justify-between">
                                        <div className='col-lg-4 mb-4'>
                                            <div className='rounded-[20px] bg-[#F3EDE6] py-3 sm:px-5 px-3 w-full'>
                                                <div className='sm:p-5'>
                                                    <p className='sm:text-[25px] text-[22px] leading-[25px] font-medium pt-4'>Selling information</p>
                                                    <p className='sm:text-[18px] text-[16px]'>Item price is the amount a customer pays for the product. Shipping charge is what you charge customers for each delivery.</p>
                                                    <div className='pt-4'>
                                                        <div className="space-y-3  ">
                                                            <div className='pb-1'>
                                                                <select
                                                                    className="w-full border border-[#909396] py-2 px-3 text-[#909396] rounded-lg text-base bg-[#FFFDFA] lg:pb-[10px] pb-[5px] "
                                                                    value={formData.category}
                                                                    onChange={(e) =>
                                                                        setFormData({ ...formData, category: e.target.value })
                                                                    }
                                                                >
                                                                    <option value="">Choose category</option>
                                                                    <option value="electronics">Electronics</option>
                                                                    <option value="clothing">Clothing</option>
                                                                    <option value="home">Home</option>
                                                                </select>
                                                            </div>
                                                            <div className='pb-1'>
                                                                <input
                                                                    type="number"
                                                                    placeholder="Item price"
                                                                    className="w-full border bg-[#FFFDFA] border-[#909396] py-2 px-3 text-[#909396] rounded-lg text-base "
                                                                    value={formData.itemPrice}
                                                                    onChange={(e) =>
                                                                        setFormData({ ...formData, itemPrice: e.target.value })
                                                                    }
                                                                />
                                                            </div>
                                                            <div className='pb-1'>
                                                                <input
                                                                    type="number"
                                                                    placeholder="Shipping charge"
                                                                    className="w-full border bg-[#FFFDFA] text-[#909396] border-[#909396] py-2 px-3 rounded-lg text-base"
                                                                    value={formData.shippingCharge}
                                                                    onChange={(e) =>
                                                                        setFormData({ ...formData, shippingCharge: e.target.value })
                                                                    }
                                                                />
                                                            </div>
                                                            <div className='pb-1'>
                                                                <input
                                                                    type="number"
                                                                    placeholder="Quantity sold"
                                                                    className="w-full border bg-[#FFFDFA] text-[#909396] border-[#909396] py-2 px-3 rounded-lg text-base"
                                                                    value={formData.quantitySold}
                                                                    onChange={(e) =>
                                                                        setFormData({ ...formData, quantitySold: e.target.value })
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className=" col-12 mt-8">
                                                        <h3 className="text-lg font-semibold mb-2">Costs</h3>
                                                        <p className="text-sm  mb-4 font-[400] sm:text-[18px] text-[16px] leading-relaxed">
                                                            Item cost is what your supplier charges you for the product. Shipping cost is what your supplier charges for delivery.
                                                        </p>
                                                        <div className="col-12 flex gap-2">
                                                            <div className="col-lg-6">

                                                                <input
                                                                    type="number"
                                                                    placeholder="Item cost"
                                                                    className=" border  w-full px-3 py-2 rounded-lg font-[400] text-base bg-[#FFFDFA] text-[#909396] border-[#909396]"
                                                                    value={formData.itemCost}
                                                                    onChange={(e) =>
                                                                        setFormData({ ...formData, itemCost: e.target.value })
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="col-lg-6">

                                                                <input
                                                                    type="number"
                                                                    placeholder="Shipping cost"
                                                                    className=" border bg-[#FFFDFA] text-[#909396] border-[#909396] w-full px-3 py-2 rounded-lg font-[400] text-base"
                                                                    value={formData.shippingCost}
                                                                    onChange={(e) =>
                                                                        setFormData({ ...formData, shippingCost: e.target.value })
                                                                    }
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>




                                                    <div className="mt-8">
                                                        <h3 className="text-lg font-semibold mb-2 lg:pb-[10px] pb-[5px]">Payment Method</h3>
                                                        <div className="items-center flex gap-4 ">
                                                            <label className="flex font-[400] sm:text-[18px] text-[16px] items-center text-base lg:pb-[10px] pb-[5px]  ">
                                                                <input
                                                                    type="radio"
                                                                    name="paymentMethod"
                                                                    value="PayPal"

                                                                    checked={formData.paymentMethod === "PayPal"}
                                                                    onChange={(e) =>
                                                                        setFormData({ ...formData, paymentMethod: e.target.value })
                                                                    }
                                                                    className="font-[400]"
                                                                />
                                                                <span className='ml-5'>  PayPal</span>
                                                            </label>
                                                        </div>
                                                        <div className="div">
                                                            <label className="flex font-[400] sm:text-[18px] text-[16px] items-center text-base lg:pb-[10px] pb-[5px]">
                                                                <input
                                                                    type="radio"
                                                                    name="paymentMethod"
                                                                    value="eBay"
                                                                    checked={formData.paymentMethod === "eBay"}
                                                                    onChange={(e) =>
                                                                        setFormData({ ...formData, paymentMethod: e.target.value })
                                                                    }

                                                                />
                                                                <span className='ml-5'> eBay Managed Payments</span>

                                                            </label>
                                                        </div>
                                                    </div>


                                                </div>


                                            </div>

                                        </div>
                                        <div className='col-lg-7 mb-4'>
                                            <div className='px-4 py-3'>
                                                <div className='d-flex align-items-center justify-between lg:pb-[20px] pb-[10px]'>
                                                    <div><p className='lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold '>Revenue :</p></div>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold ">£0</p></div>
                                                </div>
                                                <div className='!border-[#F3EDE6] border '></div>

                                                <div className='d-flex align-items-center justify-between  lg:pb-[20px] pb-[10px] '>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold lg:pt-[40px] pt-[20px]">Total costs:</p></div>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold ">£0</p></div>

                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Final value fee</p></div>
                                                    <div><p className=' text-[18px]  '>£0</p></div>
                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>PayPal fee</p></div>
                                                    <div><p className=' text-[18px]  '>£0</p></div>
                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Items cost (0 items × £0)</p></div>
                                                    <div><p className=' text-[18px]  '>£0</p></div>
                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Shipping cost (0 items × £0)</p></div>
                                                    <div><p className=' text-[18px]  '>£0</p></div>
                                                </div>
                                                <div className='!border-[#F3EDE6] border '></div>
                                                <div className='d-flex align-items-center justify-between pt-3 lg:pb-[20px] pb-[10px]'>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold lg:pt-[40px] pt-[20px]">Total profit:</p></div>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold ">£0</p></div>

                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Profit margin</p></div>
                                                    <div><p className=' text-[18px]  '>0%</p></div>
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

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[30px] overflow-hidden lg:pb-[50px] pb-[30px] bg-[#CCDFFF]">
                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="col-lg-5">
                                    <div className="row justify-start">

                                        <p className="lg:text-[2.5vw] text-[6vw] lg:leading-[2.5vw] leading-[7vw] font-semibold lg:pt-[30px] pt-[20px] text-[#0061FE]">Accounting for your ecommerce business from £71/m</p>
                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#0061FE]">We chat directly with your previous accountant to get all the information required, and transfer your accounting software subscription and data all in one go. Making your transition to Cloud BSS effortless.</p>


                                    </div>


                                    <div className="lg:pt-[0px] pt-[15px]">
                                        <button type="button" className="border border-dark text-[#0061FE] hover:bg-[#0061FE] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Get Started</button>
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

                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="item-1" className=' items-center'>
                                                <div className="col-lg-12 mb-4">

                                                    <div className="block   bg-white border border-white rounded-4 items-center p-6  ">
                                                        <AccordionTrigger className='items-center'>
                                                            <div className="flex items-center ">
                                                                <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw]  p-0 m-0   text-[#212833]">
                                                                    Insertion Fee
                                                                </p>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]   text-[#212833]">
                                                                        To sell an item on eBay, you create a listing using the Sell Your Item form. eBay UK charges an insertion fee for each item you list. The Insertion Fee is based on what you decide is the Starting Price of your item.</p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]   text-[#212833]">This fee is non-refundable, even if you don’t get to sell your item. The amount charged depends on whether you have a Shop subscription and the level of Shop you subscribe to if you do have one: Basic, Featured or Anchor.</p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]   text-[#212833]">Business sellers with a basic eBay account get limited zero insertion fee listings each month for most categories. After exceeding that allowance, each additional item that you list is subject to a fee of 30 pence.</p>

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
                                                                <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw]   lg:pl-[15px] pl-[5px] text-[#212833] p-0 m-0">
                                                                    Revenue and Profit
                                                                </p>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]   text-[#212833]">
                                                                        Revenue is the amount of income produced by selling your products or services. To calculate it multiply the number of items sold by the sales price of each item or the average service price.<br></br>
                                                                        <span className="text-[#0061FE]">Revenue = Sales × Average Price of Service or Sales Price</span></p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]   text-[#212833]">You figure out your total profit after you deduct all of the business expenses. This simplest profit formula when calculating profit for a single item is:<br></br>
                                                                        <span className="text-[#0061FE]">Profit = Price – Cost</span></p>

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]   text-[#212833]">To calculate your net profit margin, divide your net income by your total sales revenue.<br></br>
                                                                        <span className="text-[#0061FE]">Net Profit Margin = Net Income ÷ Total Sales</span></p>

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

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[80px] pb-[30px] overflow-hidden bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">EBAY FEES</button>
                        </div>
                        <div className="flex justify-center">
                            <div className="col-lg-5 ">
                                <p className="uppercase lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pt-[30px] pt-[20px]">Final value fees for business sellers</p>
                                <p className=" text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]  text-center  lg:pb-[30px] pb-[20px]">The table below provides the list of product categories with the final value fees for business sellers. For more information, visit the <Link href="https://www.ebay.co.uk/help/fees-billing/sell-fees-payments/store-selling-fees-managed-payments-sellers?id=4809#section4" className='text-black'><span className="underline ">official eBay website.</span></Link></p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className='col-lg-9'>
                                <div className="block  p-6 bg-[#FFFDFA] border border-[#CDC6C0] rounded-4  ">

                                    <div className="flex justify-start ">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1.1vw] text-[3.1vw] lg:leading-[1.2vw] leading-[4vw] font-medium p-0 m-0">Category</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1.1vw] text-[3.1vw] lg:leading-[1.2vw] leading-[4vw] font-medium p-0 m-0">Final Value Fee</p>
                                        </div>
                                    </div>
                                    <hr className="border-2 !border-[#CDC6C0] "></hr>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">Antiques</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">10.9%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] bg-[#F3EDE6] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0 ">Art (except specified subcategories)</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">10.9%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">Art NFTs</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">5%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] bg-[#F3EDE6] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0 ">Baby</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">10.9%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">Books, Comics & Magazines</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">9.9%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] bg-[#F3EDE6] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0 ">Business, Office & Industrial</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">11.9%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">Cameras & Photography (except specified subcategories)</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">9.9%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] bg-[#F3EDE6] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0 ">Clothes, Shoes & Accessories (except specified subcategories)</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">11.9%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">Coins</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">10.9%</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start lg:pb-[10px] pb-[10px] lg:pt-[10px] pt-[10px] bg-[#F3EDE6] lg:pl-[20px] pl-[10px]">
                                        <div className="col-lg-7">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0 ">Collectables (except specified subcategories)</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  p-0 m-0">10.9%</p>
                                        </div>
                                    </div>
                                    <div className="lg:pt-[40px] pt-[20px]">
                                        <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Show more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            
            <section>

            </section>

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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What are eBay fees?
                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">
                                                                eBay seller account fees consist of final value fees, insertion fees, and listing upgrade fees.</p>

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">When an item sells, a final value fee is applied based on the selling price and its category.</p>

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">An insertion fee is charged when you list a product in your store.</p>

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">Additionally, if you choose to enhance your listing with upgrades, an extra fee will be applied for each upgrade.
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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What are the costs associated with selling on eBay?</p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833] "> On eBay, private sellers can list items for free, but after using up the 1,000 free listings per month, an insertion fee of 35p per listing applies (or higher for eBay Shop subscribers). </p>.

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833] ">A final value fee is charged when an item sells. This fee is a percentage of the total sale price, including postage, handling, and any applicable charges. The percentage varies by category, but for most, it's 12.55%, plus a fixed £0.30 per order.</p>

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833] ">Listing upgrade fees depend on the specific features selected and the level of enhancement applied to the listing. </p>

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833] ">Additionally, depending on the payment method used, transaction fees apply. PayPal charges 2.9% plus 30p per transaction, while eBay’s Managed Payments system charges 12.8% plus 30p per transaction, generally resulting in slightly lower costs overall.



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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What happens if you don't pay eBay fees in the UK?
                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">eBay will deactivate your account and stop you from buying or selling things until you pay up.

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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What percentage does eBay take?
                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]   text-[#212833]  ">In most cases, standard selling fees are 10% of the total sales price as a final value fee, plus an insertion fee of $0.35. eBay.com sellers get 50 insertion fees for free each month and Store subscriptions can give you additional insertion fees.
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