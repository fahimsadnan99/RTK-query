import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const StudentsApi = createApi({
    reducerPath : "Students",
    baseQuery : fetchBaseQuery({baseUrl : "http://localhost:3001/"}),
    tagTypes : ["student"],
    endpoints : (base)=>({
        getAllStudentsApi : base.query({
            query : ()=> "students",
            transformResponse : (res) =>  res.reverse(),
            providesTags : ["student"]
        }),

        //Noobda Coding
        // getSingleStudent : base.query({
        //     query : (id) => `/students/${id}`
        // })

        addStudent : base.mutation({
            query : (student)=> ({
                url : "/students",
                method : "POST",
                body : student,
            }),
            invalidatesTags : ["student"]
            
        }),
        updateStudent : base.mutation({
            query : ({id, ...student})=> ({
                url : `/students/${id}`,
                method : "PUT",
                body : student
            }),
            invalidatesTags : ["student"]
            
        }),

        deleteStudent : base.mutation({
            query : (id)=>({
                url : `/students/${id}`,
                method : "DELETE"
            }),
            invalidatesTags  : ["student"]
        })
    })
})


export const {useGetAllStudentsApiQuery,useAddStudentMutation,useUpdateStudentMutation,useDeleteStudentMutation} = StudentsApi