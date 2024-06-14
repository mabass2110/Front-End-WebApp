
import { BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./homepage";
import CreateAccount from "./createaccount";


 //Routers component
function Routers() {
    return (
     <BrowserRouter>    
       <Navigation/>
       <Routes>
         <Route path='/homepage' element={<HomePage/>}></Route>
         <Route path='/createaccount/' element={<CreateAccount/>} ></Route>
       </Routes>
     </BrowserRouter>
 )
 }

 export default Routers
 