import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TagInput from "../Components/TagHandling";
import {
  addProperty,
  addPropertyImages,
  GetAllTags,
} from "../services/property";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const [TagList, setTagList] = useState([]);
  const [title, setTitle] = useState("");
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
  const [Images, setImages] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [AvailableTags, setAvailableTags] = useState([]);

  const navigate = useNavigate();
  const handleTagsChange = (tags) => {
    // const newTags = selectedTags;
    const newTags = new Set(tags);
    console.log(tags + "-----" + selectedTags + "-----" + newTags);
    tags.map((e) => {
      newTags.add(e);
    });
    setTagList([...newTags]);
    setSelectedTags([...newTags]);
    console.log("After Adding: " + TagList);
  };

  const fetchData = async () => {
    try {
      const result = await GetAllTags(); // Backend Integration
      if (result.status == "Success") {
        const data = result.data;
        return data;
      } else {
        toast.warning("No Tags Found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching property data:", error);
      toast.error("Error fetching property data");
      return null;
    }
  };

  const addProp = async () => {
    console.log("Pre Edit Tags:" + TagList);
    const tagsDTORequest = TagList.map((tag) => ({
      tagName: tag,
    }));
    if (title.length === 0) {
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
    } else if (Images.length === 0) {
      toast.warning("Please Enter Property Images");
    } else if (selectedTags.length === 0) {
      toast.warning("Please Enter Property Tag");
    } else {
      // Backend Integration Code
      const propertyRequest = {
        title: title,
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
      setImages(Image);

      const result = await addProperty(propertyRequest);
      console.log(result);
      if (result.status === 200) {
        const data = result.data;
        toast.success(`Property Added`);
        const propid = data.id;
        const ImgResult = await addPropertyImages(Image, propid);
        if (ImgResult.status === 200) {
          toast.success(`Images Added`);
          navigate("/dashboard");
        } else {
          toast.warning(`Faced Issue in Uploading Images`);
        }
      } else {
        toast.warning(`Property not Added`);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const prop = await fetchData();
      const newTags = new Set([]);
      prop.map((e) => {
        newTags.add(e.tagName);
      });
      setAvailableTags([...newTags]);
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
                <h1 className="page-title mt-3">Add Property</h1>
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
                    <div className="form-label mt-5">Address Line 1: </div>
                    <div>
                      <textarea
                        type="text"
                        placeholder="Enter Address Line 1"
                        name="AddressLine1"
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
                    <div className="form-label mt-5">Address Line 2: </div>
                    <div>
                      <textarea
                        type="text"
                        placeholder="Enter Address Line 2"
                        name="AddressLine2"
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
                      aria-label="Select State"
                      name="State"
                      defaultValue={"default"}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    >
                      <option value="default">Select State</option>
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
                      aria-label="Select District"
                      defaultValue={"default"}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                      }}
                    >
                      <option value="default">Select District</option>
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
                      aria-label="Select Type"
                      defaultValue={"default"}
                      name="PropType"
                      onChange={(e) => {
                        setType(e.target.value);
                      }}
                    >
                      <option value="default">Select Type</option>
                      <option value="BHK_1">1-BHK</option>
                      <option value="BHK_2">2-BHK</option>
                      <option value="BHK_3">3-BHK</option>
                      <option value="APARTMENT">Apartment Building</option>
                      <option value="BUNGLOW">Bunglow</option>
                      <option value="VILLA">Villa</option>
                    </select>
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property Area: </div>
                    <input
                      type="number"
                      placeholder="Enter Area"
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
                      <TagInput
                        availableTags={AvailableTags}
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
                      name="Bedrooms"
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
                      onChange={(e) => {
                        setBathroom(e.target.value);
                      }}
                      name="Bathroom"
                      className="form-control mb-5"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col me-5">
                    <div className="form-label">Property Price: </div>
                    <input
                      type="text"
                      placeholder="Enter Price"
                      name="Price"
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
                        setImages(e.target.value);
                      }}
                      multiple
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <center>
                    <button
                      type="Submit"
                      className="mt-3 ms-3 text-2xl btn btn-success"
                      onClick={addProp}
                      placeholder="Add Property"
                    >
                      Add Property
                    </button>
                  </center>
                </div>
              </div>

              {/* </form> */}
            </div>

            <div className="col-sm-1 col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
