import React, { useEffect, useState } from "react";
import "./editpost.css";
import { useUserAuth } from "../../context/UserAuthContext";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import { v4 } from "uuid";
import ProductService from "../../services/product.service";
import Loading from "../loading/Loading";
import Showproduct from "../showproduct/Showproduct"
import { useNavigate } from "react-router-dom";

// what I learned
//  image is setting and url is coming after delay so use async and await for such situtation plus loader component for better visulizaution
//
//
//
//
//
//

const Editpost = (props) => {


  const { user } = useUserAuth();
  const [mainImage, setMainImage] = useState(null);
  const [imagesUpload, setImagesUpload] = useState([]);
  const [imagesURLs, setImagesURLs] = useState([]);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadDetailsCont, setLoadDetailsCont] = useState(false);

  useEffect(() => {
    if (mainImageUrl !== "") {
      console.log(mainImageUrl);
    }
    if (imagesURLs !== []) {
      console.log(imagesURLs);
    }
  }, [mainImageUrl, imagesURLs]);

  const handleUploadMainImage = async () => {
    if (mainImage == null) return;
    const imageRef = ref(
      storage,
      `ProductsPics/${user.email}/Primary/${mainImage.name + v4()}`
    );
    // important
    var url = await uploadBytes(imageRef, mainImage).then((res) => {
      return res;
    });

    setMainImageUrl(url.metadata.fullPath);
  };

  // FOr multiple image upload
  const handleImages = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["Id"] = Math.random();
      setImagesUpload((prevState) => [...prevState, newImage]);
    }
  };

  const handleUploadImages = async () => {
    imagesUpload.map(async (image) => {
      const imageRef = ref(
        storage,
        `ProductsPics/${user.email}/Secondary/${image.name + v4()}`
      );
      // Important
      var urls = await uploadBytes(imageRef, image).then((res) => {
        return res;
      });

      setImagesURLs((prevState) => [...prevState, urls.metadata.fullPath]);
      // console.log(imagesURLs)
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await handleUploadMainImage();
    await handleUploadImages();
    setLoading(false);
    setLoadDetailsCont(true);
  };

  // will divide this component into 2  1st For uploading photos and then uploading description
  return (
    <div className="rb__product">
      <div className="rb__product-heading">
        <h2>Add Product</h2>
      </div>
      {loadDetailsCont ? (
        <Description PrimaryImage={mainImageUrl} SecondaryImages={imagesURLs} />
      ) : (
        <>
          <div className="rb__product-container">
            <div className="rb__product-photos">
              <h4>Main Image</h4>
              <input
                type="file"
                id="myFile"
                name="filename"
                onChange={(event) => {
                  setMainImage(event.target.files[0]);
                }}
              />
              <div className="rb__product-photos_other">
                <h4>Other Images</h4>
                <input
                  type="file"
                  id="myFile"
                  name="-secondary-image1"
                  onChange={handleImages}
                />
                <input
                  type="file"
                  id="myFile"
                  name="secondary-image2"
                  onChange={handleImages}
                />
                <input
                  type="file"
                  id="myFile"
                  name="secondary-image3"
                  onChange={handleImages}
                />
                <input
                  type="file"
                  id="myFile"
                  name="secondary-image4"
                  onChange={handleImages}
                />
              </div>
            </div>
          </div>
          <div className="rb__product-upload">
            {loading ? (
              <Loading />
            ) : (
              <button onClick={handleSubmit}>Upload</button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Editpost;

export const Description = (props) => {

  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { user } = useUserAuth();

  const handleProductDetails = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };

  const UploadDetails = async () => {
    const newProduct = {
      ProductName: data.product_name,
      ProductsDetails: data.product_details,
      ProductPrice: data.product_price,
      ProductMrp: data.product_mrp,
      ProductQuantity: data.product_quantity,
      ProductMainImage: props.PrimaryImage,
      ProductSecondaryImages: props.SecondaryImages,
    };
    console.log(newProduct);

    console.log(newProduct);
    try {
      const response = await ProductService.addProduct(user.email, newProduct);
      console.log(response);
      alert("Added successfully")
      navigate('/Showproduct')
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="rb__product-desc">
        <div className="rb__product-desc_name">
          <h4>Product Name</h4>
          <input
            type="text"
            name="product_name"
            placeholder="Name"
            onChange={(event) => handleProductDetails(event)}
          />
        </div>
        <div className="rb__product-desc_details">
          <h4>Product Details</h4>
          <textarea
            type="text"
            name="product_details"
            placeholder="Details"
            onChange={(event) => handleProductDetails(event)}
          />
        </div>
        <div className="rb__product-desc_pricing">
          <h4>Product Price</h4>
          <input
            type="text"
            name="product_price"
            placeholder="Price"
            onChange={(event) => handleProductDetails(event)}
          />
          <input
            type="text"
            name="product_mrp"
            placeholder="MRP"
            onChange={(event) => handleProductDetails(event)}
          />
        </div>
        <div className="rb__product-desc_quantity">
          <h4>Product Quantity</h4>
          <input
            type="number"
            name="product_quantity"
            placeholder="10"
            onChange={(event) => handleProductDetails(event)}
          />
        </div>
        <div className="rb__product-upload">
          <button onClick={UploadDetails}>Upload</button>
        </div>
      </div>
    </div>
  );
};
