import React from 'react'
import {Routes,Route} from react-router-dom

export default function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Home/>} />
      </Routes>
    </div>
  )
}
