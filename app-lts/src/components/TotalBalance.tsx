import React, { useState } from 'react';
import { useGetBalance } from './UseGetBalance';
const {handleGetBalance} = useGetBalance();

interface TotalBalanceProps {
    org_id : string
}
const TotalBalance : React.FC<TotalBalanceProps>= ({ org_id }) => {
    const [balance, setBalance] = useState(100);
    return (
        <div>
            
        </div>
    )
}

export default TotalBalance;