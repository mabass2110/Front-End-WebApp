
import { BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./homepage";
import CreateAccount from "./createaccount";
import Navigation from "./navbar";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllDataProvider from "./alldataprovider";
import AllData from "./alldata";


 //Routers component
function Routers() {
    return (
     <BrowserRouter>    
       <Navigation/>
       <Routes>
         <Route path='/' element={<HomePage/>}></Route>
         <Route path='/createaccount/' element={<AllDataProvider> <CreateAccount/> </AllDataProvider>} ></Route>
          <Route path='/deposit/' element={<AllDataProvider> <Deposit /> </AllDataProvider>} ></Route>
          <Route path='/withdraw/' element={<AllDataProvider> <Withdraw /> </AllDataProvider>} ></Route>
          <Route path='/alldata/' element={<AllDataProvider> <AllData /> </AllDataProvider>} ></Route>
        
       </Routes>
     </BrowserRouter>
 )
 }

 export default Routers
 
