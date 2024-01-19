import React, { createContext, useContext, useState, useEffect } from "react";
import {UseGetBalance} from "./UseGetBalance";
import { SuiObjectData } from "@mysten/sui.js/client";

interface BalanceContextProps {
  _org_id : string;
  balance: number;
}

const handleGetBalance = UseGetBalance();

const BalanceContext = createContext<BalanceContextProps | undefined>(undefined);

export const BalanceProvider: React.FC<{ children: React.ReactNode; _org_id : string}> = ({ children, _org_id }) => {
  // const { data, isLoading, error, refetch } = handleGetBalance(_org_id);

  const { data, isLoading, error, refetch } = handleGetBalance(_org_id);

  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (!isLoading && data && data.data) {
      // Set the initial balance from the API response
      const fields = getBalanceField(data.data)
      const num : number = fields['balance'];
      setBalance(num);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (error){
      console.log(error)
    }
    const interval = setInterval(() => {
      refetch();
      console.log(interval);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BalanceContext.Provider value={{ _org_id, balance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useBalance must be used within a BalanceProvider");
  }
  return context;
};

function getBalanceField(data: SuiObjectData) {
  if (data.content?.dataType !== "moveObject") {
    throw new Error("Content not found");
  }
  const fields = data.content.fields as { balance: number};
  // console.log(fields);
  return fields;
}
