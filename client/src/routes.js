import Auth from "./pages/Auth"
import Home from "./pages/Home"
import ItemPage from "./pages/ItemPage"
import Kitchens from "./pages/Kitchens"
import Salon from "./pages/Salon"
import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import Wardrobes from "./pages/Wardrobes"
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, ITEM_ROUTE, KITCHEN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SALON_ROUTE, WARDROBE_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: KITCHEN_ROUTE,
        element: <Kitchens/>
    },
    {
        path: WARDROBE_ROUTE,
        element: <Wardrobes/>
    },
    {
        path: SALON_ROUTE,
        element: <Salon/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: ITEM_ROUTE + '/:id',
        element: <ItemPage/>
    },
]