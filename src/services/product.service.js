import { db } from "../firebaseConfig";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  setDoc
} from "firebase/firestore";

const userCollectionRef = collection(db, "product")


class ProductService {



  addProduct = (Id,newProduct) => {
    return setDoc(doc(userCollectionRef, Id), newProduct);
  }

//   updateUser = (id, updatedBook) => {
//     const bookDoc = doc(db, "users", id);
//     console.log(updatedBook)
//     return setDoc(bookDoc, updatedBook);
//   };

//   getAllUsers = () => {
//     return getDocs(userCollectionRef);
//   };

//   getUserDetails = (id) => {
//     const bookDoc = doc(userCollectionRef, id);
//     return getDoc(bookDoc);
//   };

}

export default new ProductService();