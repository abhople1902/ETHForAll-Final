import React from "react";
import Image from "next/image";
import work from "../components/assets/work.png";

const WorkingArea = () => {
  return (
    <div>
      <section className="bg-[#121314] md:-mt-[12%] -mt-0  items-center justify-center flex">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-12">
          

          <h1 className="mb-4 text-4xl interfont font-bold tracking-tight leading-none  md:text-5xl lg:text-4xl text-white">
            STRUCTURE OF INVESTMENT BANKING
          </h1>
          <p className="mb-8 text-lg font-normal interfont lg:text-xl sm:px-16 xl:px-48 text-gray-400">
            In Today's world Everyone Should Invest In Mutual It is mainly
            divided into three levels.
          </p>
        
          <div className="flex flex-flex mb-8 lg:mb-16 sm:flex-row justify-center sm:space-y-0 sm:space-x-4">
            <div className="md:w-3/4 w-full md:py-2 md:m-0 m-4 rounded-lg bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md">
              <div className="p-5 text-center ">
                <Image className="" src={work} />
              </div>
              <div>
              
                <div className="container p-8 text-center text-[#CAC7D6]  py-8 mx-auto">
                  <div className="flex flex-wrap -m-2 md:-m-4 text-center">
                    <div className="p-3 sm:w-1/2 lg:w-1/3 hover:scale-110 transition duration-300 ease-in-out">
                      <div className=" rounded-lg w-full bg-[#303131] shadow-[#303131] shadow-md h-72">
                        <div className="p-4">
                          <h2 className="text-white text-center text-sm md:text-xl  interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                          
                            Front Office <br />{" "}
                            <span className="text-white"> </span>
                          </h2>
                        </div>
                        <div className="p-5 text-left w-full ">
                          {/* <Image src={card_1} /> */}
                          <h2 className="text-white text-center text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                            <span className="text-white">
                            People in this division face customers directly. It is a revenue generating division. Activities include advisory services on merger & acquisitions, underwriting, trading, and research service.
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 sm:w-1/2 lg:w-1/3 hover:scale-110 transition duration-300 ease-in-out">
                      <div className=" rounded-lg w-full bg-[#303131] shadow-[#303131] shadow-md h-72">
                        <div className="p-4">
                          <h2 className="text-white text-center text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                          Middle Office      </h2>
                        </div>
                        <div className="p-5 text-left w-full ">
                          {/* <Image src={card_2} /> */}
                          <h2 className="text-white text-center text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                            <span className="text-white">
                            People in this division are responsible for information technology and risk management related services
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 sm:w-1/2 lg:w-1/3 hover:scale-110 transition duration-300 ease-in-out">
                      <div className=" rounded-lg w-full bg-[#303131] shadow-[#303131] shadow-md h-72">
                        <div className="p-4">
                          <h2 className="text-white text-center text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">Back Office{" "}
                          </h2>
                        </div>
                        <div className="p-5 text-left w-full ">
                          {/* <Image src={card_3} /> */}
                          <h2 className="text-white text-center text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">
                            <span className="text-white">
                            Back office staff deals with customer services, human resources, office management, staff payroll, etc
                            </span>
                          </h2>
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
    </div>
  );
};

export default WorkingArea;
