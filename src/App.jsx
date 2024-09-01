import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes/route"

const App = () => {
  const routings = createBrowserRouter(routes)

  return (
    <div>
      <RouterProvider router={routings} />
    </div>
  )
}

export default App
