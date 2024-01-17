import React, { useState } from 'react';
import './CreditsButton.css';

const CreditsButton = () => {
    const [showCredits, setShowCredits] = useState(true);

    const toggleCredits = () => {
        setShowCredits(!showCredits);
    }

    return (
        <div style={{}}>
            <button onClick={toggleCredits} className="credits-button"> 
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