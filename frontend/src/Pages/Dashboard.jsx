import ProductCard from "../Components/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { deleteCookie, getUserDetails } from "../services/methods";
import { GetSpecficPropertyUser } from "../services/property";
import ImageUploadComponent from "../Components/ImageUploadComponent";

function Dashboard() {
  const [data, setData] = useState("");
  const [Img, setImg] = useState("");
  const [Properities, SetProperities] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const result = await GetSpecficPropertyUser(data.id);
    if (result.status === 200) {
      const propData = result.data;
      return propData;
    } else {
      toast.warning("Fetching error");
      return [];
    }
  };

  useEffect(() => {
    getUserDetails().then((res) => {
      if (res.data.status === "Success") {
        setData(res.data.data);
        setImg(res.data.data.profilePic);
        fetchData().then((res) => {
          SetProperities([...res]);
        });
      } else {
        toast.error(res.status);
      }
    });
  }, []);

  const logout = () => {
    deleteCookie("token");
    navigate("/login");
  };

  return (
    <div>
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
                    {data.userName}
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
                    {data.firstName} {data.lastName}
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
                    {data.email}
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
                    {data.phoneNumber}
                  </span>
                </div>
                <div className="col-sm-1 col-md-4 col-lg-4"></div>
              </div>

              <div className="row mt-3">
                <div className="col-sm-1 col-md-3 col-lg-3"></div>
                <div className="col">
                  <div className="btn btn-primary mt-3 ms-2">
                    <Link to="/reset-password" className="tw-text-white">
                      Change Password
                    </Link>
                  </div>
                </div>
                <div className="col-sm-1 col-md-4 col-lg-4"></div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="tw-text-end ">
              <a href="" className="btn btn-danger mt-2" onClick={logout}>
                Log out
              </a>
            </div>

            <div className="tw-flex tw-justify-center mt-5">
              <ImageUploadComponent userImg={Img} />
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
              <a href={`/add-property`} class="btn btn-success me-5">
                Add New Property
              </a>
            </div>
            <div className="row">
              {Properities.length === 0 ? (
                <h1 className="centered mt-3">User Has No Added Properties</h1>
              ) : (
                Properities.map((property) => {
                  return (
                    <div className="col m-4">
                      <ProductCard
                        page={{ name: "Edit-Prop" }}
                        id={property.id}
                        title={property.title}
                        description={property.description}
                        price={property.price}
                        owner={property.owner}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
