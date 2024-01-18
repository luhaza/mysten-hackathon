import React, { useState } from 'react';
import './CreditsButton.css';

interface CreditsButtonProps {
    credits : number;
}

const CreditsButton : React.FC<CreditsButtonProps>= ({ credits }) => {
    const [showCredits, setShowCredits] = useState(true);

    const toggleCredits = () => {
        setShowCredits(!showCredits);
    }

    return (
        <div className="flex flex-col items-center justify-center text-white font-bold rounded-lg">
            
            <button onClick={toggleCredits} className="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded-lg py-10% px-5% rounded m-4 sm:text-md md:text-lg lg:text-xl">
                Show Credits
            </button>
            {showCredits && (
                <div className="credits-container" style={{display:'block'}}>
                    <h3>Credits: ${credits}</h3>
                </div>
            )}

        </div>
    )
}

export default CreditsButton;