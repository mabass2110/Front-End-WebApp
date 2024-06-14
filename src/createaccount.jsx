const CreateAccount = ()=>{
    
    return(
    
        <div className="card text-center w-100 p-3">
            <div className="card-header">
                <h5 className="card-title">Create Account</h5>
            </div>
            <form className="card-body">

                <div className="row gx-5 align-items-center form-floating">
                    
                    <div className="col-auto">
                        <input type="name" className="form-control" placeholder="Name" id="name" aria-describedby="nameHelp"/>
                    </div>

                   
                    <div className="col-auto">
                        <input type="name" className="form-control" id="name" placeholder="Last Name" aria-describedby="nameHelp"/>
                    </div>

                </div>

                <br/>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Address"/>
                    <label for="floatingInput">Address</label>
                </div>
                
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>                
                <br/>
                <button type="submit" className="btn btn-success">Create Account</button>
            </form>
        </div>
    

    )
}

export default CreateAccount;