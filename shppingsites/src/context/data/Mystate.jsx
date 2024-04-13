import React from "react";
import { useState } from "react";
import Mycontext from "./Mycontext";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";
import {
  orderBy,
  query,
  collection,
  onSnapshot,
  Timestamp,
  addDoc,
  getDoc,
  QuerySnapshot,setDoc,
  deleteDoc,doc
} from "firebase/firestore";
import { useEffect } from "react";
const Mystate = (props) => {
  //all data and state made in mystate component

  //darkmode set
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode == "light") {
      //bg light==light then after click setmode black
      setmode("dark"); //bg is black
      document.body.style.backgroundColor = "rgb(17,24,39)"; //black
    } else {
      setmode("light"); //bg is already white then after click the bg is
      document.body.style.backgroundColor = "white";
    }
  };
  const [Loading, setLoading] = useState(false); //send to Loading.jsx component

  const [products, setproducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  //function for addProducts and store data into fireDB database
  const addProduct = async () => {
    // if all filed is not filled then show error
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("all filds are required");
    }
    setLoading(true);
    try {
      const productRef = collection(fireDB, "products"); //collection name is products

      await addDoc(productRef, products); //store products into products collection
      toast.success("your product added successfully");
      //redirect after 800 ms in dashboard admin page
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);

      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //get data and show
  const [product, setproduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];

        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id }); //spread
        });
         setproduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);


//edithandel 
const edithandel=(item)=>{
  setproducts(item);
}
  //Update Product function
  const UpdateProduct=async ()=>{
    setLoading(true);
    try {
      await setDoc(doc(fireDB,'products',products.id),products)
      toast.success("product Updated successfully");
      setTimeout(() => {
    window.location.href="/dashboard"
  }, 800);
   
      getProductData();
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  //delete products  function
  const deleteProduct=async(item)=>{
    setLoading(true)
    try {
      
      await deleteDoc(doc(fireDB,'products',item.id))
      toast.success("Product deleted successfull");
      getProductData()
    setLoading(false)

    } catch (error) {

      console.log(error);

    }
  }

  return (
    //import and rape the mycontext
    // multiple state passed into mycontext by use any component
    <Mycontext.Provider
      value={{
        mode,
        toggleMode,
        Loading,
        setLoading,
        products,
        setproducts,
        addProduct,
        product,edithandel,UpdateProduct,deleteProduct

       
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
};

export default Mystate;
