import Image from 'next/image';
import Header from "@/app/Component/header";
import Footer from "@/app/Component/footer";
export default function Page() {
    return (
        <>
            <Header />
            <section className="lg:px-[80px] px-[20px] lg:pt-[150px] pt-[90px] overflow-hidden lg:pb-[60px] pb-[30px] bg-[#FFF]">

                <div className="row">
                    <div className="col-lg-12 ">



                        <div className="lg:pb-[60px] pb-[30px] text-center">

                            <p className="lg:text-[2.8vw] text-[5vw] lg:leading-[3.2vw] leading-[6vw] font-bold lg:pt-[30px] pt-[20px]">About Us</p>
                            <div className="flex  justify-center">
                                <div className="col-lg-9 ">
                                    <p className="lg:text-[1.1vw] text-[3vw]  text-center lg:leading-[2vw] leading-[4vw] lg:pt-[8px] pt-[5px]">We believe that entrepreneurs are society’s problem solvers. They see opportunities in complexities and drive us towards progress. Cloud BSS doesn’t want entrepreneurs to be distracted from the important search for the best solutions. By letting us handle all the routine tasks, entrepreneurs can focus on driving their business forward.</p>
                                </div>
                            </div>
                        </div>
                        <Image className="img-responsive w-full " src="/Images/about.png" alt="logo" width={1830} height={750} />
                    </div>
                </div>


            </section >
            <section className=" lg:px-[80px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden lg:pb-[60px] pb-[30px] bg-[#F3EDE6]">
                <div className="row">
                    <div className="col-lg-12 lg:flex items-center">
                        <div className="col-lg-8">
                            <button className='text-[#276EF1] font-medium lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] '>How it started</button>
                            <div className="col-lg-6 lg-order-1 order-2">
                                <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px] ">Talent is everywhere. But opportunity is not.</p>

                            </div>
                            < div className="col-lg-8">
                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pt-[20px] pt-[10px] ">Cloud BSS is on a mission to help 1B people turn their dream idea into their dream US  business and democratize access to the US financial ecosystem.</p>
                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw]  lg:pt-[20px] pt-[10px] ">With our Business-in-a-Box™ solution, we can single-handedly increase entrepreneurship globally by making it click button easy to start a US business, from anywhere in the world.</p>
                                <div className="flex gap-2">
                                    <div className="col-lg-3 mb-4">
                                        <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px] ">10k+</p>
                                        <p className='lg:text-[1vw] text-[3vw]'>Happy customers</p></div>
                                    <div className="col-lg-3">
                                        <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px] ">1,200+</p>
                                        <p className='lg:text-[1vw] text-[3vw]'>5 star reviews</p></div>
                                    <div className="col-lg-3">
                                        <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px] ">175+</p>
                                        <p className='lg:text-[1vw] text-[3vw]'>Countries</p></div>
                                    <div className="col-lg-3">
                                        <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] font-semibold lg:pt-[20px] pt-[10px] ">6</p>
                                        <p className='lg:text-[1vw] text-[3vw]'>Continents</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 lg-order-2 order-1">
                            <Image className="img-responsive w-full " src="/Images/about1.png" alt="logo" width={1830} height={750} />
                        </div>
                    </div>
                </div>

            </section>
            <section className="lg:px-[100px] px-[20px] overflow-hidden ">
                <div className="row justify-center">
                    <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[30px] sm:pb-[50px] pb-[10px] text-center ">
                        <div className="flex justify-center ">
                            <div className="col-lg-7">
                                <p className=" text-black lg:text-[2vw] font-semibold text-[4vw] lg:leading-[2vw] leading-[4vw]">Our mission is to enable entrepreneurs to accelerate positive changes</p>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 lg:pt-[80px] pt-[10px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-lg-12">
                                    <Image className="img-responsive w-full" src="/Images/about2.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Building a better future for the entrepreneurs</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">We believe that in years entrepreneurs will know that administrative routine is not their job. They will not even consider taking it upon themselves. Cloud BSS stands for freedom from this routine and working to bring this future closer.
                                        </p>




                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="lg:px-[120px] px-[20px] pb-4 overflow-hidden">
                <div className="row  justify-center ">
                    <div className="col-lg-10 ">
                        <div className="lg:pt-[80px] pt-[10px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2">
                                    <div className="flex lg:justify">
                                        <div className="col-lg-9 ">
                                            <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Keeping transparency as a key-value</p>
                                            <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Cloud BSS makes communication as open as possible and never refuses feedback from our customers and teammates. We believe it is the best way to make a positive change.
                                            </p>


                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/about3.png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:px-[100px] px-[20px] overflow-hidden ">
                <div className="row justify-center">

                    <div className="col-lg-10 lg:pt-[80px] pt-[10px]">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="col-lg-12">
                                    <Image className="img-responsive w-full" src="/Images/about2.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                            <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                                <div className="flex lg:justify-end">
                                    <div className="col-lg-9">
                                        <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Improving our services and product continuously</p>
                                        <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">We are a team of professionals that always strive to become better — as individuals, employees, business partners, and a company. Cloud BSS never stops seeking a faster and better-quality way to work.
                                        </p>




                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="lg:px-[120px] px-[20px] pb-4 overflow-hidden">
                <div className="row  justify-center ">
                    <div className="col-lg-10 ">
                        <div className="lg:pt-[80px] pt-[10px]">
                            <div className="row ">
                                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2">
                                    <div className="flex lg:justify">
                                        <div className="col-lg-10 ">
                                            <p className="text-[#010202]   font-semibold lg:text-[2vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] ">Taking details into account</p>
                                            <p className="text-[#353535]  lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Details are important — only through paying attention and precisely follow the process we can see the big picture and spot opportunities to improve.
                                            </p>


                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1">
                                    <div className="col-lg-12 ">
                                        <Image className="img-responsive w-full" src="/Images/about3.png" alt="logo" width={1830} height={750} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:px-[80px] px-[20px] lg:pt-[80px] pt-[40px] overflow-hidden lg:pb-[80px] pb-[30px] ">
                <div className="lg:flex justify-center ">
                    <div className="col-lg-10 border  rounded-2xl bg-[#212833] ">
                        <div className="lg:flex lg:pt-[50px] pt-[20px] ">
                            <div className="col-lg-6">
                            <div className="lg:px-[50px] px-[20px] lg:pt-[100px] pt-[40px] col-lg-11">
                                <p className="text-white   font-semibold lg:text-[2vw] text-[5vw] lg:leading-[2.5vw] leading-[6vw] ">Excited to join our team?</p>
                                <p className="text-white   lg:text-[0.9vw] text-[3.5vw] lg:leading-[1.2vw] leading-[4vw] lg:pb-[20px] pb-[10px]">We invite you to join our team to help us build a Business-in-a-Box™. Let’s Cloud Bss it.</p>
                               
                                <button type="button" className="flex border-light mb-4 border-2 border-light text-[#fff] hover:bg-[#fff] hover:text-[#000] font-semibold !rounded-full text-sm px-4 py-2 text-center items-center group transition duration-300 ">See Open Roles
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"  fill="none" className="stroke-white group-hover:stroke-black transition duration-300">

                                        <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                   
                                </button>
                               
                            </div>
                            </div>
                            <div className="col-lg-6 flex justify-end">
                                <div className="col-lg-8">
                                    <Image className="img-responsive w-full" src="/Images/about4.png" alt="logo" width={1830} height={750} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="lg:px-[80px] px-[20px] lg:pt-[80px] pt-[40px] lg:pb-[60px] pb-[30px] overflow-hidden bg-[#050506]">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-9">
                            <div className="col-lg-7">
                              <div className="row justify-start">
            
                                <p className="lg:text-[2.5vw] text-[4vw] lg:leading-[2.5vw] leading-[5vw] font-semibold lg:pt-[30px] pt-[20px] text-[#FFF]">Get tips on how to run your business smarter</p>
                                <p className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] lg:pt-[10px] pt-[5px] lg:pb-[10px] pb-[5px] text-[#ABABAB]">Learn crucial tips on how to save money and build a flourishing business, with real entrepreneurs sharing their own experiences.</p>
            
            
                              </div>
                              <div className="lg:flex gap-4 pt-4 mb-4">
                                <div >
                                  <input type="text" id="text" className="bg-white rounded-full px-5 py-2 text-black " placeholder="Email address" required></input>
                                </div>
                                <div className="lg:pt-[0px] pt-[10px]">
                                  <div>
                                    <button type="button" className="border border-dark text-[#000] bg-[#fff] hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-md px-5 py-2 text-center  items-center">Subscribe</button>
                                  </div>
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
                  <Footer/>


        </>
    )
}