import { routes } from "./routes";

import { HomePage, DetailsPage, ThanksPage } from "../index";

export const RouteList: { path: string; element: any }[] = [
  {
    path: routes.home_page,
    element: HomePage,
  },
  {
    path: routes.details_page,
    element: DetailsPage,
  },
  {
    path: routes.thanks_page,
    element: ThanksPage,
  },
];
