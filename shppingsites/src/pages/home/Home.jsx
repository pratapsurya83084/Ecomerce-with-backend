import React from "react";
import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/hero/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from '../../components/track/Track'
import Testimonial from "../../components/testimonials/Testimonials";
import {useDispatch,useSelector} from 'react-redux'
import { addToCart, deleteFromCart } from "../../redux/CartSlice";
const Home = () => {
  const dispatch=useDispatch();//it return a refrence  from the redux store
  const cartItem=useSelector((state)=>state.cart) //use from store        any deleted or added cart show in home page using cartItem
console.log(cartItem);

  const addCart=()=>{
  dispatch(addToCart("shirt"))
}

const deleteFromcart=()=>{
  dispatch(deleteFromCart("shirt"))
}
  return (
    <Layout>
      <div className="flex gap-5 p-5">
        <button className="bg-gray-300" onClick={()=>addCart()}>add</button>
        <button className="bg-gray-300" onClick={()=>deleteFromcart()}>delete</button>
      </div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track/>
      <Testimonial/>
    </Layout>
  );
};

export default Home;
