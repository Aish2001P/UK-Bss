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

    const [open, isOpen] = useState(false);
    const toggleContent = () => {
        isOpen(!open)
    }

    return (
        <>

            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[100px] pb-[50px]">

                            <div className="flex justify-center">
                                <div className="col-lg-5 ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">Amazon UK Seller Fee Calculator</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        This calculator is designed to help UK sellers calculate their net profits from Amazon-based sales through a seller fulfilment method. This is not an official Amazon calculator, but it’ll help to price your items. For more clarity, consult our ecommerce-specialised accountants.</p>



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



                                                </div>


                                            </div>

                                        </div>
                                        <div className='col-lg-7 mb-4'>
                                            <div className='px-4 py-3'>
                                                <div className='d-flex align-items-center justify-between lg:pb-[20px] pb-[10px]'>
                                                    <div><p className='lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold '>Revenue :</p></div>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold ">£0</p></div>
                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Item price, total</p></div>
                                                    <div><p className=' text-[18px]  '>£0</p></div>
                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Shipping charge, total</p></div>
                                                    <div><p className=' text-[18px]  '>£0</p></div>
                                                </div>
                                                <div className='!border-[#F3EDE6] border '></div>

                                                <div className='d-flex align-items-center justify-between  lg:pb-[20px] pb-[10px] '>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold lg:pt-[40px] pt-[20px]">Total costs:</p></div>
                                                    <div><p className="lg:text-[2vw] text-[4vw] lg:leading-[2vw] leading-[5vw] font-semibold ">£0</p></div>

                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Item costs, total</p></div>
                                                    <div><p className=' text-[18px]  '>£0</p></div>
                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Item cost</p></div>
                                                    <div><p className=' text-[18px]  '>£0</p></div>
                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Shipping cost</p></div>
                                                    <div><p className=' text-[18px]  '>£0</p></div>
                                                </div>
                                                <div className='d-flex align-items-center justify-between'>
                                                    <div><p className=' text-[18px] '>Referral fee</p></div>
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
                                                    <div className="block   bg-white border border-white rounded-4 items-center p-6 ">
                                                        <AccordionTrigger className='items-center'>
                                                            <div className="flex items-center ">
                                                                <div className="flex items-center">
                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[15px] pl-[5px] text-[#212833] p-0 m-0">
                                                                        Insertion Fee
                                                                    </p>
                                                                </div>
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
                                                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]  lg:pl-[15px] pl-[5px] text-[#212833] p-0 m-0">
                                                                    Revenue and Profit
                                                                </p>
                                                            </div>

                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="lg:flex justify-between">
                                                                <div className="col-lg-6">

                                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]   text-[#212833]">
                                                                        Revenue is the amount of income produced by selling your products or services. To calculate it multiply the number of items sold by the sales price of each item or the average service price.<br></br>
                                                                        <span className="text-[#fff]">Revenue = Sales × Average Price of Service or Sales Price</span></p>

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

                <div className="flex w-full overflow-x-auto">
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <button type="button" className="border border-dark  font-medium !rounded-full text-md px-5 py-2 text-center items-center uppercase">Amazon fees</button>
                        </div>
                        <div className="flex justify-center">
                            <div className="col-lg-5 ">
                                <p className="uppercase lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pt-[30px] pt-[20px]">Category referral fees</p>
                                <p className=" text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]  text-center  lg:pb-[30px] pb-[20px]">When selling on Amazon, partners must pay a referral fee calculated as a percentage of the total sales price. This includes item price, delivery, and gift wrapping charges. Amazon deducts this fee from the total sales price.</p>
                            </div>
                        </div>
                        <div className="flex justify-center overflow-x-auto w-full">
                            <div className='col-lg-9'>
                                <div className="row p-6 bg-[#FFFDFA] border border-[#CDC6C0] rounded-4  ">

                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1.1vw] text-[3.1vw] lg:leading-[1.5vw] leading-[4vw] font-medium p-0 m-0">Category</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1.1vw] text-[3.1vw] lg:leading-[1.5vw] leading-[4vw] font-medium p-0 m-0">Referral fee (including the digital
                                                services tax)</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1.1vw] text-[3.1vw] lg:leading-[1.5vw] leading-[4vw] font-medium p-0 m-0">Per-item minimum referral fee</p>
                                        </div>
                                    </div>
                                    <hr className="border-2 !border-[#CDC6C0] "></hr>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Amazon Device Accessories</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">45.9%</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Automotive and Powersports</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3% for the portion of the total sales price
                                                up to £45.00</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 9.18% for any portion of the total sales price
                                                greater than £45.00</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Baby Products</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 8.16% for products with a total sales price up to £10.00</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3% for products with a total sales price
                                                greater than £10.00</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Backpacks and Handbags</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Beauty, Health, and Personal Care</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 8.16% for products with a total sales price up to £10.00</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3% for products with a total sales price
                                                greater than £10.00</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Beer, Wine, and Spirits</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">10.2%</p>

                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Books</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3%</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• And a closing fee of £0.50 per item sold</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">Not applicable</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Business, Industrial, and Scientific Supplies</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Compact Appliances</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6] ">
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Clothing and Accessories</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">For Fulfilment by Amazon (FBA) and Seller</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Fulfilled Prime selections:</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3% for the portion of the total sales price
                                                up to £40.00</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 7.14% for any portion of the total sales price
                                                greater than £40.00</p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">For all other selections:
                                            </p>
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3% flat fee</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                        </div>
                                    </div>


                                    {open && (
                                        <>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Commercial Electrical and Energy Supplies</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">12.24%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Computers</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">	7.14%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Consumer Electronics</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">7.14%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Cycling Accessories</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">8.16%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Electronic Accessories</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3% for the portion of the total sales price up to ₤100.00</p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 8.16% for any portion of the total sales price greater than ₤100.00</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Eyewear</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">	15.30%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Footwear</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Full-Size Appliances</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">7.14%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Furniture</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3% for the portion of the total sales price up to ₤175.00</p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 10.2% for any portion of the total sales price greater than £175.00</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Grocery and Gourmet</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 8.16% for products with a total sales price up to £10.00</p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3% for products with a total sales price greater than £10.00</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">Not applicable</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Handmade</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">12.24%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Home and Kitchen</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Jewelry</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 20.4% for the portion of the total sales price up to £225.00
                                                    </p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0"> • 5.1% for any portion of the total sales price greater than £225.00</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Lawn and Garden</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>

                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Luggage</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Mattresses</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Music, Video, and DVD</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3%

                                                    </p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• And a closing fee of £0.50 per item sold</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">Not applicable</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Musical Instruments and AV Production</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">12.24%</p>

                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Office Products</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Pet Products</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Software</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3%

                                                    </p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• And a closing fee of £0.50 per item sold</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">Not applicable</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Sports and Outdoors</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>

                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Tyres</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">7.14%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Tools and Home Improvement</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">13.26%</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Toys and Games</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%

                                                    </p>

                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Video Games - Games and Accessories</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3%
                                                    </p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]"> • And a closing fee of £0.50 per item sold</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">Not applicable</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Video Game Consoles</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 8.16%</p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0"> • And a closing fee of £0.50 per item sold</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">Not applicable</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] bg-[#F3EDE6]">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Watches</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 15.3% for the portion of the total sales price up to £225.00</p>
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">• 5.1% for any portion of the total sales price greater than £225.00</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between lg:pl-[20px] pl-[10px] lg:pb-[20px] pb-[10px] lg:pt-[20px] pt-[10px] ">
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Everything else</p>
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">15.30%</p>

                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25</p>
                                                </div>
                                            </div>

                                        </>
                                    )}






                                    <div className="lg:pt-[40px] pt-[20px]">
                                        <button type="button" onClick={toggleContent} className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center "  >  {open ? "Show Less" : "Learn More"} </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* <div className="flex justify-center">
                            <div className='col-lg-10 '>
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full px-4 flex-grow flex-col ">
                                            <div className="block  lg:m-4 lg:p-4 w-full overflow-x-auto  bg-[#FFFDFA] border border-[#CDC6C0] rounded-4">
                                                <table className="w-full ">
                                                    <thead>
                                                        <tr>
                                                     
                                                            <th className="lg:text-[1.1vw] text-[3.1vw] lg:leading-[1.5vw] leading-[4vw] font-medium  lg:pl-[20px] pl-[10px] ">Category </th>
                                                            <th className="lg:text-[1.1vw] text-[3.1vw] lg:leading-[1.5vw] leading-[4vw] font-medium">Referral fee (including the digital
                                                                services tax)</th>
                                                            <th className="lg:text-[1.1vw] text-[3.1vw] lg:leading-[1.5vw] leading-[4vw] font-medium ">Per-item minimum referral fee</th>
                                                           
                                                             </tr>
                                                            
                                                            
                                                    </thead>
                                                    <hr className="border-2 !border-[#CDC6C0] "></hr>
                                                    <tbody>
                                                   
                                                        <tr >
                                                            <td className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">Amazon Device Accessories</td>
                                                            <td  className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0">45.9%</td>
                                                            <td className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] p-0 m-0 lg:pl-[20px] pl-[10px]">£0.25 </td>
                                                        </tr>
                                                       
                                                        <tr className='bg-[#F3EDE6] px-3'>
                                                            <td className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Automotive and Powersports</td>
                                                            <td className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] !words-break ">• 15.3% for the portion of the total sales price up to £45.00 </td>
                                                            <td className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">• 9.18% for any portion of the total sales price greater than £45.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-md px-6 py-3 ">Table col 3 </td>
                                                            <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                                            <td className="text-md px-6 py-3">Lorem ipsum dolor </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div> */}
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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">What is the difference between Amazon seller fees and FBA fees?

                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#212833]  ">
                                                                Amazon seller fees include various charges related to selling on the platform, such as referral fees, closing fees, and subscription fees. FBA fees specifically apply to storage, fulfillment, and additional services provided through the Fulfilled by Amazon (FBA) program.</p>



                                                        </div>

                                                    </div>
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <div className="col-lg-12 mb-4">
                                            <div className="block  p-6 bg-white border border-white rounded-4 shadow-md  ">
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0 ">What is the Amazon seller fee calculator?
                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#212833] ">The Amazon seller fee calculator is a tool offered by Amazon to help sellers estimate the costs of selling their products. It considers factors like product category, selling price, and fulfillment method to generate an estimated fee breakdown. </p>.

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

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#212833]  ">By analyzing product costs, sellers can determine their profit margin, a key performance indicator (KPI). Profit margin represents the difference between revenue and expenses and is calculated as profit divided by sales, expressed as a percentage.
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
                                                <AccordionTrigger> <p className=" lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[20px] pt-[10px] lg:pl-[20px] pl-[5px] p-0 m-0">How much are Amazon seller fees?

                                                </p></AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="lg:flex justify-between">
                                                        <div className="col-lg-12">

                                                            <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  text-[#212833]  ">Amazon seller fees depend on factors like product category, selling plan (Individual or Professional), and fulfillment method (FBA or FBM). Typically, sellers incur referral fees, closing fees, and potentially other charges based on their specific selling conditions.
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