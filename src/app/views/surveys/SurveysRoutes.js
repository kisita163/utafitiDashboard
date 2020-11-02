import React from "react";

const surveysRoutes = [
 /* {
    path: "/surveys/basic",
    component: React.lazy(() => import("./BasicForm"))
  },*/
  {
    path: "/surveys/survey",
    component: React.lazy(() => import("./Survey"))
  }
];

export default surveysRoutes;
