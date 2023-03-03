import React from 'react';
import Image from 'next/image'
import card_1 from '../components/assets/card-1.jpg'
import card_2 from '../components/assets/card-2.jpg'
import card_3 from '../components/assets/card-3.jpg'
import card_4 from '../components/assets/card-4.jpg'
import Link from 'next/link';
// import { useRouter } from 'next/router';


const Card = () => {
  return (
    <div className='text-center'>
      <button className='bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] text-white px-5 py-5 rounded-full cursor-pointer object-center hover:bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9] hover:scale-110 transition duration-300 ease-in-out mb-5 text-lg '> <Link href={"/Contact"}>
      BUILD A SOUND TRACK</Link>
    </button>
      <section className="bg-[#121314] box-content md:h-screen -mt-72 lg:-mt-24 h-full items-center justify-center flex">
      
        <div className="py-8 px-4 mx-auto max-w-screen-2xl  text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-2xl lg:mx-64  interfont font-bold leading-none md:text-3xl lg:text-4xl tracking-wide  text-white">LIST OF SONGS SNIPPETS</h1>
          <p className="mb-8 text-lg  font-normal interfont  lg:text-xl sm:px-16 xl:px-48 text-gray-400"></p>
          <div className="flex flex-col  mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

            <div className="container  py-8 mx-auto">
              <div className="flex flex-wrap -m-2 md:-m-4 text-center">
                
                <div className="p-3 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
                
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-96">
                    <div className='p-4'>
                    <Image src={card_1} className="h-4 w-4"/>
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] "><span className='text-white'>Song </span>Name  <br/> <span className='text-white'> </span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_1} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] "><span className='text-white'>Smaller in size, they deal with not more than a dozen customers and specializes in a single area.</span></h2>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-96">
                    <div className='p-4'>
                    <Image src={card_2} className="h-4 w-4"/>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] ">Song  <span className='text-white'> Name </span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_2} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] "><span className='text-white'>They are similar to bulge bracket banks and provide high value deals, have multiple offices in the country.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-96">
                    <div className='p-4'>
                    <Image src={card_3} className="h-4 w-4"/>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] "><span className='text-white'>Song  </span>Name </h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_3} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] "><span className='text-white'>They deal between $50 m to $500m, have a larger presence than regional boutique division, and do not have a global presence.</span></h2>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
                  <div className=" rounded-lg w-full bg-[#2a2b2b] shadow-[#2a2b2b] shadow-md h-96">
                    <div className='p-4'>
                    <Image src={card_4} className="h-4 w-4"/>
                      <h2 className="text-white text-left text-sm md:text-xl interfont font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] "> Song <span className='text-white'>Name</span></h2>
                    </div>
                    <div className="p-5 text-left w-full ">
                      {/* <Image src={card_4} /> */}
                      <h2 className="text-white text-left text-sm md:text-xl  interfont font-regular text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] to-[#717BF9] "><span className='text-white'>They are multinational investment banking firms.</span></h2>
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
}

export default Card;
