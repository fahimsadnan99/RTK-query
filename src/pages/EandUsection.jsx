import React, { useEffect, useState } from "react";
import { useAddStudentMutation,useUpdateStudentMutation,useGetAllStudentsApiQuery } from "../Redux/RtkQuery/AllStudents";
import {useNavigate} from "react-router-dom"
import { useParams } from 'react-router-dom'

const EandUsection = ({ edit }) => {
    const navigate = useNavigate()
    const {id} = useParams()
  const [addStudent, { isLoading ,isSuccess}] = useAddStudentMutation();
  const {data} = useGetAllStudentsApiQuery(undefined, {
    selectFromResult : ({data})=>({
        data : data?.find(item => item.id == id )
    })
  })
  const [updateStudent, {isLoading : updateLoading,isSuccess : updateSucess}] = useUpdateStudentMutation()
  let [studentsData, setStudentsData] = useState({
    name:  "",
    email:  "",
    phone:  "",
  });

  const handleChange = (e) => {
    setStudentsData({
      ...studentsData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    if(edit) {
      await addStudent(studentsData);
    }else {
      await updateStudent({id : data.id,...studentsData});
      navigate("/")
    }

   
  };

  if(isSuccess){
    navigate("/")
}

useEffect(()=>{
  if(data){
    setStudentsData(data)
  }
},[data])
  return (
    <>
      {isLoading ? (
        <div className="bg-slate-900 h-screen flex justify-center items-center text-center">
          <p className="text-6xl text-white font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="w-[450px] mx-auto my-5">
          <input
            type="text"
            name="name"
            value={studentsData.name}
            onChange={handleChange}
            className="border-none bg-black text-white p-2 m-3"
          />
          <br></br>
          <input
            type="email"
            name="email"
            value={studentsData.email}
            onChange={handleChange}
            className="border-none bg-black text-white p-2 m-3"
          />
          <br></br>
          <input
            type="number"
            name="phone"
            value={studentsData.phone}
            onChange={handleChange}
            className="border-none bg-black text-white p-2 m-3"
          />
          <br></br>
          <button className="mx-auto my-4 bg-purple-600 text-white p-2" onClick={handleSubmit}>
            {edit ? "Submit" : "Update"}
          </button>
        </div>
      )}
    </>
  );
};

export default EandUsection;
