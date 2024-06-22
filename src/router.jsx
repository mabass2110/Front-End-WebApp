
import { BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./homepage";
import CreateAccount from "./createaccount";
import Navigation from "./navbar";
import Deposit from "./deposit";

 //Routers component
function Routers() {
    return (
     <BrowserRouter>    
       <Navigation/>
       <Routes>
         <Route path='/homepage' element={<HomePage/>}></Route>
         <Route path='/createaccount/' element={<CreateAccount/>} ></Route>
         <Route path='/deposit/' element={<Deposit/>} ></Route>
       </Routes>
     </BrowserRouter>
 )
 }

 export default Routers
 
