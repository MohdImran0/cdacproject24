import ReactDOM from "react-dom";
import App from "./App";

// React Routing Start
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsHomePage from "./Components/Home/EventsHomePage";
import Services from "../src/Components/Functions/Services";
import Events from "../src/Components/Functions/Events";
import Tournament from "./Components/Tournaments/Tournament";
import Gallery from "./Components/Gallery/Gallery";
import Register from "./Components/Login/Register";
import Login from "./Components/Login/Login";
import ContactForm from "./Components/Contact/ContactForm";
import FAQs from "./Components/FAQs/FAQs";
import AboutUs from "./Components/About/AboutUs";
import Award from "./Components/Award/Award";
import Meeting from "./Components/Meeting/Meeting";


var projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <EventsHomePage></EventsHomePage>,
      },
      {
        path: "Tournament",
        element: <Tournament />,
      },
      {
        path: "Gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
      {
        path: "Register",
        element: <Register></Register>,
      },
      {
        path: "events",
        element: <Events></Events>,
      },
      {
        path:"ContactForm",
        element:<ContactForm></ContactForm>
      },
      {
        path:"FAQs",
        element:<FAQs></FAQs>
      },
      {
        path:"About",
        element: <AboutUs></AboutUs>
      },
      {
        path:"Award",
        element:<Award></Award>
      },
      {
        path:"meeting",
        element:<Meeting></Meeting>
      },
      
    ],
  },
]);
var ans = ReactDOM.createRoot(document.getElementById("root"));

ans.render(<RouterProvider router={projectroute}></RouterProvider>);
