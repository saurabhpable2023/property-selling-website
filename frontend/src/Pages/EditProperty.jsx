import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addPropertyImages,
  DeletePropertyImage,
  EditSpecficPropertyId,
  getPropertyImages,
  GetSpecficPropertyId,
} from "../services/property";
import { useNavigate } from "react-router-dom";
import TagInput from "../Components/TagHandling";

function EditProperty() {
  const pathname = window.location.pathname;
  const propid = pathname.split("/").pop();
  const [TagList, setTagList] = useState([]);
  const [Title, setTitle] = useState("");
  const [Descpt, setDescpt] = useState("");
  const [AddressLine1, setAddressLine1] = useState("");
  const [AddressLine2, setAddressLine2] = useState("");
  const [State, setState] = useState("");
  const [District, setDistrict] = useState("");
  const [City, setCity] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Type, setType] = useState("");
  const [Area, setArea] = useState("");
  const [Bedroom, setBedroom] = useState("");
  const [Bathroom, setBathroom] = useState("");
  const [Price, setPrice] = useState("");
  // const [Images, setImages] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [Images, setImages] = useState([]);
  const [ImgChk, setImgChk] = useState([]);
  var images = [];
  const navigate = useNavigate();
  const handleTagsChange = (tags) => {
    // const newTags = selectedTags;
    const newTags = new Set(tags);
    tags.map((e) => {
      newTags.add(e);
    });
    setTagList([...newTags]);
    setSelectedTags([...newTags]);
  };

  //Send to Backend to Get the Available Tags
  const availableTags = [
    "1BHK",
    "2BHK",
    "3BHK",
    "Bunglow",
    "Villa",
    "Hill-Side",
  ];

  const fetchData = async () => {
    try {
      const result = await GetSpecficPropertyId(propid); // Backend Integration
      if (result.status === 200) {
        const data = result.data;
        return data;
      } else {
        toast.warning("No Such Property Found");
        return null;
      }
    } catch (error) {
      toast.error("Error fetching property data");
      return null;
    }
  };
  const editProp = async () => {
    const tagsDTORequest = TagList.map((tag) => ({
      tagName: tag,
    }));
    if (Title.length === 0) {
      toast.warning("Please Enter Property Title");
    } else if (Descpt.length === 0) {
      toast.warning("Please Enter Property Description");
    } else if (AddressLine1.length === 0) {
      toast.warning("Please Enter Property Address Line 1");
    } else if (AddressLine2.length === 0) {
      toast.warning("Please Enter Property Address Line 2");
    } else if (Descpt.length === 0) {
      toast.warning("Please Enter Property Description");
    } else if (State.length === 0) {
      toast.warning("Please Enter Property State");
    } else if (District.length === 0) {
      toast.warning("Please Enter Property District");
    } else if (City.length === 0) {
      toast.warning("Please Enter Property City");
    } else if (Pincode.length === 0) {
      toast.warning("Please Enter Property Pincode");
    } else if (Area.length === 0) {
      toast.warning("Please Enter Property Area");
    } else if (Type.length === 0) {
      toast.warning("Please Enter Property Type");
    } else if (Bedroom.length === 0) {
      toast.warning("Please Enter Property Bedrooms");
    } else if (Bathroom.length === 0) {
      toast.warning("Please Enter Property Bathrooms");
    } else if (Price.length === 0) {
      toast.warning("Please Enter Property Price");
    } else if (Images.length === 0 && ImgChk.length === 0) {
      toast.warning("Please Enter Property Image");
    } else {
      const propertyRequest = {
        title: Title,
        description: Descpt,
        price: Price,
        propertyArea: Area,
        propertyType: Type,
        bedrooms: Bedroom,
        washrooms: Bathroom,
        address: {
          addressLine1: AddressLine1,
          addressLine2: AddressLine2,
          city: City,
          state: State,
          district: District,
          pincode: Pincode,
        },
        tags: tagsDTORequest,
      };
      Image = [];
      const files = document.getElementById("formFileMultiple");
      for (let i = 0; i < files.files.length; i++) {
        Image.push(files.files[i]);
      }
      const result = await EditSpecficPropertyId(propertyRequest, propid);
      // const result = await EditSpecficPropertyId(id, Title, Address, City, State, District, Pincode, Type, Price, Area, Bedroom, Bathroom, Descpt)
      if (result.message === "Update Done") {
        const ImgResult = await addPropertyImages(Image, propid);
        toast.success(result.message + " Successfully");
        navigate("/dashboard");
      } else {
        toast.warning(`Facing Some Issues`);
      }
    }
  };
  const fetchImage = async () => {
    // const id = 9;
    const result = await getPropertyImages(propid); // Backend Integration
    if (result.status === 200) {
      const data = result.data;
      return data;
    } else {
      toast.warning("No Such Property Images Found");
      return null;
    }
  };

  const deleteImage = async (id) => {
    if (window.confirm("Are you Sure you want to Delete User")) {
      const result = await DeletePropertyImage(id); // Backend Integration
      if (result.status === 200) {
        images = await fetchImage();
        setImages(images);
        toast.success(result.data.message);
      } else {
        toast.warning(result.data.message);
        return null;
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    (async () => {
      fetchData().then((prop) => {
        const {
          title,
          address,
          propertyType,
          tags,
          price,
          propertyArea,
          bedrooms,
          bathrooms,
          description,
        } = prop;
        setTitle(title);
        setAddressLine1(address.addressLine1);
        setAddressLine2(address.addressLine2);
        setCity(address.city);
        setState(address.state);
        setDistrict(address.district);
        setPincode(address.pincode);
        const tagsArray = tags.map((tag) => tag.tagName); // Update the state asynchronously
        setSelectedTags(tagsArray);
        setType(propertyType);
        setPrice(price);
        setArea(propertyArea);
        setBedroom(bedrooms);
        setBathroom(bathrooms);
        setDescpt(description);
        setTagList(tagsArray);
      });
      fetchImage().then((images) => {
        setImages(images);
      });
    })();
  }, []);
  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-3 ">
            <div className="col-sm-1 col-md-2 col-lg-2"></div>

            <div className="col formContainer col-lg-8 col-md-12 px-4 mt-3 ">
              <center>
                <h1 className="page-title mt-3">Edit Property</h1>
              </center>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <div className="form-label">Property Title: </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Property Title"
                        name="PropName"
                        value={Title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        className="form-control mb-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <div className="form-label ">Property Description:</div>
                    <textarea
                      type="text"
                      placeholder="Property Description"
                      name="PropDescript"
                      value={Descpt}
                      onChange={(e) => {
                        setDescpt(e.target.value);
                      }}
                      className="form-control"
                      rows={5}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <div className="form-label mt-5">Address Line-1: </div>
                    <div>
                      <textarea
                        type="text"
                        placeholder="Enter Address"
                        name="Address"
                        value={AddressLine1}
                        onChange={(e) => {
                          setAddressLine1(e.target.value);
                        }}
                        className="form-control mb-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <div className="form-label mt-5">Address Line-2: </div>
                    <div>
                      <textarea
                        type="text"
                        placeholder="Enter Address"
                        name="Address"
                        value={AddressLine2}
                        onChange={(e) => {
                          setAddressLine2(e.target.value);
                        }}
                        className="form-control mb-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mt-5">
                <div className="row mt-5">
                  <div className="col me-5">
                    <div className="form-label">Property State: </div>
                    <select
                      className="form-select"
                      name="State"
                      aria-label="Select State"
                      value={State}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    >
                      <option value="Maharastra">Maharastra</option>
                      <option value="Goa">Goa</option>
                      <option value="Karnataka">Karnataka</option>
                    </select>
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property District: </div>
                    <select
                      className="form-select"
                      name="District"
                      value={District}
                      aria-label="Select District"
                      onChange={(e) => {
                        setDistrict(e.target.value);
                      }}
                    >
                      <option value="Pune">Pune</option>
                      <option value="North-Goa">North-Goa</option>
                      <option value="Belgaum">Belgaum</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col me-5">
                    <div className="form-label">Property City: </div>
                    <input
                      type="text"
                      placeholder="Select City"
                      value={City}
                      name="City"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      className="form-control"
                    />
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property Pincode: </div>
                    <input
                      type="number"
                      placeholder="Enter Pincode"
                      value={Pincode}
                      name="Pincode"
                      onChange={(e) => {
                        setPincode(e.target.value);
                      }}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col me-5">
                    <div className="form-label">Property Type: </div>
                    <select
                      className="form-select"
                      name="PropType"
                      value={Type}
                      aria-label="Select Type"
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    >
                      <option value="Bunglow">Bunglow</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                    </select>
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property Area: </div>
                    <input
                      type="number"
                      placeholder="Enter Area"
                      value={Area}
                      name="Area"
                      onChange={(e) => {
                        setArea(e.target.value);
                      }}
                      className="form-control mb-5"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col me-5 mb-5">
                    <div className="form-label">Property Tags: </div>
                    <div>
                      Already Added Tags: {TagList.map((tag) => tag + ",")}
                    </div>
                    <div>
                      <TagInput
                        availableTags={availableTags}
                        onTagsChange={handleTagsChange}
                        SelectedTags={TagList}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col me-5">
                    <div className="form-label">Property Bedrooms: </div>
                    <input
                      type="number"
                      placeholder="Enter Number of Bedrooms"
                      value={Bedroom}
                      name="Bedroom"
                      onChange={(e) => {
                        setBedroom(e.target.value);
                      }}
                      className="form-control mb-5"
                    />
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property Bathrooms: </div>
                    <input
                      type="number"
                      placeholder="Enter Number of Bathrooms"
                      value={Bathroom}
                      name="Bathroom"
                      onChange={(e) => {
                        setBathroom(e.target.value);
                      }}
                      className="form-control mb-5"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col me-5">
                    <div className="form-label">Property Price(in INR): </div>
                    <input
                      type="number"
                      placeholder="Enter Price"
                      name="Price"
                      value={Price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      className="form-control mb-5"
                    />
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property Images: </div>
                    <input
                      className="form-control"
                      type="file"
                      name="Images"
                      id="formFileMultiple"
                      onChange={(e) => {
                        setImgChk(e.target.value);
                      }}
                      multiple
                    />
                  </div>
                </div>
                <div className="row">
                  Already Added Images
                  <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                      <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                      </thead>
                      <tbody>
                        {Images.length === 0 ? (
                          <p>No Pre-exisitng Images</p>
                        ) : (
                          Images.map((img) => {
                            return (
                              <tr>
                                <td>{img.id}</td>
                                <td>{img.imageLink}</td>
                                <td>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => deleteImage(img.id)}
                                  >
                                    {" "}
                                    Delete Image
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mb-3">
                  <center>
                    <button
                      type="Submit"
                      className="mt-3 ms-3 text-2xl btn btn-success"
                      onClick={editProp}
                      placeholder="Update Property"
                    >
                      Update Property
                    </button>
                  </center>
                </div>
              </div>
            </div>
            <div className="col-sm-1 col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProperty;
