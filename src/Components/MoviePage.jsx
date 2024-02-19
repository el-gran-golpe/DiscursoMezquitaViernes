import React from 'react';
import placeholderImage from '../Images/Oppenheimer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import FakeLinkTable from './FakeLinkTable';


const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const fraction = rating - fullStars;

    return (
        <>
            {[...Array(fullStars)].map((_, index) => (
                <FontAwesomeIcon 
                    key={`star-${index}`} 
                    icon={faStar} 
                    className="text-yellow-400" 
                    style={{ stroke: 'black', strokeWidth: '10px', fontSize: '24px' }}
                />
            ))}
            {fraction > 0 && 
                <div style={{ position: 'relative' }}>
                    <FontAwesomeIcon 
                        icon={faStar} 
                        className="text-gray-300" 
                        style={{ stroke: 'black', strokeWidth: '10px', fontSize: '24px' }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: `${fraction * 100}%`, overflow: 'hidden' }}>
                        <FontAwesomeIcon 
                            icon={faStar} 
                            className="text-yellow-400" 
                            style={{ stroke: 'black', strokeWidth: '10px', fontSize: '24px' }}
                        />
                    </div>
                </div>
            }
            {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                <FontAwesomeIcon 
                    key={`star-${fullStars + index + (fraction > 0 ? 1 : 0)}`} 
                    icon={faStar} 
                    className="text-gray-300" 
                    style={{ stroke: 'black', strokeWidth: '10px', fontSize: '24px' }}
                />
            ))}
        </>
    );
}


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
                        <div className="mb-6">
                            <h1 className="text-5xl text-gray-900 dark:text-white">
                                Oppenheimer <span className="text-3xl">(2023)</span>
                            </h1>
                        </div>
                        {/* Movie details */}
                        <div className="items-center mt-4 text-sm">
                            <span className="text-lg font-medium text-gray-400">Sub | Dub</span>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                <div style={{ border: '1px solid white', padding: '5px', borderRadius: '5px', display: 'inline-flex', margin: '10px 0' }}>
                                    {renderStars(4.6)}
                                    <div style={{ height: '24px', width: '1px', backgroundColor: 'white', margin: '0 10px' }}></div>
                                    <span className="mx-1" style={{ fontSize: '24px' }}>Puntuación media: 4.6</span>
                                    <div style={{ height: '24px', width: '1px', backgroundColor: 'white', margin: '0 10px' }}></div>
                                    <span style={{ fontSize: '24px' }}>(16K)</span>
                                    <div style={{ height: '24px', width: '1px', backgroundColor: 'white', margin: '0 10px' }}></div>
                                    <span style={{ fontSize: '24px' }}>71 Reseñas</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-2xl text-gray-300 mt-10">Synopsis</h2>
                        <p className="text-lg text-gray-400 mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec condimentum lacinia, lorem mauris cursus lorem, vitae aliquet dui dui non urna. Integer bibendum, ipsum in condimentum facilisis, arcu risus rutrum ipsum, a pharetra justo turpis ac nulla.
                        </p>

                       <FakeLinkTable />
                    </div>
                </div>  
            </main>
        </>
    );
}