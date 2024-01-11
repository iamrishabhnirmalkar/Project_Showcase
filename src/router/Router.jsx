import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../components/About_me/about";
import AboutProject from "../components/Project/Project";
import SocailLinks from "../components/social/social";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/AboutProject" element={<AboutProject />} />
        <Route path="/socailLink" element={<SocailLinks />} />
      </Routes>
    </>
  );
}

export default Router;
