import React from 'react';
import team_1 from '../components/assets/team/1.png'
import team_2 from '../components/assets/team/2.png'
import team_3 from '../components/assets/team/3.png'
import team_4 from '../components/assets/team/4.png'
import team_5 from '../components/assets/team/5.png'
import team_6 from '../components/assets/team/6.png'
import Image from 'next/image';

const Infographic = () => {
	return (
		<div>

			<section className="bg-[#121314] my-24 items-center justify-center flex">
				<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-6 sm:p-10">

					<h1 className="md:mx-64  text-2xl font-bold font-[poppins] tracking-tight leading-none text-gray-900 md:text-2xl lg:text-4xl "><span className=' text-transparent bg-clip-text bg-gradient-to-r from-[#F47C03] via-[#D9009C] to-[#717BF9]'>Best services provided by IBH</span></h1>

					<p className=" mb-16 text-2xl font-normal text-white aspirefont lg:text-6xl sm:px-16 xl:px-48">OUR SERVICES</p>

					<div className="flex flex-col  mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

						<div className="container py-8 mx-auto">
							<div className="flex flex-wrap justify-center -m-2 md:-m-4 text-center">

								<div className="p-6 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
									<Image class=" rounded-3xl border border-gray-100 shadow-sm" src={team_1} />
									<p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">Reseacrh</p>
									<p className="text-white md:text-xl text-sm">We Research About Best
Stocks And Shares , ETFS,
Mutual Funds</p>
								</div>

								<div className="p-6 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
									<Image class="rounded-3xl border border-gray-100 shadow-sm" src={team_2} />
									<p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">REVIEW</p>
									<p className="text-white  md:text-xl text-sm">Review From the Individuals
About The Market</p>
								</div>
								<div className="p-6 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
									<Image class="rounded-3xl border border-gray-100 shadow-sm" src={team_3} />
									<p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">STUDY</p>
									<p className="text-white  md:text-xl text-sm">Apply For The Fund As Per
Review</p>
								</div>

								<div className="p-6 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
									<Image class="rounded-3xl border border-gray-100 shadow-sm" src={team_4} />
									<p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">COMPANY PROFILE</p>
									<p className="text-white  md:text-xl text-sm">Your Trust Is Our
Responsibility</p>
								</div>

								<div className="p-6 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
									<Image class="rounded-3xl border border-gray-100 shadow-sm" src={team_5} />
									<p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">AGENT INFORMATION</p>
									<p className="text-white  md:text-xl text-sm">We Give Call According To
Our Agent Information</p>
								</div>

								<div className="p-6 sm:w-1/2 lg:w-1/4 w-1/2 hover:scale-110 transition duration-300 ease-in-out">
									<Image class="rounded-3xl border border-gray-100 shadow-sm" src={team_6} />
									<p className="mt-4 md:text-3xl text-lg font-bold font-[poppins] leading-tight text-white">EMAILING</p>
									<p className="text-white  md:text-xl text-sm">Approved Call Of The
Customer Will Be Email To
Agents</p>
								</div>
							</div>
						</div>

					</div>

			
				</div>
			</section>

		</div>
	);
}

export default Infographic;
