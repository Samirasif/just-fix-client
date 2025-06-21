import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import ContainerWrapper from '../common/ContainerWrapper';

const Testimonials = () => {
    return (
        <div className="py-20 w-full ">
            <ContainerWrapper>
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Review of People</h2>
                        <h3 className="text-3xl font-bold text-gray-900">Who Have Found Jobs</h3>
                    </div>
                    <div className="flex space-x-2">
                        <button className="w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Testimonial 1 */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-sm">M</span>
                            </div>
                            <span className="font-semibold text-gray-900">RNT Platform</span>
                        </div>
                        <blockquote className="text-gray-700 mb-6 leading-relaxed">
                            &quot;I can&apos;t thank RNT enough for connecting me with the perfect interior design job. The job matching
                            algorithm is spot on, and the job alerts kept me updated on new opportunities. It&apos;s a game-changer for
                            anyone in the design industry.&quot;
                        </blockquote>
                        <div className="flex items-center">

                            <div className='flex items-center gap-4'>
                                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                                <p className="text-sm text-gray-600">Interior Designer</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-sm">M</span>
                            </div>
                            <span className="font-semibold text-gray-900">RNT Platform</span>
                        </div>
                        <blockquote className="text-gray-700 mb-6 leading-relaxed">
                            &quot;I can&apos;t thank RNT enough for connecting me with the perfect architectural design job. The job
                            matching algorithm is spot on, and the job alerts kept me updated on new opportunities. It&apos;s a
                            game-changer for anyone in the design industry.&quot;
                        </blockquote>
                        <div className="flex items-center">

                            <div className='flex items-center gap-4'>
                                <p className="font-semibold text-gray-900">Michael Chen</p>
                                <p className="text-sm text-gray-600">Architectural Designer</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-sm">M</span>
                            </div>
                            <span className="font-semibold text-gray-900">RNT Platform</span>
                        </div>
                        <blockquote className="text-gray-700 mb-6 leading-relaxed">
                            &quot;I can&apos;t thank RNT enough for connecting me with the perfect architectural design job. The job
                            matching algorithm is spot on, and the job alerts kept me updated on new opportunities. It&apos;s a
                            game-changer for anyone in the design industry.&quot;
                        </blockquote>
                        <div className="flex items-center">

                            <div className='flex items-center gap-4'>
                                <p className="font-semibold text-gray-900">Michael Chen</p>
                                <p className="text-sm text-gray-600">Architectural Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
};

export default Testimonials;