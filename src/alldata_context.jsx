import { createContext } from "react";

const AllDataContext = createContext({
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    balance: 1500,
    deposit: (amount) => {},
    withdraw: (amount) => {},
    setFirst: (firstName) => {},
    setLast: (lastName) => {},
    setMail: (email) => {},
    setAddr: (address) => {}
})

export default AllDataContext;