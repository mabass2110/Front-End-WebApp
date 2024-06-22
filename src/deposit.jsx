
import { useState } from "react"

const Deposit = () => {

    const [balance, setBalance] = useState(0);
    const [disable, setDisable] = useState(true);
    const [depositAmount, setDepositAmount] = useState()

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
            setBalance(balance + Number(depositAmount))
        }

        setDepositAmount('') 

        setDisable(true)
    }

    const handleChange = (e)=>{

        let value = e.target.value

        setDepositAmount(value)

        setDisable(value === '')

    }
    
    return(
        <>
         <div className="card mb-3" >
            <div className="card-body">
                <h5 className="card-title text-start">Balance:{balance} $USD</h5>
                 <form onSubmit={handleSubmit}>
                    <div className="balance-input d-flex align-items-center">
                        <input type="text" 
                        style={{ marginRight: '10px' }} 
                        value={depositAmount} 
                        onChange={handleChange}
                        placeholder="Enter deposit amount" 
                        name="amount"/> 
                        <button type="submit" disabled={disable} className="btn btn-primary" onClick={handleDeposit}>Deposit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
 

 export default Deposit