import React, { useEffect, useState, useCallback } from "react";
import "./updateprofile.css";
import dummy from "../../assets/blank-profile-picture-g0e62e6b69_1280.png";
import UpdateProfileService from "../../services/update.service";
import { useUserAuth } from "../../context/UserAuthContext";
// for image upload
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { v4 } from "uuid";
import Loading from "../loading/Loading";

const Updateprofile = () => {
  const [preview, setPreview] = useState({ preview: "", raw: "" });
  const { user } = useUserAuth();
  const [imageUpload, setImageUpload] = useState(null);
  const [data, setData] = useState({});
  const [profilePic, setProfilPic] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    if (user !== undefined) getUserDetails();
    console.log(user.photoURL);
  }, [user]);

  const handleImg = (e) => {
    if (e.target.files.length) {
      setPreview({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleUploadImage = async () => {
    if (preview.raw == "") return;
    if (data.profilePic != null && data.profilePic != "") {
      const desertRef = ref(storage, `${data.profilePic}`);
      deleteObject(desertRef)
        .then(() => {
          console.log("deleted successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const imageRef = ref(
      storage,
      `ProfilePics/${user.email}/${preview.raw.name}`
    );
    uploadBytes(imageRef, preview.raw)
      .then((res) => {
        UpdateProfileService.updateUser(user.email, {
          profilePic: res.metadata.fullPath,
        });
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handleUploadUserDetail = async () => {
    if (imageUpload !== undefined) await handleUploadImage();
    if (userType !== "") {
      setData({ ...data, userType: userType });
      console.log(data);
    }
    alert("hello");
    try {
      var input = await UpdateProfileService.updateUser(user.email, data);
      console.log(input);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      UpdateProfileService.getUserDetails(user.email).then((res) =>
        setData({ ...data, ...res.data() })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };

  return (
    <div className="rb__updateprofile">
      <div className="rb__updateprofile-bio">
        <label htmlFor="upload-button">
          {preview.preview ? (
            <img src={preview.preview} alt="Image" />
          ) : (
            <img src={user.photoURL} cursor="pointer" alt="1Image" />
          )}
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleImg}
        />
        <div className="rb__updateprofile-bio_container">
          <h3>{data.fullname}</h3>
          <h4>{data.comp_name === "" ? "Company Name" : data.comp_name}</h4>
          <h4>{data.userType}</h4>
          <button onClick={handleUploadImage}> Upload Image</button>
        </div>
      </div>
      <div className="rb__updateprofile-container">
        <h4>Full Name</h4>
        <input
          type="text"
          name="fullname"
          placeholder={data.fullname}
          onChange={(event) => handleInput(event)}
        />
        <h4>Company Name</h4>
        <input
          type="text"
          name="comp_name"
          placeholder={data.company}
          onChange={(event) => handleInput(event)}
        />
        {/* <h4>Email</h4>
        <input type="text"  name="email" placeholder={data.email} /> */}
        <h4>Contact No</h4>
        <input
          type="text"
          name="contact"
          placeholder={data.contact}
          onChange={(event) => handleInput(event)}
        />
        <h4>Address</h4>
        <input
          type="text"
          name="address"
          placeholder="Name"
          onChange={(event) => handleInput(event)}
        />
        <h4>Profile Type</h4>
        <div className="rb__updateprofile-container_buttons">
          <button onClick={(event) => setUserType("Retailer")}>Retailer</button>
          <button onClick={(event) => setUserType("Seller")}>Seller</button>
          <button onClick={(event) => setUserType("Manufacturer")}>
            Manufacturer
          </button>
        </div>

        {/* <h4>City</h4>
        <input type="text" placeholder="Name" />
        <h4>State</h4>
      <input type="text" placeholder="Name" /> */}
        <h4>Country</h4>
        <input
          type="text"
          name="country"
          placeholder="Name"
          onChange={(event) => handleInput(event)}
        />
      </div>
      <button onClick={handleUploadUserDetail}> Update</button>
    </div>
  );
};

export default Updateprofile;
