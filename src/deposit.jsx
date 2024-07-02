
import { useContext, useState } from "react"



import Input from './amount_input'

import AllDataContext from "./alldata_context";

const Deposit = () => {
    const [disable, setDisable] = useState(true);
    const [depositAmount, setDepositAmount] = useState('')
    const {balance, deposit} = useContext(AllDataContext)

    const handleSubmit = (e)=>{  
        e.preventDefault() 
    }

    const handleDeposit = (e)=> {
       
       if(isNaN(depositAmount)){
            alert('Please add a number!')
        }
        else if(depositAmount <= 0){
            alert('Please insert a positive deposit amount!');
        }
        else{
            deposit(Number(depositAmount))
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
            <Input handleSubmit={handleSubmit} operation='deposit'  handleOperation={handleDeposit} handleChange={handleChange} value={depositAmount} balance={balance} disabled={disable}/>
        </>
    )
}
 

 export default Deposit