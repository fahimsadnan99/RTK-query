import React from 'react'
import EditAndUpdate from "./EandUsection"

const EditStudent = () => {
  let edit = true

  return (
    <div>
<p className='text-center text-6xl font-mono font-semibold text-black border-b-2 w-56 mx-auto mt-5'>{edit ? "Edit" : "Update"}</p>
  <EditAndUpdate edit={edit} ></EditAndUpdate>
    </div>
  )
}

export default EditStudent