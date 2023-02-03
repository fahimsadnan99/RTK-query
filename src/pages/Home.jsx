import React from 'react'
import {useGetAllStudentsApiQuery,useDeleteStudentMutation} from "../Redux/RtkQuery/AllStudents"
import {useNavigate} from "react-router-dom"

const Home = () => {
  const {data,isLoading} = useGetAllStudentsApiQuery()
  const [deleteStudent,{isSuccess}] = useDeleteStudentMutation()
  const navigation = useNavigate()
  return (
    <div>
      {
        isLoading ? (
          <div className='bg-slate-900 h-screen flex justify-center items-center text-center'>
          <p className='text-6xl text-white font-semibold'>Loading...</p>
           </div> 
  
        ) : (
<div className='h-screen'>
<button onClick={()=> navigation(`/edit`)} className='bg-green-800 text-white font-semibold text-2xl p-3'>Add Students</button>
<table className='border-1 space-x-5 mx-auto'>

  <thead>
    <tr className='space-x-10'>
      <th className='px-10 py-2'>Name</th>
      <th className='px-10 py-2'>Email</th>
      <th className='px-10 py-2'>Phone</th>
      <th className='px-10 py-2'>View</th>
      <th className='px-10 py-2'>Edit</th>
      <th className='px-10 py-2'>Delete</th>
    </tr>
  </thead>
  <tbody >

  {
    data?.map(({name,email,phone,id}) =>{
 return (

  <tr key={id}>
  <td className='text- 2xl px-10 py-2'>{name}</td>
  <td className='text- 2xl px-10 py-2'>{email}</td>
  <td className='text- 2xl px-10 py-2'>{phone}</td>
  <td className='text- 2xl px-10 py-2'><button className='py-1 px-4 text-white text-center rounded-lg border-purple-700 bg-amber-700 font-semibold'
  onClick={()=> navigation(`/${id}`)}
  >view</button></td>

<td className='px-10 py-2'>
<button className='py-1 px-4 text-white text-center rounded-lg border-purple-700 bg-purple-900 font-semibold'  onClick={()=> navigation(`/update/${id}`)} >Update</button>
</td>
<td className='px-10 py-2'>
<button className='py-1 px-4 text-white text-center rounded-lg border-purple-700 bg-red-700 font-semibold'  onClick={async ()=> await deleteStudent(id)} >Delete</button>
</td>
</tr>

)
    })
  }
   
  </tbody>
</table>
 
    </div>
      ) 
     
      }
       

     
    </div>
  )
}

export default Home