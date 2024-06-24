import React,{useState } from "react";
import BalanceContext from "./balance_context";


const BalanceProvider = ({children}) => {
    const [balance, setBalance] = useState(15000); // State for account balance

    const deposit = (amount) => {
      setBalance(prevBalance => prevBalance + amount);
    };
  
    const withdraw = (amount) => {
      setBalance(prevBalance => Math.max(0, prevBalance - amount)); // Prevent negative balance
    };
  
    return (
      <BalanceContext.Provider value={{ balance, deposit, withdraw }}>
        {children}
      </BalanceContext.Provider>
    );
}

export default BalanceProvider