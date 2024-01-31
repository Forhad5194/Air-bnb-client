import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import RoomDetails from "../Layout/Pages/RoomDetails/RoomDetails";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/room/:_id ',
                element: <RoomDetails/>,
            }

        ]
    }

    
])


export default Router;