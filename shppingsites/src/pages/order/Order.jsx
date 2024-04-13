import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import Mycontext from '../../context/data/Mycontext'

const Order = () => {
  const context=useContext(Mycontext);
  const {name,rollno}=context  //destructure
  return (
    <Layout>
      <h1>name:{name}</h1>
      <h1>Rollno:{rollno}</h1>
    </Layout>
  )
}

export default Order
