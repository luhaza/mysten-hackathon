import React, { useState } from 'react';
// import { useGetBalance } from './UseGetBalance';
// const {handleGetBalance} = useGetBalance();

// interface TotalBalanceProps {
//     org_id : string
// }
// const TotalBalance : React.FC<TotalBalanceProps>= ({ org_id }) => {
//     const [balance, setBalance] = useState(100);
//     return (
//         <div>
            
//         </div>
//     )
// }
import { useBalance } from "./BalanceContext";

const TotalBalance : React.FC = () => {
    const {balance} = useBalance();

    return <div> Total Balance: ${balance} </div>
}

export default TotalBalance;