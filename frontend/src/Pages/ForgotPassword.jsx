function ForgotPassword() {
  return (
    <div
      style={{
        marginLeft: "650px",
        marginTop: "200px",
        width: "400px",
        marginBottom: "158px",
      }}
    >
      <h1>Enter Your Email!!!</h1>
      <input
        type="text"
        placeholder="Enter Your Email!!!"
        className="form-control"
      />
      <button style={{ marginLeft: "120px" }} className="btn btn-warning mt-2">
        Change Password
      </button>
    </div>
  );
}

export default ForgotPassword;
