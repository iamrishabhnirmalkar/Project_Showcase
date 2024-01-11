import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../components/about_Me/Aboutme";
import AboutProject from "../components/projects/Projects";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/AboutProject" element={<AboutProject />} />
      </Routes>
    </>
  );
}

export default Router;
