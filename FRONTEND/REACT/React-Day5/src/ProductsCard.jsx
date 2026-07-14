import React from 'react'

const ProductsCard = ({ product, del }) => {
  return (
    <div className='flex flex-col gap-5 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>

      <div className='w-full h-56 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden'>
        <img
          src={product.image}
          alt=""
          className='h-44 object-contain transition-transform duration-300 hover:scale-105'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='font-semibold text-gray-900 text-lg leading-6 line-clamp-2'>
          {product.title}
        </h2>

        <p className='text-xs text-gray-500 uppercase tracking-wide bg-gray-100 w-fit px-3 py-1 rounded-full'>
          {product.category}
        </p>

        <p className='text-2xl font-bold text-gray-900'>
          ${product.price}
        </p>
      </div>

      <button
        onClick={() => del(product.id)}
        className='mt-auto py-3 rounded-xl border border-red-500 text-red-500 font-medium transition-all duration-300 hover:bg-red-500 hover:text-white active:scale-95 cursor-pointer'
      >
        Delete Product
      </button>

    </div>
  )
}

export default ProductsCard