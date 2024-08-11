import userImage from "../Assets/icons/userImage.png";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PropertyCard from "../Components/ProductCard";
function Dashboard() {
  const user = {};

  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Header />
      <div className="container ">
        <div className="row formContainer mt-5 justify-center">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="tw-text-center">
              <h1 className="tw-font-semibold tw-text-4xl mt-2 tw-text-blue-600">
                USER DASHBOARD
              </h1>
              <div className="row mt-5">
                <div className="col-sm-0 col-md-3 col-lg-3"></div>
                <div className="col">
                  <span className="tw-text-base tw-text-xl tw-font-medium tw-text-gray-700">
                    Username:
                  </span>
                </div>
                <div className="col">
                  <span className="tw-text-start tw-text-xl tw-font-light tw-text-gray-500">
                    TestUsername
                  </span>
                </div>
                <div className="col-sm-0 col-md-4 col-lg-4"></div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-0 col-md-3 col-lg-3"></div>
                <div className="col">
                  <span className="tw-text-base tw-text-xl tw-font-medium tw-text-gray-700">
                    Name:
                  </span>
                </div>
                <div className="col">
                  <span className="tw-text-start tw-text-xl tw-font-light tw-text-gray-500">
                    Test name
                  </span>
                </div>
                <div className="col-sm-1 col-md-4 col-lg-4"></div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-1 col-md-3 col-lg-3"></div>
                <div className="col">
                  <span className="tw-text-base tw-text-xl tw-font-medium tw-text-gray-700">
                    Email:
                  </span>
                </div>
                <div className="col">
                  <span className="tw-text-start tw-text-xl tw-font-light tw-text-gray-500">
                    test@gmail.com
                  </span>
                </div>
                <div className="col-sm-1 col-md-4 col-lg-4"></div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-1 col-md-3 col-lg-3"></div>
                <div className="col">
                  <span className="tw-text-base tw-text-xl tw-font-medium tw-text-gray-700">
                    Phone:
                  </span>
                </div>
                <div className="col">
                  <span className="tw-text-start tw-text-xl tw-font-light tw-text-gray-500">
                    9988776655
                  </span>
                </div>
                <div className="col-sm-1 col-md-4 col-lg-4"></div>
              </div>

              <div className="row mt-3">
                <div className="col-sm-1 col-md-3 col-lg-3"></div>
                <div className="col">
                  <div className="btn btn-primary mt-3 ms-2">
                    <a href="/edit-page" className="tw-text-white">
                      Change Password
                    </a>
                  </div>

                  <div className="btn btn-primary mt-3 ms-2">
                    <a href="/edit-page" className="tw-text-white">
                      Payment History
                    </a>
                  </div>
                </div>
                <div className="col-sm-1 col-md-4 col-lg-4"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="tw-text-end ">
              <a href="" className="btn btn-danger mt-2">
                Log out
              </a>
            </div>
            <div className="tw-flex tw-justify-center mt-5">
              <img
                src={userImage}
                alt="User Image"
                className="tw-rounded-full tw-shadow-lg tw-w-32 tw-h-32 tw-object-cover"
              />
            </div>
            <div className="tw-flex tw-justify-center mt-3">
              <div className="btn btn-warning">
                <a href="/edit-page" className="tw-text-white">
                  Edit Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <hr className="fluid-container" />

        <div>
          <h1 className=" mt-3">My Properties</h1>
          <div className="container">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3 me-5">
              <a href="/add-property" class="btn btn-success me-5">
                Add New Property
              </a>
            </div>
            <div className="row">
              {arr.map((element) => {
                return (
                  <div className="col m-4">
                    <PropertyCard page={{ name: "Edit-Prop" }} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
