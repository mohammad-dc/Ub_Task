import React, { useEffect } from "react";
import "../static/style.css";
export const PageTransition = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return <div className={"page-transition--wrapper"}></div>;
};
