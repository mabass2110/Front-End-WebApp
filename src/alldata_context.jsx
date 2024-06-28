import { createContext } from "react";

const AllDataContext = createContext({
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    setFirst: (firstName) => {},
    setLast: (lastName) => {},
    setMail: (email) => {},
    setAddr: (address) => {}
})

export default AllDataContext;