// import index from "../index";

function RegisterPage() {
  return (
    <div className='container'>
     
      <div >
        <div className="row mt-3 ">
          <div className="col-sm-1 col-md-2 col-lg-2"></div>

          <div className="col contactUsForm">
          <center>
        <h1 className="page-title mt-3">Register here</h1>
      </center>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    className='form-control'
                    
                  />
                </div>
              </div>

              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Last Name</label>
                  <input type="text" className='form-control' />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Username</label>
                  <input type='number' className='form-control' />
                </div>
              </div>
            </div>
            <div />

            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Phone Number</label>
                  <input type="number" className='form-control' />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input type="email" className='form-control'/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Password</label>
                  <input type="password" className='form-control form-control-sm'/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="">Confirm Password</label>
                  <input type="password" className='form-control'/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">Already have account ?</div>

                <button className="btn btn-success ms-2 mb-3">Register</button>
                <button className="btn btn-danger mb-3 ms-4">Cancel</button>
              </div>
            </div>
          </div>

          <div className="col-sm-1 col-md-2 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
