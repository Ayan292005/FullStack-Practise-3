import UserRoot from "../pages/UserRoot"
import Add from "../pages/addProduct"
import Home from "../pages/home"
import Products from "../pages/products"


const Routes = [
    {
        path: "/",
        element: <UserRoot/>,
        children: [
            {
                path: "/home",
                element: <Home/>,

            },
            {
                path: "/products",
                element: <Products/>,

            },
            {
                path: "/add",
                element: <Add />,
            }
        ]
    }
]
export default Routes