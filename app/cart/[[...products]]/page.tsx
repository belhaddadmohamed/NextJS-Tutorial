import React from 'react'

interface ProductPageProps {
  params?: {products: string[]}
}

const ProductPage = async ({params}: ProductPageProps) => {
  const params_list = await params

  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {params_list?.products?.map(
          route => <li key={route}>{route}</li>
        )}
      </ul>
    </>
  )
}

export default ProductPage