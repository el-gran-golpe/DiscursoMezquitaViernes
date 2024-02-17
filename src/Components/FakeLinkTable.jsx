import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const FakeLinkTable = () => {

    const [expandedRow, setExpandedRow] = useState(null);

    const rows = [
        { option: 1, servidor: 'Varios', audio: 'Latino', formato: 'HD 1080p' },
        { option: 2, servidor: 'Varios', audio: 'Latino', formato: 'HD 1080p' },
        { option: 3, servidor: 'Varios', audio: 'Latino', formato: 'HD 1080p' },
        { option: 4, servidor: 'Varios', audio: 'Latino', formato: 'HD 1080p' },
        { option: 5, servidor: 'Varios', audio: 'Latino', formato: 'HD 1080p' },
    ];

    const toggleRow = (index) => {
        if (expandedRow === index) {
            setExpandedRow(null); // Collapse the row if it's already expanded
        } else {
            setExpandedRow(index); // Expand the new row
        }
    };

    return (
        <div className="bg-gray-800 p-4 mt-8 rounded-lg">
            <div className="text-white text-lg mb-2">Where to watch</div>
            <div className="bg-gray-700 p-2 rounded-lg overflow-hidden">
                <div className="grid grid-cols-6 text-center text-xs font-bold text-white py-2 border-b border-gray-600">
                    <div></div> {/* Placeholder for the dropdown button column */}
                    <div>Enlace</div>
                    <div>Servidor</div>
                    <div>Audio</div>
                    <div>Formato</div>
                    <div>Enlaces</div>
                </div>
                {rows.map((row, index) => (
                    <div key={index} className={`grid grid-cols-6 text-center text-xs text-white py-2 items-center ${index !== rows.length - 1 ? 'border-b border-gray-600' : ''}`}>
                        <div className="place-self-center">
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                onClick={() => toggleRow(index)}
                                className={`cursor-pointer text-gray-300 hover:text-white transition ease-in-out duration-150 ${expandedRow === index ? 'transform rotate-180' : ''}`}
                                style={{ borderRadius: '50%', border: '2px solid white', padding: '2px' }}
                            />
                        </div>
                        <div className="col-span-5 flex justify-between items-center px-4">
                            <span>Opción {row.option}</span>
                            <span>{row.servidor}</span>
                            <span className="bg-red-600 rounded-full text-white px-2">LAT</span>
                            <span>{row.formato}</span>
                            <span className="text-blue-400 cursor-pointer">Descargar</span>
                        </div>
                        {expandedRow === index && (
                            <div className="col-span-6 mt-2 mb-4 px-4 py-2 bg-gray-800 rounded-lg shadow-inner">
                                <p>Detalles adicionales sobre la Opción {row.option}</p>
                                {/* Additional details can be added here */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FakeLinkTable;
