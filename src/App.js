import NavBar  from "./components/NavBar";
import MyBody from "./components/MyBody";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet/>
    </div>
  );
}
const AppRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement : <Error />,
    children : [
      {
        path : "/about",
        element : <AboutUs />
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "*",
        element : <MyBody/>
      },
    ]
  },
])



export default AppRouter;
