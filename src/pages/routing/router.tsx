import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouteList } from "./routeList";
import { useEffect, useState } from "react";
import { PageTransition } from "../../components/PageTransition";

export default function PageRoutes() {
  return (
    <Router>
      <Routes>
        {RouteList.map((props, key) => {
          return (
            <Route
              key={`p-${key}`}
              element={
                <NavTransition>
                  <props.element />
                </NavTransition>
              }
              path={props.path}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

function NavTransition({ children }: { children: React.ReactNode }) {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowPage(true);
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!showPage && <PageTransition />}
      <div className={showPage ? "block" : "none"}>{children}</div>
    </>
  );
}
