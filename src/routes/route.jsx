import Layout from "../pages/Layout";
import Landing from "../pages/Landing" 
import City from "../pages/City";
import Treatment from "../pages/Treatment";

const routes = [
    {
        path: "/",
        element: <Layout />,
        // children: [
        //     {index: true, element: <Landing />},
        //     {path: "/city", element: <City />},
        //     {path: "/treatment", element: <Treatment />},
        // ]
    }
];

export default routes;