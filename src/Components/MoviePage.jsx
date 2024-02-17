import React from 'react';
import placeholderImage from '../Images/Oppenheimer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import FakeLinkTable from './FakeLinkTable';


export default function MoviePage() {
    return (
        <>
            {/* Single-movie hero-banner image container */}
            <div className="mb-6 mx-0 w-full h-[33vh] relative overflow-hidden">
                {/* Placeholder Image */}
                <img src={placeholderImage} alt="Banner" className="absolute w-full h-full object-cover" />
                
                {/* YouTube video iframe */}
                {/* Ensure this div is placed directly over the placeholder without an overlay that could block clicks */}
                <div className="absolute top-0 left-1/4 w-1/2 h-3/4 z-10">
                    <iframe
                        src="https://www.youtube.com/embed/JpUd4BS7yI0?rel=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                
                {/* Gradient Overlay */}
                {/* Apply the gradient as a separate element or pseudo-element behind the iframe */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>
                </div>
            </div>

            <main className="container mx-auto px-6 py-4"> 
                <div className="flex">
                    {/* Left column content */}
                    <div className="w-1/3">
                        <div className="rounded-lg shadow-lg overflow-hidden">
                            <img src={placeholderImage} alt="frontPageImage" className="w-fullobject-cover" />
                        </div>
                            <div className="text-white p-4 bg-gray-800 rounded-lg shadow-lg mt-2">   
                                <div className="py-2">
                                    <h3 className="text-sm font-bold text-gray-300">RATING</h3>
                                    <p className="text-xs text-gray-400"><FontAwesomeIcon icon={faStar} /> 94% (416k) 8.4/634k</p>
                                </div>
                                <div className="py-2">
                                    <h3 className="text-sm font-bold text-gray-300">GENRES</h3>
                                    <p className="text-xs text-gray-400">Drama, History</p>
                                </div>
                                <div className="py-2">
                                    <h3 className="text-sm font-bold text-gray-300">DURATION</h3>
                                    <p className="text-xs text-gray-400">3h 1min</p>
                                </div>
                                <div className="py-2">
                                    <h3 className="text-sm font-bold text-gray-300">AGE RATING</h3>
                                    <p className="text-xs text-gray-400">12</p>
                                </div>
                                <div className="py-2">
                                    <h3 className="text-sm font-bold text-gray-300">PRODUCTION COUNTRY</h3>
                                    <p className="text-xs text-gray-400">United Kingdom, United States</p>
                                </div>
                                <div className="py-2">
                                    <h3 className="text-sm font-bold text-gray-300">DIRECTOR</h3>
                                    <p className="text-xs text-gray-400">[Director's Name]</p>
                                </div>
                            </div>
                        </div>

                    {/* Right column content */}
                    <div className="w-2/3 px-5">
                        <h1 className="text-5xl text-gray-900 dark:text-white">
                            Oppenheimer <span className="text-3xl">(2023)</span>
                        </h1>
                        <h2 className="text-2xl text-gray-300 mt-10 ml-4">Synopsis</h2>
                        <p className="text-lg text-gray-400 mt-3 ml-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec condimentum lacinia, lorem mauris cursus lorem, vitae aliquet dui dui non urna. Integer bibendum, ipsum in condimentum facilisis, arcu risus rutrum ipsum, a pharetra justo turpis ac nulla.
                        </p>

                       <FakeLinkTable />


                    </div>
                </div>  
            </main>
        </>
    );
}