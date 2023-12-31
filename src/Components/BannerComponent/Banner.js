import React, { useState } from 'react';
import comingSoonImage1 from '../../Images/banner-placeholder.png';
import comingSoonImage2 from '../../Images/Banner2.jpg';
import comingSoonImage3 from '../../Images/Banner3.webp';
import comingSoonImage4 from '../../Images/Banner4.webp';
import comingSoonImage5 from '../../Images/Banner5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Banner() {
     // Array of banner images
     const bannerImages = [comingSoonImage1, comingSoonImage2, comingSoonImage3, comingSoonImage4, comingSoonImage5];

    // State to keep track of the active dot
    const [activeDot, setActiveDot] = useState(0);
    const [activeImage, setActiveImage] = useState(bannerImages[0]);

    // Function to change the active dot and image
    const selectDot = (dotIndex) => {
        setActiveDot(dotIndex);
        setActiveImage(bannerImages[dotIndex])
    };

    // Function to move to the next image
    const nextImage = () => {
        let nextIndex = activeDot + 1;
        if (nextIndex >= bannerImages.length) {
            nextIndex = 0; // Loop back to the first image
        }
        selectDot(nextIndex);
    };

    // Array to create dots dynamically, starting at index 0 to match the banner images
    const dots = [0, 1, 2, 3, 4];

    return (
        <>
        {/* Enhanced Hero Image */}
        <div className="mb-6 mx-0 relative w-full h-screen rounded">
            {/* Use CSS transition for fade effect */}
            <div className="absolute w-full h-full transition-opacity duration-1000 ease-in-out">
                    <img src={activeImage} alt="Banner" className="w-full h-full object-cover" style={{ opacity: activeDot === dots.indexOf(activeDot) ? 1 : 0 }} />
            </div>
            
            {/* Adjusted gradient for stronger fading on the left */}
            <div className="absolute w-full h-full bg-gradient-to-r from-black via-gray-800 to-transparent opacity-70"></div>

            {/* Text positioned like in the example image, constrained to not exceed 25% of the parent */}
            <div className="absolute inset-0 flex items-center pl-10 lg:pl-24 pr-20">
                
                <div className="w-1/4 space-y-4">

                    {/* Main Title */}
                    <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-xl">Loki</h1>

                    {/* Subtitle */}
                    <h2 className="text-3xl font-light text-gray-300">Titulo Original: Loki</h2>
                    
                    {/* Sub | Dub Text */}
                    <div className="text-xl font-medium mb-2 text-orange-400">Sub | Dub</div>
                    {/* Description */}
                    <p className="text-lg leading-relaxed text-gray-300">SERIE<br />
                    Loki, el impredecible villano Loki (Hiddleston) regresa como el Dios del engaño en una nueva serie tras los acontecimientos de Avengers.
                    </p>

                    {/* Details */}
                    <div className="text-sm text-gray-400">
                        <p>Director: <span className="font-medium text-white">James Gunn</span></p>
                        <p>Género: <span className="font-medium text-white">Acción, Aventura, C. Ficción, Disney</span></p>
                        <p>Actores: <span className="font-medium text-white">Tom Hiddleston, Owen Wilson, Gugu Mbatha-Raw, Wunmi Mosaku, Eugene Cordero</span></p>
                    </div>

                    {/* Button */}
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow transition ease-in-out duration-150">
                        COMENZAR A VER T1 E1
                    </button>
            
                    {/* Dots */}
                    <div className="flex space-x-10 mt-4">
                        {dots.map(dotIndex => (
                            <div
                                key={dotIndex}
                                onClick={() => selectDot(dotIndex)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition duration-500 ease-in-out ${
                                    activeDot === dotIndex ? 'bg-orange-500' : 'bg-gray-500 hover:bg-orange-600'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Arrow with bouncing animation */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 animate-subtleBounce">
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="h-10 w-10 text-white cursor-pointer"
                            onClick={nextImage}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
