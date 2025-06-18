import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="font-family-kr w-full min-w-auto max-w-screen min-h-screen mx-auto px-5 md:px-8 lg:px-10 flex flex-col items-center relative bg-lightblue text-[#3c4856]">
      <Outlet />
    </main>
  );
};

export default Layout;
