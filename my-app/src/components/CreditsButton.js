import React, { useState } from 'react';
import './CreditsButton.css';

const CreditsButton = () => {
    const [showCredits, setShowCredits] = useState(true);

    const toggleCredits = () => {
        setShowCredits(!showCredits);
    }

    return (
        <div style={{}}>
            <button onClick={toggleCredits} class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-10% px-5% rounded m-4">
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