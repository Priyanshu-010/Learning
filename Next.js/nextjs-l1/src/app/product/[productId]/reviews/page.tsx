import Link from 'next/link';
import React from 'react'

const page = async ({params}: {params: Promise<{productId: string}>}) => {
  const {productId} = await params;
  return (
    <div>
      <h1>Product Review Page</h1>
      <p>Product: {productId}, 
        <Link href={`/product/${productId}/reviews/${productId}`}>review</Link></p>
    </div>
  )
}

export default page