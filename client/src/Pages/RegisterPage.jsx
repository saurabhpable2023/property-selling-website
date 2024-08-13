// import index from "../index";

import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { toast } from "react-toastify"
import { register } from '../services/User'

function RegisterPage() {
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Username, setUsername] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [City, setCity] = useState("")
  const [State, setState] = useState("")


  const navigate = useNavigate()

  const onCancel = () => {
    navigate('/login')
  }

  const RegisterUser = async () => {
    if (FirstName.length === 0) {
      toast.warning("Please Enter First Name");
    } else if (LastName.length === 0) {
      toast.warning("Please Enter Last Name");
    } else if (Username.length === 0) {
      toast.warning("Please Enter Username");
    } else if (PhoneNumber.length === 0) {
      toast.warning("Please Enter Phone Number");
    } else if (PhoneNumber.length !== 10) {
      toast.warning("Please Enter Valid Phone Number");
    } else if (Email.length === 0) {
      toast.warning("Please Enter Email");
    }else if(City.length ===0){
      toast.warning("Please Enter City name")
    } else if(State.length ===0){
      toast.warning("Please Enter State Name")
    }else {
      if (!(Email.includes('@') && Email.endsWith('.com'))) {
        toast.warning("Please Enter Valid Email Address");
      } else if (Password.length === 0) {
        toast.warning("Please Enter Password");
      } else if (ConfirmPassword.length === 0) {
        toast.warning("Please Enter Confirm Password");
      } else if (!Password.match(ConfirmPassword)) {
        toast.warning("Password and Confirm Password are not Matching");
      }
      else {
       try {
        // Make the API call and receive the result
        const response = await register(FirstName, LastName, Email, Username, PhoneNumber, City, State, Password);
    
        // Debugging: Log the entire response
        console.log('API Response:', response);
        
        // Check for HTTP status code 400 (Bad Request)
         if (response.message === "success") {
            toast.success('Successfully registered a user');
            navigate('/login');
        } else {
            toast.error('Failed to register the user');
        }
    } catch (error) {
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const { status, data } = error.response;
          console.error('Error response:', error.response);

          if (status === 400) {
              // Handle 400 Bad Request errors
              if (data) {
                  Object.keys(data).forEach(key => {
                      toast.error(`${key}: ${data[key]}`);
                  });
              } else if (data.message) {
                  toast.error(data.message);
              } else {
                  toast.error('Failed to register due to validation errors.');
              }
          } else {
              toast.error(`Registration failed with status code ${status}`);
          }
      } else if (error.request) {
          // The request was made but no response was received
          console.error('Error request:', error.request);
          toast.error('No response received from server.');
      } else {
          // Something happened in setting up the request that triggered an Error
          console.error('General error:', error.message);
          toast.error('An error occurred during registration.');
      }
  }
    
      }
    }
  }
  return (
    <div>
      <Header />
      <div className='container'>

        <div >
          <div className="row mt-3 ">
            <div className="col-sm-1 col-md-2 col-lg-2"></div>

            <div className="col formContainer">
              <center>
                <h1 className="page-title mt-3">User Registration</h1>
              </center>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      className='form-control'
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className='form-control' onChange={e => setLastName(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Username</label>
                    <input type='text' className='form-control' onChange={e => setUsername(e.target.value)} />
                  </div>
                </div>
              </div>
              <div />

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">City</label>
                    <input type="text" className='form-control' onChange={e => setCity(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">State</label>
                    <input type="text" className='form-control' onChange={e => setState(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" className='form-control' onChange={e => setPhoneNumber(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input type="email" className='form-control' onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input type="password" className='form-control form-control-sm' onChange={e => setPassword(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" className='form-control' onChange={e => setConfirmPassword(e.target.value)} />
                  </div>
                </div>
              </div>

              {/* <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">User Type: </label>
                    <div class="btn-group ms-2" role="group" aria-label="Basic checkbox toggle button group">
                      <input type="checkbox" class="btn-check" id="btncheck1" autoComplete="off" onChange={e => setBuyer(!Buyer)} />
                      <label class="btn btn-outline-primary" for="btncheck1">Buyer</label>
                      <input type="checkbox" class="btn-check" id="btncheck2" autoComplete="off" onChange={e => setSeller(!Seller)} />
                      <label class="btn btn-outline-primary" for="btncheck2">Seller</label>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="row">
                <div className="col">
                  <div className="mb-3">Already have account ? {" "}
                    <u><Link to='/login'>Login</Link></u>
                  </div>
                  <button className="btn btn-success ms-2 mb-3" onClick={RegisterUser}>Register</button>
                  <button className="btn btn-danger mb-3 ms-4" onClick={onCancel}>Cancel</button>
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
export default RegisterPage;
