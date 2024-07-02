import React,{useState} from 'react'
import AllDataContext from "./alldata_context";


const AllDataProvider = ({children}) => {

  //create account state
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail]= useState('');
    const [address,setAddress] = useState('')
     
    const setFirst = (firstName) => setFirstName(firstName)
    const setLast = (lastName) => setLastName(lastName)
    const setMail = (email) => setEmail(email)
    const setAddr = (address) => setAddress(address)
    
    //balance state
    const [balance, setBalance] = useState(15000); 

    const deposit = (amount) => {
      setBalance(prevBalance => prevBalance + amount);
    };
  
    const withdraw = (amount) => {
      setBalance(prevBalance => Math.max(0, prevBalance - amount)); 
    };
    

    

    return(
      <AllDataContext.Provider value={{firstName,lastName,email,address,balance,deposit,withdraw,setFirst,setLast,setMail,setAddr}}>
        {children}
      </AllDataContext.Provider>
    )

}

export default AllDataProvider;