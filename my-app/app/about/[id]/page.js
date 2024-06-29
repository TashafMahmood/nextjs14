import { redirect } from 'next/navigation'
import React from 'react'

const ID = ({params}) => {
    if(params.id == 7){
        redirect("/login")
    }
  return (
    <div>
      {params.id}
    </div>
  )
}

export default ID
