import React, { createContext, useState } from 'react';

const BalanceContext = createContext({
  balance: 0,
  deposit: (amount) => {},
  withdraw: (amount) => {},
});

export default BalanceContext;
