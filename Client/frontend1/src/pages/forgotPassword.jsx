function ForgotPassword(){
    return(
        <div className="container row">
            <div className="col-3 "></div>
            <div className="form contactUsForm mt-20 col">
                <center>
                    <h1 className="mt-3">Forgot Password</h1>
                </center>
                <div className="mt-3">
                    <label>Enter your registered email id</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mt-3">
                    <input type="button" className="btn btn-primary" value="Send OTP"/>
                </div>
                <div className="mt-3">
                    <label htmlFor="">Enter OTP here</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mt-3">
                    <input type="button" className="btn btn-warning" value="Validate OTP"/>
                </div>
                <div className="mt-3">
                    <label htmlFor="">Enter new Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mt-3">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mt-3 mb-2">
                    <input type="button" className="btn btn-success" value="Change Password"/>
                </div>
            </div>
            <div className="col-3 "></div>
        </div>
    ) 
}

export default ForgotPassword;