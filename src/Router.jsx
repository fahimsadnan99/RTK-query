import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import AddStudent from "./pages/AddStudent.jsx"
import EditStudent from "./pages/EditStudent"
import SingleStudent from "./pages/SingleStudent"
import UpdateStudent from "./pages/UpdateData"


const Router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
       children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/add",
                element : <AddStudent></AddStudent>
            },
            {
                path : "/:id",
                element : <SingleStudent></SingleStudent>
            },
            {
                path : "/edit",
                element : <EditStudent></EditStudent>
            },
            {
                path : "/update/:id",
                element : <UpdateStudent></UpdateStudent>
            },
        ]
    }
])


export default Router