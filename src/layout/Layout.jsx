import React from "react";
import Router from "../router/Router";
import Footernavbar from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footernavbar />
    </>
  );
}

export default Layout;
