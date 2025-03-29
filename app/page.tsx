import Image from "next/image";
import Header from "./Component/header";
import Footer from "./Component/footer";


export default function Home() {
  return (
    <>
      <Header />
      <section className="lg:px-[100px] px-[20px] lg:pt-[200px] pt-[150px] overflow-hidden bg-[#F3EFE7]">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] ">
              <div className="row justify-center  ">
                <div className="col-lg-4 col-md-12  ">
                  <div className="flex justify-center">
                  <button type="button" className="text-black bg-transparent border border-black focus:outline-none  hover:bg-gray-100  font-medium rounded-5 text-md py-2 px-4  flex items-center justify-center ">
                    <div className="flex gap-2 items-center">
                      <Image className="img-responsive w-15" src="/Images/photo.svg" alt="logo" width={1830} height={750} />
                      <p className="p-0 m-0 justify-center lg:text-[0.9vw] text-[3vw] lg:leading-[1vw] leading-[3vw]">Welcome to CloudBSS</p>
                    </div>
                  </button>
                  </div>

                </div>
              </div>
              <div className="col-lg-12">
                <p className="font-bold lg:text-[3vw] text-[4.5vw] lg:leading-[3vw] leading-[5.5vw] lg:pt-[20px] pt-[30px] text-[#212833]">Simplifying Business, Enhancing Smarter Solutions, and Reducing Stress
                </p>
                <div className=" lg:flex justify-center gap-3 lg:pt-[20px] pt-[10px] lg:pb-[20px] pb-[10px] ">
                  <div className="lg:pb-[0px] pb-[10px] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]" >
                  <button type="button" className=" border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full sm: w-full text-sm px-5  py-2 text-center items-center ">Get Started</button>
                  </div>
                  <div className="lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">
                  <button type="button" className=" sm: w-full border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm px-5 py-2 text-center items-center">Schedule a Call</button>
                  </div>
                </div>
              </div>
              <div className="sm:lg-[30px] pt-[20px]">
                <Image className="img-responsive w-full" src="/Images/image .png" alt="logo" width={1080} height={1080} />
              </div>
              <div className="col-lg-12 flex justify-center">
                <div className="col-lg-6">
                  <div className="lg:pt-[50px] pt-[30px] lg:pb-[50px] pb-[10px]">
                    <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">Our Services</p>
                    <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold  ">Let Us Manage the Numbers, So You Can Focus on Expanding</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-lg-12 lg:pb-[50px] pb-[20px]">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="block p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[320px] ">
                <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium">Accounting Services <span className="text-[#0073FD]"><br></br>from £65</span></p>
                <p className="text-[#616161] font-medium lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw]  sm:pt-[10px] pt-[5px] sm:pb-[50px] pb-[10px]"> Get a personal accountant, accounting software, and bookkeeping all in one convenient plan. Focus on growing your business while we take care of your financial needs.</p>

                <button type="button" className="border border-dark  hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm w-full py-1 text-center items-center">Go to Accounting</button>


              </div>
            </div>
            <div className="col-lg-4  mb-4">
              <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[320px] ">
                <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium">Ecommerce  <br></br> Accounting <span className="text-[#0073FD]">from £65</span></p>
                <p className="text-[#616161] font-medium lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] sm:pt-[10px] pt-[5px] sm:pb-[30px] pb-[10px]">Custom accounting solutions designed for ecommerce businesses. We seamlessly integrate with your sales platform, manage international VAT returns, and ensure compliance, so you can focus on scaling up.</p>
                <button type="button" className="border border-dark hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm w-full py-1 me-2 mb-2">Go to Ecommerce</button>


              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="block  p-6 bg-white border border-white rounded-4 shadow-sm lg:h-[320px] ">
                <p className="lg:text-[1.5vw] text-[4vw] lg:leading-[1.5vw] leading-[5vw] font-medium">Company Formation  <span className="text-[#0073FD]"><br></br>from £50</span></p>
                <p className="text-[#616161] font-medium lg:text-[1vw] text-[3vw] lg:leading-[1vw] leading-[4vw] sm:pt-[10px] pt-[5px] sm:pb-[50px] pb-[5px]"> Launch your business the right way with comprehensive incorporation services, bank accounts, and registered addresses. Everything you need to get started and grow with confidence.
                </p>
                <button type="button" className="border border-dark  hover:bg-[#000] hover:text-[#fff] font-medium !rounded-full text-sm w-full py-1 text-center items-center">Go to Incorporation</button>
                

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="lg:px-[100px] px-[20px]  ">
        <div className="row justify-center">
          <div className="col-lg-12 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[30px] sm:pb-[50px] pb-[10px] text-center ">
            <div className="flex justify-center ">
              <div className="col-lg-5">
                <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">WHO WE HELP</p>
                <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold"> For Business Owners Who Want to Focus on Their Strengths
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-10 lg:pt-[80px] pt-[10px]">
            <div className="row ">
              <div className="col-lg-6">
                <div className="col-md-12">
                  <Image className="img-responsive w-full" src="/Images/image 1.png" alt="logo" width={1830} height={750} />
                </div>
              </div>
              <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                <div className="flex lg:justify-end">
                  <div className="col-lg-10">
                    <p className="text-[#010202]   font-medium lg:text-[1.7vw] text-[4vw] lg:leading-[2vw] leading-[5vw] ">Solo Founders:</p>
                    <p className="text-[#353535]  lg:text-[1.3vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] "> Simplify your financial tasks and free up time to concentrate on expanding your business.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section className="lg:px-[120px] px-[20px] overflow-hidden">
        <div className="row  justify-center ">
          <div className="col-md-10 ">
            <div className="lg:pt-[80px] pt-[10px]">
              <div className="row ">
                <div className="col-lg-6 lg:pt-[160px] pt-[20px] order-lg-1 order-2 ">
                  <div className="col-lg-10 justify-start">
                    <p className="text-[#010202]   font-medium lg:text-[1.7vw] text-[4vw] lg:leading-[2vw] leading-[5vw] ">Small & Medium Businesses:
                    </p>
                    <p className="text-[#353535]  lg:text-[1.3vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] "> Reliable services tailored for companies seeking flexibility, dependability, and top-notch quality.
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

      <section className="lg:px-[120px] px-[20px] overflow-hidden lg:pb-[70px] pb-[20px]">
        <div className="row  justify-center ">
          <div className="col-md-10 lg:pt-[80px] pt-[10px]">
            <div className="row ">
              <div className="col-lg-6">
                <div className="col-lg-12">
                  <Image className="img-responsive w-full" src="/Images/image 3.png" alt="logo" width={1830} height={750} />
                </div>
              </div>
              <div className="col-lg-6 lg:pt-[160px] pt-[20px]">
                <div className="flex lg:justify-end">
                  <div className="col-lg-10">
                    <p className="text-[#010202]   font-medium lg:text-[1.7vw] text-[4vw] lg:leading-[2vw] leading-[5vw] "> Expanding Companies: </p>
                    <p className="text-[#353535]  lg:text-[1.3vw] text-[3vw] lg:leading-[1.5vw] leading-[4vw] ">Receive the support necessary to scale in the UK, with expert guidance and streamlined solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-[100px] px-[20px]  overflow-hidden bg-[#F3EFE7]">
        <div className="row justify-center">

          <div className="col-md-5 lg:text-[1vw] text-[2vw] lg:leading-[1vw] leading-[3vw] lg:pt-[80px] pt-[30px] sm:pb-[50px] pb-[10px] text-center ">
            <p className="uppercase text-[#353535] lg:text-[1vw] text-[3vw] lg:leading-[1.5vw] leading-[3vw]">WHY CHOOSE US</p>
            <p className="lg:text-[1.8vw] text-[4.5vw] lg:leading-[2.5vw] leading-[5.5vw] font-bold">From Start to Ongoing Success, We’re Here for You
            </p>
          </div>
          <div className="col-lg-10 ">
            <div className="lg:pb-[90px] pb-[50px]">
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
                  <div className="col-lg-12 mb-4">
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


      <Footer />

    </>
  );
}
