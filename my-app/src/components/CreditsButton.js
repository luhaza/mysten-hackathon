import React, { useState } from 'react';
import './CreditsButton.css';

const CreditsButton = () => {
    const [showCredits, setShowCredits] = useState(true);

    const toggleCredits = () => {
        setShowCredits(!showCredits);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            
            <button onClick={toggleCredits} class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-10% px-5% rounded m-4 sm:text-md md:text-lg lg:text-xl">
                Show Credits
            </button>
            {showCredits && (
                <div className="credits-container" style={{display:'block'}}>
                    <h3>0.0</h3>
                </div>
            )}

        </div>
    )
}

export default CreditsButton;