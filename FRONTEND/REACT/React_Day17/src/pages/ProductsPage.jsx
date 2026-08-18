import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../components/ProductsCard'
import { axiosInstance } from '../config/axiosinstance'

const ProductsPage = () => {

    const [productsData, setProductsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let getProductsData = async ()=>{
        try {
            let res = await axiosInstance.get('/products')
            setProductsData(res.data)
            console.log(res)
            setIsLoading(false)
        } catch (error) {
            console.log('error is Products API', error)
            
        }
    }

    useEffect(()=>{
        getProductsData()
    },[])

    if(isLoading) return <h1 className='text-4xl font-semibold'>Products Data is Loading</h1>

  return (
    <div className='grid grid-cols-4 gap-5'>
      {productsData.map((val)=> <ProductCard key = {val.id} product = {val}/>)}
    </div>
  )
}

export default ProductsPage
