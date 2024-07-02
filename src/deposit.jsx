
import { useContext, useState } from "react"



import Input from './amount_input'

import AllDataContext from "./alldata_context";

const Deposit = () => {
    const [disable, setDisable] = useState(true);
    const [depositAmount, setDepositAmount] = useState('')
    const [valid, setValid] = useState(false)
    const [invalid,setInvalid] = useState(false)
    const {balance, deposit} = useContext(AllDataContext)
  
    const handleSubmit = (e)=>{  
        e.preventDefault() 
    }

    const handleDeposit = (e)=> {
       
       if(isNaN(depositAmount)){
            setInvalid(true);
            setValid(false);
            alert('Please add a number!')
            
        }
        else if(depositAmount <= 0){
            setInvalid(true);
            setValid(false);
            alert('Please insert a positive deposit amount!');
        }
        else{
            deposit(Number(depositAmount))
            setValid(true)
            setInvalid(false)
        }
        setDepositAmount('') 
        setDisable(true)
        
    }

    const handleChange = (e)=>{
        let value = e.target.value
        console.log(value)
        setDepositAmount(value)
        setDisable(value === '')
    }
    
    return(
        <> 
            <Input handleSubmit={handleSubmit} 
                   operation='deposit' 
                   handleOperation={handleDeposit} 
                   handleChange={handleChange} 
                   value={depositAmount} 
                   balance={balance} 
                   disabled={disable}
            />
            {valid && <div class="alert alert-success" role="alert"> Deposit Successful!</div>}
            {invalid && <div class="alert alert-danger" role="alert"> Error: Unable to Process Deposit!</div>}
        </>
    )
}
 

 export default Deposit