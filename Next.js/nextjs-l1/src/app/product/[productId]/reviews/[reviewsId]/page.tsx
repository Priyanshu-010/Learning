import React from 'react'

const page = async({params}: {params: Promise<{reviewsId: string, productId: string}>}) => {
  const {reviewsId, productId} = await params;
  return (
    <div>Product : {productId} Review : {reviewsId}</div>
  )
}

export default page