import DashBoardPage from "./pages/dashboard/DashBoardPage"
import Auth from "./pages/auth/Auth"
const routes = [
    {path: "/auth", element: <Auth/>},
    {path: "/*", element: <DashBoardPage/>}
]

export default routes