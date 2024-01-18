import React from 'react'
import '../App.css';
import './OrganizationsListStyle.css';


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
            <DonationBlock />
            <DonationBlock />
            <DonationBlock />
            <DonationBlock />
        </table>
      </div>  
    );
  }


function DonationBlock() {
    return (
        <>
            <tr className="donation-row">
                <td className="donation-container">
                        <td>Fake Organization</td>
                </td>
                <td className="donation-container">
                        <td>Goal</td>
                </td>
                <td className="donation-container">
                        <td>Current Donation</td>
                </td> 
            </tr>
             <tr> 
                
                 <div class="task-progress">
                     <progress id="progressBar" class="progress progress1" max="100" value="65"></progress>

                     {/* <script>
                        document.addEventLister("DOMContentLoaded", function () {
                            animateProgressBar()
                        })

                        
                     </script> */}
                 </div>
                 <td></td>
                 <td>
                    <button class="popup-btn" onclick="">Donate HERE</button>
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