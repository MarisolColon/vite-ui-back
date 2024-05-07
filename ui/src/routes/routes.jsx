import Layout from "../components/layout/Layout"
import About from "../components/views/About"
import Contact from "../components/views/Contact"
import Login from "../components/views/Login"

const routes = 
[
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        }
      ],
    }
  ]

export default routes