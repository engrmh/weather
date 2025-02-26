import React, { ReactNode } from "react";
import HomePage from "./page/HomePage";
import CiteiesPage from "./page/CiteiesPage";
import MapPage from "./page/MapPage";

interface IRoute {
  path: string;
  element: ReactNode;
  children?: IRoute[];
}
export const routes: IRoute[] = [
  {
    path: "/",
    element: React.createElement(HomePage),
  },
  {
    path: "/cities",
    element: React.createElement(CiteiesPage),
  },
  {
    path: "/map",
    element: React.createElement(MapPage),
  },
];
