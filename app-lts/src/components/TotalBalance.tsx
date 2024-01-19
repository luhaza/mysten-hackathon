import React from "react";
import { useBalance } from "./BalanceContext";

const TotalBalance : React.FC = () => {
    const { balance } = useBalance();

    return <div> Total Balance: ${balance} </div>
}

export default TotalBalance;