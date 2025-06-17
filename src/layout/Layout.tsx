import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="w-full min-w-96 max-w-screen min-h-screen mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center relative">
      <Outlet />
    </main>
  );
};

export default Layout;
