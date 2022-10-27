import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CardCourse from "../../Pages/Courses/CardCourse/CardCourse";

import Courses from "../../Pages/Courses/Courses/Courses";
import AllDetails from "../../Pages/Courses/RightSide/AllDetails";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Error from "../../Pages/Others/Error/Error";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,

            },
            {
                path: '/courses/:id',
                element: <CardCourse></CardCourse>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/allCourses/:id',
                element: <PrivateRoute> <AllDetails></AllDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allcourses/${params.id}`)
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    }
])