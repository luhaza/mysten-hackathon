import React from "react";
import { useBalance } from "./BalanceContext";

const TotalBalance : React.FC = () => {
    const { balance } = useBalance();

    return <div> {balance} SUI </div>
}

export default TotalBalance;