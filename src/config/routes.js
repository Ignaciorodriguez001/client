// Layout 
import LayoutAdmin from "../Layouts/LayoutAdmin"
import LayoutBasic from "../Layouts/LayoutBasic"
// Admin Pages
import AdminHome from "../pages/Admin"
import AdminSingIn from "../pages/Admin/SignIn"

// pages
import Home from "../pages/Home"
import Contact from "../pages/Contact"

const routes = [
    {
        path: "/admin",
        exact: false,
        component: LayoutAdmin,
        routes: [
            {
                path: "/admin",
                exac: true,
                component: AdminHome
                
            },
            {
                path: "/admin/login",
                exac: true,
                component: AdminSingIn
            }
        ]
    },
    {
        path: "/",
        exac: false,
        component: LayoutBasic,
        routes: [
            {
            path: "/",
            component: Home,
            exact: true
            },
            {
            path: "/contact",
            component: Contact,
            exact: true
            }
        ]
    }
]

export default routes