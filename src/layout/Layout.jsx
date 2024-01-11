import DisplayPicture from "../components/display_Picture/image";
import SocailMedia from "../components/social_Media/Sm";
import Button from "../components/Button/Button";
import Router from "../Router/Router";

function Layout() {
  return (
    <>
      <div className="flex flex-col  overflow-hidden">
        <DisplayPicture />
        <SocailMedia />
        <Button />
      </div>
      <main className="flex-1 overflow-y-auto">
        <Router />
      </main>
    </>
  );
}

export default Layout;
