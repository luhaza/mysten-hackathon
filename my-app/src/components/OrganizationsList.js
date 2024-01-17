import React from 'react'
import '../App.css';
import './OrganizationsListStyle.css';

const OrganizationsList = () => {
    return (
        <div className="flex-column large-container rounded org-info">
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
        <tr className="donation-row">
                <td>Fake Organization</td>
                <td>Goal</td>
                <td>Current Donation</td>
        </tr>
    ); 
}