import Image from "next/image";
import Header from "../Component/header";
import Footer from "../Component/footer";
import Link from "next/link";

export default function Home() {


    return (
        < >

            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[50px] pt-[100px] overflow-hidden bg-[#F3EFE7]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[20px] pb-[20px]">

                            <div className="flex justify-center">
                                <div className="col-lg-4 ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#212833]">Business insights from Cloud BSS Blog</p>
                                    </div>
                                    </div>

                                    <div className="flex justify-center">
                                    <div className="col-lg-6 ">
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] text-center lg:pt-[20px] pt-[10px] ">
                                        Our articles help you with navigating the intricacies of running a company in the UK. From checklists to roadmaps and clear explanations of bureaucratic rules, we provide you with all the essential information you need.</p>
                                </div>
                            </div>

                            <div className="flex justify-center lg:pt-[40px] pt-[20px]">
                                <div className="col-lg-10">
                                    <div className=" lg:flex gap-4 lg:pb-[40px] pb-[50px] justify-center items-center ">
                                        <div className="lg:pb-[0px] pb-[20px]">
                                           
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-4 py-2 text-center items-center">Money Talk</button>
                                        </div>
                                        <div className="lg:pb-[0px] pb-[20px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-4 py-2 text-center items-center">Incorporation</button>
                                        </div>
                                        <div className="lg:pb-[0px] pb-[20px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-4 py-2 text-center items-center">Better Business</button>
                                        </div>
                                        <div className="lg:pb-[0px] pb-[20px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-4 py-2 text-center items-center">Foreigner's Guide</button>
                                        </div>
                                        <div className="lg:pb-[0px] pb-[20px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-3 py-2 text-center items-center">News</button>
                                        </div>
                                        <div className="lg:pb-[0px] pb-[20px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-4 py-2 text-center items-center">That's BSS</button>
                                        </div>
                                        <div className="lg:pb-[0px] pb-[20px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-4 py-2 text-center items-center">Ecommerce</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px]  overflow-hidden bg-[#F3EFE7]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[100px] pb-[30px]">

                            <div className="flex justify-center">
                                <div className="col-lg-10 ">
                                    <div className="row ">
                                        <div className="col-lg-8 mb-4 ">
                                            <div className="block  relative bg-[#000] border rounded-4 shadow-sm    ">
                                                <div className="relative">
                                                    <Image className="img-responsive w-full opacity-75 rounded-4 " src="/Images/London.png" alt="logo" width={1830} height={750} />
                                                </div>
                                                <div className="absolute bottom-[10%]">
                                                    <div className="flex gap-4 lg:pl-[40px] pl-[10px] ">
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-gray-300 ">Money Talk  </p>
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-gray-300 ">16 MIN READ </p>
                                                    </div>
                                                    <p className="text-[#fff]  lg:text-[2vw] text-[3vw] lg:leading-[2.5vw] leading-[4vw] lg:pb-[20px] pb-[20px] font-medium lg:pl-[40px] pl-[10px]">Setting Up An Offshore Company in the UK</p>
                                                    <div className="lg:pl-[40px] pl-[10px] lg:pt-[310px] pt-[30px]">
                                                    <Link href="/blog-detail" className="text-black">
                                                    <button type="button" className="border-2 border-light text-[#fff] hover:bg-[#fff] hover:text-[#000] font-semibold !rounded-full text-sm px-4 py-2 text-center items-center group transition duration-300">
                                                       
                                                            <div className="flex gap-2 items-center">
                                                                <div>Read</div>
                                                                <div className="p-0 m-0">
                                                                    <div className="w-6 h-6  rounded">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"
                                                                            width="24"
                                                                            height="24"
                                                                            fill="none"
                                                                            className="stroke-white group-hover:stroke-black transition duration-300">
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
                                            </div>
                                        </div>

                                        <div className="col-lg-4 mb-4 ">
                                            <div className="block  p-3 bg-[#FFF] border rounded-4 shadow-sm    ">
                                                <div className="">
                                                    <Image className="img-responsive w-full " src="/Images/i4.png" alt="logo" width={1830} height={750} />
                                                </div>
                                                <div className="lg:h-[320px]">
                                                    <div className="flex gap-4 lg:pl-[10px] pl-[5px] lg:pt-[30px] pt-[20px]">
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-[#616161] ">Money Talk  </p>
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-[#616161] ">16 MIN READ </p>
                                                    </div>
                                                    <p className="text-[#000]  lg:text-[1.5vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pb-[20px] pb-[20px] font-medium lg:pl-[10px] pl-[5px]">Small Business Grants: What is available in UK this year</p>
                                                    <div className="lg:pl-[10px] pl-[5px] lg:pt-[90px] pt-[30px]">
                                                        <button type="button" className="border-2 border-dark hover:bg-[#000] hover:text-[#fff] font-semibold !rounded-full text-sm px-4 py-2 text-center items-center group transition duration-300">
                                                            <div className="flex gap-2 items-center">
                                                                <div>Read</div>
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
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-lg-4 mb-4 ">
                                            <div className="block  p-3 bg-[#FFF] border rounded-4 shadow-sm    ">
                                                <div className="">
                                                    <Image className="img-responsive w-full " src="/Images/i1.png" alt="logo" width={1830} height={750} />
                                                </div>
                                                <div className="lg:h-[320px]">
                                                    <div className="flex gap-4 lg:pl-[10px] pl-[5px] lg:pt-[30px] pt-[20px]">
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-[#616161] ">Money Talk  </p>
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-[#616161] ">16 MIN READ </p>
                                                    </div>
                                                    <p className="text-[#000]  lg:text-[1.5vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pb-[20px] pb-[20px] font-medium lg:pl-[10px] pl-[5px]">Small Business Grants: What is available in UK this year</p>
                                                    <div className="lg:pl-[10px] pl-[5px] lg:pt-[90px] pt-[30px]">
                                                        <button type="button" className="border-2 border-dark hover:bg-[#000] hover:text-[#fff] font-semibold !rounded-full text-sm px-4 py-2 text-center items-center group transition duration-300">
                                                            <div className="flex gap-2 items-center">
                                                                <div>Read</div>
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
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4 ">
                                            <div className="block  p-3 bg-[#FFF] border rounded-4 shadow-sm    ">
                                                <div className="">
                                                    <Image className="img-responsive w-full " src="/Images/i2.png" alt="logo" width={1830} height={750} />
                                                </div>
                                                <div className="lg:h-[320px]">
                                                    <div className="flex gap-4 lg:pl-[10px] pl-[5px] lg:pt-[30px] pt-[20px]">
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-[#616161] ">Money Talk  </p>
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-[#616161] ">16 MIN READ </p>
                                                    </div>
                                                    <p className="text-[#000]  lg:text-[1.5vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pb-[20px] pb-[20px] font-medium lg:pl-[10px] pl-[5px]">Small Business Grants: What is available in UK this year</p>
                                                    <div className="lg:pl-[10px] pl-[5px] lg:pt-[90px] pt-[30px]">
                                                        <button type="button" className="border-2 border-dark hover:bg-[#000] hover:text-[#fff] font-semibold !rounded-full text-sm px-4 py-2 text-center items-center group transition duration-300">
                                                            <div className="flex gap-2 items-center">
                                                                <div>Read</div>
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
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 mb-4 ">
                                            <div className="block  p-3 bg-[#FFF] border rounded-4 shadow-sm   ">
                                                <div className="">
                                                    <Image className="img-responsive w-full " src="/Images/i3.png" alt="logo" width={1830} height={750} />
                                                </div>
                                                <div className="lg:h-[320px]">
                                                    <div className="flex gap-4 lg:pl-[10px] pl-[5px] lg:pt-[30px] pt-[20px]">
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-[#616161] ">Money Talk  </p>
                                                        <p className="lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  text-[#616161] ">16 MIN READ </p>
                                                    </div>
                                                    <p className="text-[#000]  lg:text-[1.5vw] text-[3vw] lg:leading-[2vw] leading-[4vw] lg:pb-[20px] pb-[20px] font-medium lg:pl-[10px] pl-[5px]">Small Business Grants: What is available in UK this year</p>
                                                    <div className="lg:pl-[10px] pl-[5px] lg:pt-[90px] pt-[30px]">
                                                        <button type="button" className="border-2 border-dark hover:bg-[#000] hover:text-[#fff] font-semibold !rounded-full text-sm px-4 py-2 text-center items-center group transition duration-300">
                                                            <div className="flex gap-2 items-center">
                                                                <div>Read</div>
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
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="lg:pl-[40px] pl-[10px] lg:pt-[30px] pt-[20px] ">
                                            <button type="button" className="border-2 border-dark hover:bg-[#000] hover:text-[#fff]  !rounded-full text-sm px-5 py-2 text-center items-center font-semibold">
                                                <div className="flex gap-2 items-center">
                                                    <div>Load More</div>

                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

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
                                            <button type="button" className="border border-dark text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center items-center">Subscribe</button>
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