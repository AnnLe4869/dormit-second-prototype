import React from 'react'
import { useInitializeProduct } from '../../context/product-context'

export default function Home() {
  useInitializeProduct()
  return (
    <h1>Home</h1>
  )
}
