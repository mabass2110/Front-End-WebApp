function Input({handleSubmit,operation,handleOperation,handleChange,value,balance, disabled}){
    return(
        <>
        <div className="card mb-3" >
           <div className="card-body">
               <h5 className="card-title text-start">Balance:{balance} $USD</h5>
                <form onSubmit={handleSubmit}>
                   <div className="balance-input d-flex align-items-center">
                       <input type="text" 
                       style={{ marginRight: '10px' }} 
                       value={value} 
                       onChange={handleChange}
                       placeholder={`Enter ${operation} amount`}
                       name="amount"/> 
                       <button type="submit" disabled={disabled} className="btn btn-primary" onClick={handleOperation}>Deposit</button>
                   </div>
               </form>
           </div>
       </div>
       </>
   )
    
}

export default Input;