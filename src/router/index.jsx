import Login from "../pages/login" 
import Logout from "../pages/logout"
import Home from "../pages/home"
import NotFound from "../pages/NotFound" // 引入
const routes = [ 
  {
    path: "/",
    element: <Home />,
    children: [ 
      {
        path: "/login/",
        element: <Login />
      },
      {
        path: "/logout/",
        element: <Logout />
      }
    ]
  },
  {
    // 路径设置 *
    path: "*",
    element: <NotFound />,
  }
]
export default routes