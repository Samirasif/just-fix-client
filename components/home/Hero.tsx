import Link from 'next/link';
import React from 'react';
import Statistics from './Statistics';
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className='flex flex-col gap-5 py-10'>
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-[4.5rem] font-bold text-gray-900 leading-tight">
                                Find Trusted

                                Local Service Providers

                                Near You
                            </h1>
                            <p className="text-lg text-gray-600 max-w-xl">
                                Connect with verified electricians, plumbers, cleaners, and other skilled professionals for any job — quickly and reliably.
                            </p>

                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href='/service-providers' className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium px-8 py-3 rounded-md">
                                Find Service Providers
                            </Link>
                            <Link href='/signup' className=" bg-white hover:text-violet-700 cursor-pointer border-gray-300  text-gray-700 font-medium px-8 py-3 rounded-md">
                                Register Yourself
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="relative ">
                        <div className="relative w-full h-96 lg:h-[500px] overflow-hidden">
                            <Image
                                src='/repair.svg'
                                alt='Hero Image'
                                fill
                                className="w-full h-full object-contain rounded-md"
                            />
                        </div>
                    </div>
                </section>
                <Statistics />
            </div>
        </>
    );
};

export default Hero;
