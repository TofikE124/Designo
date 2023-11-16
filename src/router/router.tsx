import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import WebDesignPage from "./designs/WebDesignPage";
import AppDesignPage from "./designs/AppDesignPage";
import GraphicDesignPage from "./designs/GraphicDesignPage";
import AboutPage from "./AboutPage";
import LocationsPage from "./LocationsPage";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "design",
        children: [
          { path: "web", element: <WebDesignPage /> },
          { path: "app", element: <AppDesignPage /> },
          { path: "graphic", element: <GraphicDesignPage /> },
        ],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "locations",
        element: <LocationsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
