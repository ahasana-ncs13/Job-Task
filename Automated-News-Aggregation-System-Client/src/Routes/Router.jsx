import { createBrowserRouter } from "react-router";
import AllNews from "../Pages/AllNews";
import NewsDetails from "../Pages/NewsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:AllNews
  },
  {
    path: "/newsdetails/:id",
    Component:NewsDetails,
  }

]);