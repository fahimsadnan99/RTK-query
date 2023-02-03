import React from 'react'
import { useParams } from 'react-router-dom'
import {  useGetAllStudentsApiQuery } from '../Redux/RtkQuery/AllStudents'

const SingleStudent = () => {
  const {id} = useParams()
 

  const {data} = useGetAllStudentsApiQuery(undefined,{
    selectFromResult : ({data}) =>({
      data : data?.find(item => item.id == id)
    })
  })
 
  return (
    <>
   
        <div className='max-w-[450px] p-5 mx-auto my-5 bg-black shadow-2xl rounded-lg space-y-4 font-mono'>
        <p className='text-2xl font-semibold text-white p-2'>{data?.name}</p>
        <p className='text-2xl font-semibold text-white p-2'>{data?.email}</p>
        <p className='text-2xl font-semibold text-white p-2'>{data?.phone}</p>
      </div>
       
   </>
  )
}

export default SingleStudent