import { Link } from "react-router-dom";
import { useState } from "react";


//Navigation bar Links

const Navigation = ()=>{

    //state for the actual active tab
    const [activeTab, setActiveTab] = useState('');
   
    return(       

    <nav className="navbar bg-light navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="light">
        
        <div className="container-fluid">
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/online-payment-with-a-credit-card.png" alt="online-payment-with-a-credit-card"/>
            
            <div className="navbar-brand roboto-bold">
                Online Banking
             </div>

            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-center roboto-regular" id="navbarNav">
                
                <ul className="navbar-nav">
                
                    <li className="nav-item">
                        <Link className={`nav-link ${activeTab === "homepage"? 'active': ''} hover-effect`} aria-current="page"  to="/homepage" onClick={()=>setActiveTab('homepage')}>Home page</Link>
                    </li>

                    <li className="nav-item">
                        <Link className={`nav-link ${activeTab === "createaccount"? 'active': ''} hover-effect`} aria-current="page" to="/createaccount" onClick={()=>setActiveTab('createaccount')}>Deposit</Link>
                    </li>

                    <li className="nav-item">
                        <Link className={`nav-link ${activeTab === "deposit"? 'active': ''} hover-effect`} aria-current="page" to="/deposit/" onClick={()=>setActiveTab('deposit')}>Deposit</Link>
                    </li>

                    <li className="nav-item">
                        <Link className={`nav-link ${activeTab === "withdraw"? 'active': ''} hover-effect`} aria-current="page" to ="/withdraw/" onClick={()=>setActiveTab('withdraw')}>Withdraw</Link>
                    </li>

                    <li className="nav-item">
                        <Link className={`nav-link ${activeTab === "alldata"? 'active': ''} hover-effect`} aria-current="page" to="/alldata/" onClick={()=>setActiveTab('alldata')}>All data</Link>
                    </li>

                </ul>

            </div>
            <div className="justify-content-end">
                <button><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/bot.png" alt="bot"/></button>
                <button>Login</button>
            </div>
        </div>
    </nav>

  
    )

}

export default Navigation;