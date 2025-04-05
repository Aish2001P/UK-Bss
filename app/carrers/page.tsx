import Image from "next/image";
import Header from "../Component/header";
import Footer from "../Component/footer";

export default function Home() {
    return (
        <>

            <Header />

            <section className="lg:px-[100px] px-[20px] lg:pt-[180px] pt-[100px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 relative  ">
                        <div className="lg:pb-[100px] pb-[50px]">
                            <div className=" relative flex justify-center">
                                <div className="col-lg-12">
                                    <Image className="img-responsive bg-content w-full lg:h-[80vh] h-[25vh]" src="/Images/carrer.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className=" flex justify-center">
                                <div className="col-lg-6 absolute bottom-[20%]  ">
                                    <p className="font-semibold lg:text-[2.8vw] text-[4.5vw] lg:leading-[3.2vw] leading-[5.5vw] text-center lg:pt-[130px] pt-[30px] text-[#FFFF]">Streamlined Online Invoicing</p>

                                    <div className=" lg:flex gap-4 lg:pb-[60px] pb-[50px] justify-center items-center ">
                                        <div className="lg:pb-[0px] pb-[10px]">
                                            <button type="button" className="border border-white hover:bg-gray-500 text-white hover:text-[#fff] font-medium !rounded-full text-sm sm: w-full px-5 py-2 text-center items-center">Get Started</button>
                                        </div>
                                        <div >
                                            <button type="button" className="border border-white text-white hover:bg-gray-500 hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 sm: w-full text-center items-center">Watch a demo</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[10px] overflow-hidden bg-[#F3EFE7]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[80px] pb-[60px]">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="col-lg-9 ">
                                        <p className="font-semibold lg:text-[2vw] text-[4.5vw] lg:leading-[3vw] leading-[5.5vw] lg:pt-[220px] pt-[30px] text-[#212833]">Who We Are</p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[10px] ">
                                            We are Cloud BSS - the innovators supporting visionaries and change-makers  globally. Cloud BSS simplifies commercial fintech so entrepreneurs can focus on improving their business, and making the world a more exciting place in the process.
                                        </p>
                                        <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[20px] pt-[10px] lg:pb-[0px] pb-[20px]">
                                            Cloud BSS are autonomous and entrepreneurial, we collaborate openly to discover new ways of doing things better. We care to develop each other as we follow our individual paths of growth, and our distributed teams have a shared goal; together creating something truly!
                                        </p>

                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <Image className="img-responsive w-full " src="/Images/carrer1.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[20px] pt-[20px] overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="lg:pb-[70px] pb-[50px]">

                            <div className="flex justify-center">
                                <div className="col-lg-5 ">
                                    <p className="font-semibold lg:text-[2.5vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center lg:pt-[100px] pt-[30px] text-[#212833]">Life more Cloud BSS, a word from our COO</p>
                                    <p className="text-[#232323] lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] text-center lg:pt-[10px] pt-[10px] ">
                                        When it comes to our company culture, don't just take our word for it, let us show you. These videos explore our team behind the scenes see how they make Cloud BSS a unique place to be. </p>

                                    <div className=" lg:flex gap-4 lg:pb-[200px] pb-[80px] justify-center items-center ">
                                        <div className="lg:pb-[0px] pb-[10px]">
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm sm: w-full px-5 py-2 text-center items-center">Get Started</button>
                                        </div>
                                        <div >
                                            <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 sm: w-full text-center items-center">Watch a demo</button>
                                        </div>
                                    </div>
                                    <p className="font-semibold lg:text-[2.2vw] text-[4.5vw] lg:leading-[2vw] leading-[5.5vw] text-center lg:pt-[30px] pt-[20px] text-[#212833]">Our international team is growing</p>

                                </div>
                            </div>

                            <div className="flex justify-center lg:pt-[70px] pt-[10px]">
                                <div className="col-lg-8 ">
                                    <div className="flex gap-20 justify-center">
                                        <div className="div">
                                            <p className="text-[#0061FE] font-bold lg:text-[5vw] text-[6vw] lg:leading-[3vw] leading-[5.5vw] text-center lg:pb-[10px] pb-[0px]">4</p>
                                            <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]">Countries</p>
                                        </div>
                                        <div className="div">
                                            <p className="text-[#0061FE] font-bold lg:text-[5vw] text-[6vw] lg:leading-[3vw] leading-[5.5vw] text-center lg:pb-[10px] pb-[0px]">500</p>
                                            <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]">Employees across the world</p>
                                        </div>
                                        <div className="">
                                            <p className="text-[#0061FE] font-bold lg:text-[5vw] text-[6vw] lg:leading-[3vw] leading-[5.5vw] text-center lg:pb-[10px] pb-[0px]">15</p>
                                            <p className="lg:text-[1.2vw] text-[3vw] lg:leading-[1.2vw] leading-[4vw]">Nationalities</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>

            <section className="overflow-hidden bg-[#FFF]">

                <div className="row ">
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-6 p-0 m-0">

                                <Image className="w-full h-100 object-cover" src="/Images/carrer2.png" alt="logo" width={1080} height={1080} />

                            </div>
                            <div className="col-lg-6 p-0 m-0">

                                <Image className="w-full h-100 object-cover" src="/Images/carrer3.png" alt="logo" width={1830} height={1080} />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-5 p-0 m-0">

                                <Image className="w-full h-100 object-cover" src="/Images/carrer4.png" alt="logo" width={1080} height={1080} />

                            </div>
                            <div className="col-lg-2 p-0 m-0">

                                <Image className="w-full h-100 object-cover" src="/Images/carrer5.png" alt="logo" width={1080} height={1080} />

                            </div>
                            <div className="col-lg-5 p-0 m-0">

                                <Image className="w-full h-100 object-cover" src="/Images/carrer6.png" alt="logo" width={1830} height={1080} />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-4 p-0 m-0">

                                <Image className="w-full h-100 object-cover" src="/Images/carrer7.png" alt="logo" width={1080} height={1080} />

                            </div>
                            <div className="col-lg-4 p-0 m-0">

                                <Image className="w-full h-100 object-cover" src="/Images/carrer8.png" alt="logo" width={1080} height={1080} />

                            </div>
                            <div className="col-lg-4 p-0 m-0">

                                <Image className="w-full h-100 object-cover" src="/Images/carrer9.png" alt="logo" width={1830} height={1080} />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] overflow-hidden ">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[130px] pt-[60px] sm:pb-[50px] pb-[10px] text-center ">
                        <div className="flex justify-center ">
                            <div className="col-lg-5">
                                <p className="lg:text-[2.5vw] text-[5vw] lg:leading-[3vw] leading-[6vw] font-bold">What We Value
                                </p>
                                <p className=" text-[#212833] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Our Cloud BSS values are the foundation for everything we do</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 lg:pt-[80px] pt-[10px] ">
                        <div className="row justify-center items-center">
                            <div className="col-lg-5 mb-4 order-lg-1 order-2">
                                <div className="flex lg:justify-center">
                                    <div className="col-lg-9 ">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Care</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">People are what matters most. We help and empower our clients and our team members. We keep promises and follow up on issues.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-5 mb-4  order-lg-2 order-1">
                                <div className="flex justify-center">
                                    <div className="col-lg-9 col-12">
                                        <Image className="img-responsive w-full" src="/Images/carrer10.png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <section className="lg:px-[100px] px-[20px] overflow-hidden ">
                <div className="col-lg-12 lg:pt-[80px] pt-[10px] ">
                    <div className="row justify-center items-center">

                        <div className="col-lg-5 mb-4  ">
                            <div className="flex justify-center">
                                <div className="col-lg-9 col-12">
                                    <Image className="img-responsive w-full" src="/Images/carrer11.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-4 ">
                            <div className="flex lg:justify-center ">
                                <div className="col-lg-9 ">
                                    <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Continuous improvement</p>
                                    <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">We always strive to be our best, and we always take responsibility and pride in the work we do. We seek to become better — as individuals, employees, teams, and as a company.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="lg:px-[120px] px-[20px] overflow-hidden">
                <div className="row  justify-center ">
                    <div className="col-lg-12 lg:pt-[80px] pt-[10px] ">
                        <div className="row justify-center items-center">
                            <div className="col-lg-5 mb-4 order-lg-1 order-2">
                                <div className="flex lg:justify-center">
                                    <div className="col-lg-9 ">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Transparency</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">We get further ahead and move faster when everyone knows where we are now, and where we're headed. We communicate our priorities, targets, progress, and challenges openly within the team.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-5 mb-4  order-lg-2 order-1">
                                <div className="flex justify-center">
                                    <div className="col-lg-9 col-12">
                                        <Image className="img-responsive w-full rounded-2" src="/Images/carrer12.png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="lg:px-[100px] px-[20px] overflow-hidden lg:pb-[70px] pb-[50px] ">
                <div className="row justify-center">

                    <div className="col-lg-12 lg:pt-[80px] pt-[10px]">
                        <div className="row justify-center items-center">
                            <div className="col-lg-5 mb-4  ">
                                <div className="flex justify-center">
                                    <div className="col-lg-9 col-12">
                                        <Image className="img-responsive w-full" src="/Images/carrer13.png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 mb-4 ">
                                <div className="flex lg:justify-center">
                                    <div className="col-lg-9 ">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Attention to detail</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Details matter — we know that little things can make a big difference and we build products and services with a precision that makes us stand out!
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>

            <section className="lg:px-[100px] px-[20px] lg:pt-[80px] pt-[50px] lg:pb-[60px] pb-[50px] overflow-hidden bg-[#F3EFE7]">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="lg:text-[2.5vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] text-center font-bold lg:pb-[20px] pb-[10px]">Our Jobs</p>

                    </div>
                    <div className="col-lg-12">
                        <div className="flex justify-center">
                            <div className="col-lg-9">

                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Senior Fullstack Engineer</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">Technology . Kuala Lumpur . Hybrid Remote</p>
                                <hr className=" border-1 "></hr>
                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Talent Acquisition Coordinator (3-6 Months)</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">People and Culture .  Kuala Lumpur . Fully Remote</p>
                                <hr className=" border-1 "></hr>
                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Copywriter</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">Marketing . Multiple locations . Hybrid Remote</p>
                                <hr className=" border-1 "></hr>
                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Bookkeeping Associate (SG)</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">Accounting and Audit . Kuala Lumpur . Hybrid Remote</p>
                                <hr className=" border-1 "></hr>
                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Financial Planning & Analyst (FP&A) Lead</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">Accounting and Audit  . Singapore . Hybrid Remote</p>
                                <hr className=" border-1 "></hr>
                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Financial Planning & Analyst (FP&A) Lead</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">Accounting and Audit . Kuala Lumpur . Hybrid Remote</p>
                                <hr className=" border-1 "></hr>
                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Accounting Executive (SG)</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">Accounting and Audit . Kuala Lumpur . Hybrid Remote</p>
                                <hr className=" border-1 "></hr>
                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Senior Product Designer</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">Engineering . Kuala Lumpur . Hybrid Remote</p>
                                <hr className=" border-1 "></hr>
                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Account Executive (HK)</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">Sales . Hong Kong . Hybrid Remote</p>
                                <hr className=" border-1 "></hr>
                                <p className=" lg:text-[1.2vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw] font-medium lg:pt-[10px] pt-[10px]">Account Executive (HK)</p>
                                <p className=" text-[#353535] lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]  ">Sales . Philippines . Fully Remote </p>

                            </div>

                        </div>
                        <div className=" flex justify-center ">
                            <button
                                type="button"
                                className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center group transition duration-300">
                                <div className="flex gap-2 items-center">
                                    <div>All jobs</div>
                                    <div className="p-0 m-0">
                                        <div className="w-6 h-6  rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" className="stroke-black group-hover:stroke-white transition duration-300">
                                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </button>

                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    );
}