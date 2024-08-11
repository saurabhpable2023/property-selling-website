import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function EditProperty() {
  const [Title, setTitle] = useState("Testing Title")
  const [Descpt, setDescpt] = useState("Testing Description")
  const [Address, setAddress] = useState("Pune")
  const [State, setState] = useState("Maharashtra")
  const [District, setDistrict] = useState("Pune")
  const [City, setCity] = useState("Pune")
  const [Pincode, setPincode] = useState("411033")
  const [Type, setType] = useState("Apartment")
  const [Area, setArea] = useState("5000")
  const [Bedroom, setBedroom] = useState("2")
  const [Bathroom, setBathroom] = useState("2")
  const [Price, setPrice] = useState("2000000")

  const fetchData = async () => {
    const id = 1
    // const result = await GetSpecficPropertyId(id) //Backend Integration
    // if (result['Status'] === 'success') {
    //   if (result['data'].length !== 0) {
    //     const data = result['data']
    //     return data[0]
    //   }
    //   else {
    //     toast.warning(`No Such Blog Found`)
    //   }
    // }
  }
  const editProp = async () => {
    if (Title.length === 0) {
      toast.warning("Please Enter Property Title")
    }
    else if (Descpt.length === 0) {
      toast.warning("Please Enter Property Description")
    } else if (Address.length === 0) {
      toast.warning("Please Enter Property Address")
    } else if (Descpt.length === 0) {
      toast.warning("Please Enter Property Description")
    } else if (State.length === 0) {
      toast.warning("Please Enter Property State")
    } else if (District.length === 0) {
      toast.warning("Please Enter Property District")
    } else if (City.length === 0) {
      toast.warning("Please Enter Property City")
    } else if (Pincode.length === 0) {
      toast.warning("Please Enter Property Pincode")
    } else if (Area.length === 0) {
      toast.warning("Please Enter Property Area")
    } else if (Type.length === 0) {
      toast.warning("Please Enter Property Type")
    } else if (Bedroom.length === 0) {
      toast.warning("Please Enter Property Bedrooms")
    } else if (Bathroom.length === 0) {
      toast.warning("Please Enter Property Bathrooms")
    } else if (Price.length === 0) {
      toast.warning("Please Enter Property Price")
    }
    else {
      const id = 1
      // const result = await EditSpecficPropertyId(id, Title, Address, City, State, District, Pincode, Type, Price, Area, Bedroom, Bathroom, Descpt)
      // if (result['Status'] === 'success') {
      //   if (result['data'].length !== 0) {
      //     toast.success(`Property Ediited-1`)
      //   }
      //   else {
      //     toast.warning(`Property not Edited-2`)
      //   }
      // }
      // else {
      //   toast.warning(`Property not Editted-3`)
      // }
    }
  }
  useEffect(() => {
    (async () => {
      // const prop = await fetchData()
      // const { title, address, city, state, district, pincode, propertyType, price, PropertyArea, bedrooms, bathrooms, description } = prop
      // setTitle(title)
      // setAddress(address)
      // setCity(city)
      // setState(state)
      // setDistrict(district)
      // setType(propertyType)
      // setPincode(pincode)
      // setPrice(price)
      // setArea(PropertyArea)
      // setBedroom(bedrooms)
      // setBathroom(bathrooms)
      // setDescpt(description)
    })
      ();
  }, []);
  return (
    <div>
      <Header />
      <div className='container'>

        <div >
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
                    <div><input type="text" placeholder="Property Title" name="PropName" value={Title} onChange={(e) => { setTitle(e.target.value) }} className="form-control mb-5" /></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <div className="form-label ">Property Description:</div>
                    <textarea type="text" placeholder="Property Description" name="PropDescript" value={Descpt} onChange={(e) => { setDescpt(e.target.value) }} className="form-control" rows={5} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <div className="form-label mt-5">Address: </div>
                    <div><textarea type="text" placeholder="Enter Address" name="Address" value={Address} onChange={(e) => { setAddress(e.target.value) }} className="form-control mb-3" /></div>
                  </div>
                </div>
              </div>
              <div className="container mt-5">
                <div className="row mt-5">
                  <div className="col me-5">
                    <div className="form-label">Property State: </div>
                    <select className="form-select" name="State" aria-label="Select State" value={State} onChange={(e) => { setState(e.target.value) }}>
                      <option value="Maharastra">Maharastra</option>
                      <option value="Goa">Goa</option>
                      <option value="Karnataka">Karnataka</option>
                    </select>
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property District: </div>
                    <select className="form-select" name="District" value={District} aria-label="Select District" onChange={(e) => { setDistrict(e.target.value) }}>
                      <option value="Pune">Pune</option>
                      <option value="North-Goa">North-Goa</option>
                      <option value="Belgaum">Belgaum</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col me-5">
                    <div className="form-label">Property City: </div>
                    <input type="text" placeholder="Select City" value={City} name="City" onChange={(e) => { setCity(e.target.value) }} className="form-control" />
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property Pincode: </div>
                    <input type="number" placeholder="Enter Pincode" value={Pincode} name="Pincode" onChange={(e) => { setPincode(e.target.value) }} className="form-control" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col me-5">
                    <div className="form-label">Property Type: </div>
                    <select className="form-select" name="PropType" value={Type} aria-label="Select Type" onChange={(e) => { setType(e.target.value) }}>
                      <option value="Bunglow">Bunglow</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                    </select>
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property Area: </div>
                    <input type="number" placeholder="Enter Area" value={Area} name="Area" onChange={(e) => { setArea(e.target.value) }} className="form-control mb-5" />
                  </div>
                </div>
                <div className="row">
                  <div className="col me-5">
                    <div className="form-label">Property Bedrooms: </div>
                    <input type="number" placeholder="Enter Number of Bedrooms" value={Bedroom} name="Bedroom" onChange={(e) => { setBedroom(e.target.value) }} className="form-control mb-5" />
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property Bathrooms: </div>
                    <input type="number" placeholder="Enter Number of Bathrooms" value={Bathroom} name="Bathroom" onChange={(e) => { setBathroom(e.target.value) }} className="form-control mb-5" />
                  </div>
                </div>
                <div className="row">
                  <div className="col me-5">
                    <div className="form-label">Property Price: </div>
                    <input type="number" placeholder="Enter Price" name="Price" value={Price} onChange={(e) => { setPrice(e.target.value) }} className="form-control mb-5" />
                  </div>
                  <div className="col me-3">
                    <div className="form-label">Property Images: </div>
                    <input className="form-control" type="file" name="Images" id="formFileMultiple" multiple />
                  </div>
                </div>
                <div className="mb-3">
                  <center>
                    <button type="Submit" className="mt-3 ms-3 text-2xl btn btn-success" onClick={editProp} placeholder="Update Property">Update Property</button>
                  </center>
                </div>
              </div>
            </div >
            <div className="col-sm-1 col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditProperty;
