import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./showproduct.css";
import { MdOutlineStar, MdOutlineStarOutline, MdClose } from "react-icons/md";

import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../../firebaseConfig";
import Loading from "../loading/Loading";
import { useState } from "react";
import dummy from "../../assets/blank-profile-picture-g0e62e6b69_1280.png";
import ProductService from "../../services/product.service";
import { useUserAuth } from "../../context/UserAuthContext";

const Showproduct = (props) => {
  const { user } = useUserAuth();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [comment, setComment] = useState(null);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
   
    getProductDetail();
    getImage();
    console.log(data);
    if(data !== undefined ) { 
      setCommentList(data.ProductComments)
    }
    

  }, [data]);

  const getProductDetail = async () => {
    try {
      const response = await ProductService.getDetail(id);
      setData(response.data());
    } catch (error) {
      console.log(error);
    }
  };
  const getImage = () => {
    const imagesListRef = ref(storage, `ProductsPics/${id}/Primary`);
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImage(url);
        });
      });
    });
  };

  const getOtherImages = () => {
    const imagesListRef = ref(storage, `ProductsPics/${id}/Secondary`);
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImages((images) => [...images, url]);
        });
      });
    });
  };

  const handleComment = async () => {
    const newComment = {
      CommenterName: user.displayName,
      CommenterEmail: user.email,
      CommenterComment: comment,
    };
    console.log(newComment);
    try {
      const promise = await ProductService.uploadComment(newComment, id);
      console.log(promise);
      setComment('')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="rb__showproduct">
      {load && (
        <>
          <div className="rb__showproduct-popup scale-up-center">
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                width: "fit-content",
              }}
            >
              <MdClose
                cursor="pointer"
                size={40}
                onClick={() => setLoad(false)}
              />
            </div>
            {images.map((item, index) => {
              return <img key={index} src={item} />;
            })}
          </div>
        </>
      )}

      <div className="rb__showproduct-card">
        <img src={image} />

        <div className="rb__showproduct-card_content">
          <h3>{data.ProductName}</h3>
          <p>{data.ProductsDetails}</p>
          <div className="rb__showproduct-card_content-rating">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">
              5 stars
            </label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">
              4 stars
            </label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">
              3 stars
            </label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">
              2 stars
            </label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">
              1 star
            </label>
          </div>
          <button
            onClick={() => {
              setLoad(true);
              getOtherImages();
            }}
          >
            More Images
          </button>
        </div>
      </div>
      <div className="rb__showproduct-comment">
        {commentList === "" || commentList === undefined ? (
          <Loading />
        ) : (
          <>
            {commentList.map((item) => {
              return (
                <div className="rb__showproduct-comment_container">
                  <img src={dummy} alt="" className="src" />
                  <div className="rb__showproduct-comment-containe_comment">
                    <h4>{item.CommenterName}</h4>
                    <p>{item.CommenterComment}</p>
                  </div>
                </div>
              );
            })}
          </>
        )}

       { !commentList && <h3>No Comment</h3>}
        <div className="rb__showproduct-comment_box">
          <img src={""} />

          <input
            type="text"
            placeholder="comment"
            onChange={(event) => setComment(event.target.value)}
            className='"rb__showproduct-comment_box-input'
          />
          {loading ? (
            <Loading />
          ) : (
            <button onClick={handleComment}>Post</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Showproduct;
