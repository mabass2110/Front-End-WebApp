import { useContext, useState } from "react"
import Input from './amount_input'
import BalanceContext from "./balance_context";
import AllDataContext from "./alldata_context";

const Withdraw = () => {
    const [disable, setDisable] = useState(true);
    const [withdrawAmount, setWithdrawAmount] = useState('')

    const [valid, setValid] = useState(false)
    const [invalid,setInvalid] = useState(false)

    const {balance, withdraw} = useContext(AllDataContext)

    const handleSubmit = (e)=>{  
        e.preventDefault() 
    }

    const handleWithdraw = (e)=> {
       
       if(isNaN(withdrawAmount)){
            
            alert('Please add a number!')
            setValid(false)
            setInvalid(true)
        }

        else if(withdrawAmount <= 0){
            alert('Please insert a positive deposit amount!');
            setValid(false)
            setInvalid(true)
        }

        else if (balance < withdrawAmount){
            alert(`Your balance it is not enought to execute this operation`)
            setValid(false)
            setInvalid(true)
        }

        else{
            withdraw(Number(withdrawAmount))
            setValid(true)
            setInvalid(false)
       
        }

        setWithdrawAmount('') 

        setDisable(true)
    }

    const handleChange = (e)=>{

        let value = e.target.value
        console.log(value)

        setWithdrawAmount(value)

        setDisable(value === '')

    }
    
    return(
        <>
            <Input handleSubmit={handleSubmit} 
                   operation="withdraw"
                   handleOperation={handleWithdraw}
                   handleChange={handleChange}
                   value={withdrawAmount} 
                   balance={balance}
                   disabled={disable} 
            />
            {valid && <div class="alert alert-success" role="alert"> Your withdrawal was successful.</div>}
            {invalid && <div class="alert alert-danger" role="alert"> Error: Unable to process your withdrawl!</div>}
        </>
    )
}
 

 export default Withdraw