import { useContext, useState } from "react"
import Input from './amount_input'
import BalanceContext from "./balance_context";

const Withdraw = () => {
    const [disable, setDisable] = useState(true);
    const [withdrawAmount, setWithdrawAmount] = useState('')
    const {balance, withdraw} = useContext(BalanceContext)

    const handleSubmit = (e)=>{  
        e.preventDefault() 
    }

    const handleWithdraw = (e)=> {
       
       if(isNaN(withdrawAmount)){
            
            alert('Please add a number!')
        }

        else if(withdrawAmount <= 0){
            alert('Please insert a positive deposit amount!');
        }

        else if (balance < withdrawAmount){
            alert(`Your balance it is not enought to execute this operation`)
        }

        else{
            withdraw(Number(withdrawAmount))
       
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
        </>
    )
}
 

 export default Withdraw