function ContactUs(){
    return(
        <div className="row">

        <div className="col"></div>

        <div className="container contactUsForm col-lg-6 col-md-12 px-4">
            
            <h1 className="centered mb-5 mt-3">Contact Us</h1>
            <div className="form-label">Name:</div>
            <input type="text" placeholder="Enter Your Name" className="form-control" />

            <div className="form-label">Email:</div>
            <input type="text" placeholder="Enter Your Email" className="form-control" />

            <div className="form-label">Name:</div>
            <textarea className="form-control" rows={10} placeholder="Type Your Message Here..."></textarea>

            <button className="btn btn-success mt-3 mb-5">Send Message</button>
        </div>

        <div className="col"></div>
        </div>
    )
}

export default ContactUs;