import React from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom';

function Add() {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      image:'',
      name: '',
      price:'',
      discount:''

    },
    onSubmit: values => {
     axios.post("http://localhost:4040/products",values)
    },
  })


  return (
    <>
      <form onSubmit={formik.handleSubmit} className='container flex flex-col items-start'>
      <div className='flex gap-3'>
        <label htmlFor="image">Image</label>
        <input className='border'
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        </div>

        <div className='flex gap-3' >
        <label htmlFor="name">Name</label>
        <input className='border'
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        </div>

        <div className='flex gap-3'>
        <label htmlFor="price">Price</label>
        <input className='border'
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        </div>
        <div className='flex gap-3'>
        <label htmlFor="discount">Discount</label>
        <input className='border'
          id="discount"
          name="discount"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.discount}
        />
        </div>

        <button type="submit" onClick={() => navigate("/products")} className='sbmt-btn'>Submit</button>
      </form>
    </>
  )
}

export default Add