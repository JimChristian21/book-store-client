import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Shop from '../pages/shop/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import SingleBook from '../pages/shop/SingleBook';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import UploadBook from '../pages/dashboard/UploadBook';
import ManageBooks from '../pages/dashboard/ManageBooks';
import EditBooks from '../pages/dashboard/EditBooks';
import Signup from '../components/Signup';
import Login from '../components/Login';
import PrivateRoute from '../private_route/PrivateRoute';
import Logout from '../components/Logout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>
            }, {
                path: '/shop',
                element: <Shop />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: '/books/:id',
                element: <SingleBook />,
                loader: ({params}) => fetch(`https://book-store-server-rspc.onrender.com/books/${params.id}`)
            }
        ]
    },
    {
        path:"/admin/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
            {
                path: '/admin/dashboard/upload',
                element: <UploadBook />
            },
            {
                path: '/admin/dashboard/manage',
                element: <ManageBooks />
            },
            {
                path: '/admin/dashboard/edit-books/:id',
                element: <EditBooks />,
                loader: ({params}) => fetch(`https://book-store-server-rspc.onrender.com/books/${params.id}`)
            },
        ]
    },
    {
        path: "sign-up",
        element: <Signup />
    }, 
    {
        path: "login",
        element: <Login/>
    }, 
    {
        path: "logout",
        element: <Logout />
    }
]);

export default router;