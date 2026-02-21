import { createBrowserRouter } from "react-router";
import AllNews from "../Component/AllNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:AllNews
  },
]);