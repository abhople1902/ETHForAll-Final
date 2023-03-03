import React from 'react';

const Connection = () => {
  return (
    <div>


      <section className="bg-[#121314] items-center justify-center contents">
        <div className="py-8 px-4 mx-auto  mb-48 max-w-screen-xl text-center lg:py-16  lg:px-12">

          <p className=" text-2xl sm:text-5xl text-center font-[poppins] text-white">Stay connected with us</p>

          <div className="w-full flex flex-col justify-center">
            <div className="relative p-12 w-fit md:w-full max-w-lg md:max-w-4xl sm:mx-auto">
              <div className="overflow-hidden z-0 rounded-full relative p-1  shadow-box-sm">
                <form role="form"  className="md:h-16 relative flex z-50 bg-[#121314]  shadow-box-sm  rounded-full ">
                  <input type="text" placeholder="Enter your email here" className="bg-[#121314] ml-8 font-[poppins] w-2/3 rounded-full flex-1 py-4 focus:outline-none" />
                  <button className="-ml- bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] text-white rounded-full font-normal lg:text-2xl  px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none md:tracking-widest md:w-1/4 font-[poppins]">Subscribe</button>
                </form>
              
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Connection;
