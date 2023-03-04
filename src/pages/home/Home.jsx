import React, { useEffect, useState } from "react";
import "./home.css";
import {
  Navbar,
  Posts,
  Recentposts,
  Readpost,
  Listproducts,
  Showproduct,
  Search,
  Updateprofile,
  Chat,
  Editpost,
  Footer,
} from "../../components";
import image from "../../assets/post3.png";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import post from "../post";
import listproduct from "../listproduct";
import image2 from "../../assets/post2.png";
import { IoMdArrowForward } from "react-icons/io";
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  get,
  onSnapshot
} from "firebase/firestore";
import UpdateProfileService from "../../services/update.service";



// Api call to all post that would be random will be here
// and all the data would sends as props to Posts component which has posts html and css
// which will render the UI for all posts
// when user click to see any post in detail from POST component
//Post COmp will return its ID to this comp
// then we again sends this IF to read Post Component

const Home = () => {
  const [editProduct, setEditProduct] = useState(false);
  const [update, setUpdate] = useState(false);
  const { user } = useUserAuth();
  const [searchbutton, setSearchbutton] = useState(false);


    useEffect(() => {
      console.log(user.email)
      if(user.email !== undefined){
        // alert(user)
        getDetailHandler();
      }
    }, [user])

    // to get Id of logged in user, using their email, Replacing ID with mail because I cannot access ID after 5 to 6 days attempt
    // maybe you could have used the the uid coming from user object instead of email itself

    const getDetailHandler = async() =>{
        try {
          const details = await UpdateProfileService.getUserDetails(user.email)
          console.log(details.data())
        } catch (error) {
          console.log(error.message)
        }
        // const q = query(userCollectionRef, where("email", "==", user.email));
        // onSnapshot(q, (snapshot) => snapshot.docs.forEach((doc) =>{
        //   setID({ ...doc.data(), id: doc.id})
        // }))
        // console.log(id.id)

    }


  return (
    <div className="Main-Layout">
      <Navbar />
      <div className="rb__content">
        
        <Routes>
          <Route path="/*" element={<HomePageContent />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/ProductPageContent" element={<ProductPageContent />} />
          <Route path="/Updateprofile" element={<Updateprofile />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Readpost" element={<Readpost />} />
          <Route path="/Showproduct" element={<Showproduct />} />
          <Route path="/EditProduct" element={<Editpost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export const HomePageContent = () => {
  const [read, setRead] = useState(false);

  const toggleReadpost = () => {
    setRead((prevstate) => !prevstate);
  };

  const cardPost = post.map((item) => {
    return (
      <Posts
        key={item.id}
        img={image}
        author={item.author}
        title={item.title}
        content={item.content}
        handlePostClick={toggleReadpost}
      />
    );
  });

  return (
    <>
      <div className="rb__Homepage-content">
        <div className="rb__Homepage-content_cards"> 
        {cardPost}
        </div>
        <div className=""> 
        <Recentposts
          key={1}
          author="Girish bari"
          title="Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"
          className="rb__content-recentposts-section"
        />
        </div>
      </div>
    </>
  );
};

export const ProductPageContent = () => {
  const [show, setShow] = useState(2);
  const [readProduct, setReadProduct] = useState(false);
  const [scroll, setScroll] = useState(2);

  const toggleReadproduct = () => {
    setReadProduct((prevstate) => !prevstate);
  };

  // .slice(0, show)

  const listOfProduct = listproduct.map((item) => {
    return (
      <Listproducts
        key={item.id}
        image={image2}
        name={item.name}
        handleProductClick={toggleReadproduct}
      />
    );
  });

  const showMore = () => {
    if (show <= scroll) {
      setShow((prevstate) => prevstate + 2);
      document.getElementById("container").scrollLeft += 200;
      setScroll([(prevstate) => prevstate + 3]);
    }
  };

  return <div className="rb__products">{listOfProduct}</div>;
};
