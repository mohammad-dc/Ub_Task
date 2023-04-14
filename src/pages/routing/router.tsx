import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouteList } from "./routeList";
import { HomePage } from "../Home";

export default function PageRoutes() {
  return (
    <Router>
      <Routes>
        {RouteList.map((props, key) => {
          return (
            <Route
              key={`p-${key}`}
              element={<props.element />}
              path={props.path}
            />
          );
        })}
      </Routes>
    </Router>
  );
}
