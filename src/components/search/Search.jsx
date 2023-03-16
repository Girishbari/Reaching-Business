import React, { useState } from "react";
import "./search.css";
import image from "../../assets/post3.png";
import image2 from "../../assets/post4.png";
import Navbar from "../navbar/Navbar";

const Search = () => {

    const [searchCollection, setSearchCollection] = useState("");
    const [searchText, setSearchText] = useState("")
    

    const search = async(e) =>{
      console.log(searchText)
    }

  return (
    <div className="rb__search">
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <input type="text" placeholder="Type to Search" onChange={(e) => setSearchText(e.target.value)} />
        <div class="dropdown">
          <button>Select What to Search</button>
          <div class="dropdown-content">
            <button onClick={() => setSearchCollection("users")}  >Users</button>
            <button onClick={() => setSearchCollection("product")}  >Product</button>
            <button onClick={() => setSearchCollection("post")}  >Post</button>
          </div>
        </div>
      </div>
      <div className="rb__search-list">
        <div className="rb_search-list_childs">
          <img src={image} />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            laborum optio debitis possimus. Iure error, excepturi similique iste
            vero nihil provident atque? Sit, sed nesciunt?
          </h2>
        </div>
        <div className="rb_search-list_childs">
          <img src={image2} />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            laborum optio debitis possimus. Iure error, excepturi similique iste
            vero nihil provident atque? Sit, sed nesciunt?
          </h2>
        </div>
        <div className="rb_search-list_childs">
          <img src={image} />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            laborum optio debitis possimus. Iure error, excepturi similique iste
            vero nihil provident atque? Sit, sed nesciunt?
          </h2>
        </div>
        <div className="rb_search-list_childs">
          <img src={image} />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            laborum optio debitis possimus. Iure error, excepturi similique iste
            vero nihil provident atque? Sit, sed nesciunt?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Search;
