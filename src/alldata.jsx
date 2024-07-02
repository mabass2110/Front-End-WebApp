import React,{useContext} from "react";
import AllDataContext from "./alldata_context";

function AllData(){
    const {firstName,lastName,email,address,balance} = useContext(AllDataContext)
    
    const style = {
        width: "18rem", // Adjust this value to change the width of the card
  margin: "20px auto"
    }
    return(
        <>
            <div className="card" style={style}>
                <div className="card-header text-center">
                    All Data
                </div>
                <ul class="list-group list-group-flush">
                    <li className="list-group-item text-start">FirstName: {firstName}</li>
                    <li className="list-group-item text-start">LastName:  {lastName}</li>
                    <li className="list-group-item text-start">Balance:   ${balance} USD</li>
                    <li className="list-group-item text-start">Email:     {email}</li>
                    <li className="list-group-item text-start">Address:   {address}</li>
                </ul>
            </div>
        </>
    )
}
export default AllData;