import React from 'react'
import '../App.css';
import './OrganizationsListStyle.css';
import DonateButton from './DonateButton'

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
            <DonationBlock name={"Williams"} org_id={'0x62be33c3b976258aebd029d44b23154d5862d9e2b5a100a17c43f0c817214f4e'}/>
            <DonationBlock name={"Mysten"} org_id={'0x0f965689c52bc13e5b1d90f6e1600628c5f2d1e989f39a10e1c83267fca133c5'}/>
            <DonationBlock name={"Marcus"} org_id={'0xe81bf1f27d67b9261b1e7ca06e50d76ae12e01c44c2ac4b673f07866c7a9406e'}/>
        </table>
      </div>  
    );
  }

interface DonationBlockProps {
    name : string,
    org_id : string
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
                    {/* <button onClick={}>

                    </button> */}
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