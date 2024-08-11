// import index from "../index";
//  Intergration with Database
import { useState } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

function EditProfile() {
  const [FirstName, setFirstName] = useState("Testing")
  const [LastName, setLastName] = useState("Tester")
  const [Username, setUsername] = useState("Test@123")
  const [PhoneNumber, setPhoneNumber] = useState("123456789")
  const [Email, setEmail] = useState("test@test.com")
  const [OldPassword, setOldPassword] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [Buyer, setBuyer] = useState(true)
  const [Seller, setSeller] = useState(false)

  return (
    <div>
      <Header />
      <div className='container'>

        <div >
          <div className="row mt-3 ">
            <div className="col-sm-1 col-md-2 col-lg-2"></div>

            <div className="col formContainer">
              <center>
                <h1 className="page-title mt-3">Edit Profile</h1>
              </center>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      className='form-control'
                      value={FirstName}
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className='form-control' value={LastName} onChange={e => setLastName(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Username</label>
                    <input type='text' className='form-control' value={Username} onChange={e => setUsername(e.target.value)} readOnly />
                  </div>
                </div>
              </div>
              <div />

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" className='form-control' value={PhoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input type="email" className='form-control' value={Email} onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Old Password</label>
                    <input type="password" className='form-control form-control-sm' onChange={e => setOldPassword(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">New Password</label>
                    <input type="password" className='form-control form-control-sm' onChange={e => setPassword(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Confirm New Password</label>
                    <input type="password" className='form-control' onChange={e => setConfirmPassword(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">User Type: </label>
                    <div class="btn-group ms-2" role="group" aria-label="Basic checkbox toggle button group">
                      <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked={Buyer} onChange={e => setBuyer(!Buyer)} />
                      <label class="btn btn-outline-primary" for="btncheck1">Buyer</label>
                      <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" checked={Seller} onChange={e => setSeller(!Seller)} />
                      <label class="btn btn-outline-primary" for="btncheck2">Seller</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3"></div>

                  <button className="btn btn-success ms-2 mb-3">Update Profile</button>
                  <button className="btn btn-danger mb-3 ms-4">Cancel</button>
                </div>
              </div>
            </div>

            <div className="col-sm-1 col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;