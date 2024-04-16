import Layout from "../components/layout/Layout"
import About from "../components/views/About"
import Contact from "../components/views/Contact"

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
      ],
    },
  ]

export default routes