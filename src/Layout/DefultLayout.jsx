import React from 'react'
import Navbar from '../components/Navigation'
function DefultLayout({children}) {
  console.log(children)
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default DefultLayout