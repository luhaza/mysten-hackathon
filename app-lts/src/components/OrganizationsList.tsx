import React from 'react'
import '../App.css';
import './OrganizationsListStyle.css';
import DonateButton from './DonateButton'
import TotalDonated from './TotalDonated'


const OrganizationsList = () => {
    return (
        <div className="flex-column large-container org-info">
            <h2 className="orgHeader"> Current Fundraisers</h2>
            <FundraiserBlock />
        </div>
    )
}

export default OrganizationsList;

function FundraiserBlock() { //need parameters
    return (
      <div className = "infoBlock">
        <table className="infoTable">
            <tr className="infoRow">
                <th>Organization</th>
                <th>Goal</th>
                <th>Current Donation %</th>
            </tr>
            <DonationBlock name={"Williams"}/>
            <DonationBlock name={"Mysten"}/>
            <DonationBlock name={"Marcus"}/>
        </table>
      </div>  
    );
  }

interface DonationBlockProps {
    name : string
}

const DonationBlock : React.FC<DonationBlockProps> = ({name}) => {
    return (
        <>
            <tr className="donation-row">
                <td className="donation-container">
                        <td>{name}</td>
                </td>
                <td className="donation-container">
                        <td>Goal</td>
                </td>
                <td className="donation-container">
                        <td>Current Donation</td>
                </td> 
            </tr>
             <tr> 
                
                 <div className="task-progress">
                    {/* <TotalDonated/> */}
                    {/* <progress id="progressBar" className="progress progress1" max="100" value="65"></progress> */}

                     {/* <script>
                        document.addEventLister("DOMContentLoaded", function () {
                            animateProgressBar()
                        })

                        
                     </script> */}
                 </div>
                 <td></td>
                 <td>
                    <DonateButton/>
                    {/* <button className="popup-btn">Donate HERE</button> */}
                </td>
            </tr>
        </>
            
        
    ); 
}

// function animateProgressBar(){
//     const progressBar = document.getElementById('progressBar');
//     const targetPercentage = 70; 
//     progressBar.style.width = '${targetPercentage}%'; 
//     progressBar.value = targetPercentage;              
// }