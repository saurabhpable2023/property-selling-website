import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { uploadImage } from "../services/User";

function ImageUploadComponent({ userImg }) {
  // Default image is a URL or Base64 string for the placeholder

  const imgDemo =
    "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMjE0RjRCQUQxNzExMUU0QTAyQkI4MkNFRjE4OEIzNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMjE0RjRCQkQxNzExMUU0QTAyQkI4MkNFRjE4OEIzNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEyMTRGNEI4RDE3MTExRTRBMDJCQjgyQ0VGMTg4QjM2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEyMTRGNEI5RDE3MTExRTRBMDJCQjgyQ0VGMTg4QjM2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kPtGPAAAAMNQTFRFrKysvb296Ojo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";

  const [userImage, setUserImage] = useState(imgDemo);
  useEffect(() => {
    // Update the userImage state if userImg changes
    if (userImg) {
      setUserImage(userImg);
    } else {
      setUserImage(imgDemo);
    }
  }, [userImg]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]; // Get the uploaded file

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result); // Update the image in the state
      };
      reader.readAsDataURL(file); // Convert the file to a base64 string

      try {
        await uploadImage(file); // Call the upload service
        window.location.reload();
      } catch (error) {
        toast.error("Error uploading image");
      }
    }
  };

  return (
    <div className="tw-flex tw-justify-center mt-5">
      <label htmlFor="imageUpload">
        <img
          src={"data:image/png;base64," + userImage} // This is now the state variable
          alt="User Profile pic"
          className="tw-rounded-full tw-shadow-lg tw-w-32 tw-h-32 tw-object-cover"
          style={{ cursor: "pointer" }}
        />
      </label>
      <input
        type="file"
        id="imageUpload"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
    </div>
  );
}

export default ImageUploadComponent;
