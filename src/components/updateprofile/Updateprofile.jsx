import React, { useEffect, useState, useCallback } from "react";
import "./updateprofile.css";
import image from "../../assets/login.png";
import UpdateProfileService from "../../services/update.service";
import { useUserAuth } from "../../context/UserAuthContext";
// for image upload
import { ref, uploadBytes, getDownloadURL, listAll  } from "firebase/storage"
import { storage } from "../../firebaseConfig";
import {v4} from "uuid" ;
import Loading from "../loading/Loading";

const Updateprofile = ({ }) => {

  
  const {user} = useUserAuth();
  const [imageUpload, setImageUpload] = useState(null);
  const [data, setData] = useState({})
  const [profilePic, setProfilPic] = useState("");
  const [userType, setUserType] = useState("")


  useEffect(() => {
      if(user !== undefined ) getUserDetails();
      
  }, [user]);

  const getImage = () =>{
    const imagesListRef = ref(storage, `ProfilePics/${user.email}`);
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setProfilPic((prev) => [...prev, url]);
        });
      });
    });
  }


  const handleUploadImage = async() =>{
      if(imageUpload == null) return;

      const imageRef = ref(storage, `ProfilePics/${user.email}/${imageUpload.name + v4()}`)
      var url = await uploadBytes(imageRef, imageUpload).then((res) => {
         return res;
      }) 
      setData({...data, profilePic: url.metadata.fullPath})
      
  }

 
  
  const handleUploadUserDetail = async () =>{
    if(imageUpload !== undefined) await handleUploadImage();
    if(userType !== "") {
      setData({...data, userType: userType})
      console.log(data) 
    }
    alert("hello")
      try {
          var input = await UpdateProfileService.updateUser(user.email, data)
          console.log(input)
      } catch (error) {
          console.log(error.message)
      }
  }

  const getUserDetails = async() =>{
      try {
          let input = await UpdateProfileService.getUserDetails(user.email)
          setData({...data, ...input.data()});
          getImage();
          console.log(input.data())     
      } catch (error) {
          console.log(error )
      }
  }

  const handleInput = (event) =>{
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput});
  }
 

  return (
  
    <div className="rb__updateprofile">
      <div className="rb__updateprofile-bio">
        <img src={profilePic  === "" ? <Loading /> : profilePic} />
        <div className="rb__updateprofile-bio_container">
          <h3>{data.fullname}</h3>
          <h4>{data.comp_name == "" ? "Company Name" : data.comp_name}</h4>
          <h4>{data.userType}</h4>
          <input type="file" id="myFile" name="filename" onChange={(event) => {setImageUpload(event.target.files[0])}} />
          {/* <input type="submit" id='submit' onClick={handleUploadImage}/> */}
        </div>
      </div>
      <div className="rb__updateprofile-container">
        <h4>Full Name</h4>
        <input type="text" name="fullname" placeholder={data.fullname}   onChange={(event) => handleInput(event)}/>
        <h4>Company Name</h4>
        <input type="text" name="comp_name" placeholder={data.company}    onChange={(event) => handleInput(event)}  />
        {/* <h4>Email</h4>
        <input type="text"  name="email" placeholder={data.email} /> */}
        <h4>Contact No</h4>
        <input type="text" name="contact" placeholder={data.contact}   onChange={(event) => handleInput(event)}   />
        <h4>Address</h4>
        <input type="text" name="address" placeholder="Name"     onChange={(event) => handleInput(event)}  />
        <h4>Profile Type</h4>
        <div className="rb__updateprofile-container_buttons">
        <button  onClick={ (event) => (setUserType("Retailer"))} >Retailer</button>
        <button  onClick={ (event) => (setUserType("Seller"))} >Seller</button>
        <button  onClick={ (event) => (setUserType("Manufacturer"))} >Manufacturer</button>
        </div>
       
        {/* <h4>City</h4>
        <input type="text" placeholder="Name" />
        <h4>State</h4>
      <input type="text" placeholder="Name" /> */ }
        <h4>Country</h4>
        <input type="text" name="country"    placeholder="Name"    onChange={(event) => handleInput(event)}   /> 
      </div>
      <button   onClick={handleUploadUserDetail}> Update</button>
    </div>
  );
};

export default Updateprofile;
