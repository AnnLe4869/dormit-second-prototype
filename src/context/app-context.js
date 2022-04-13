import React from 'react'

import UserProvider from './user-context'
import ProductProvider from './product-context'

export default function AppContext({children}) {
  return (
    <ProductProvider>
        <UserProvider>
            {children}
        </UserProvider>
    </ProductProvider>
  )
}
