import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <p> Header, footer, navbar</p>
      <Outlet />
    </>
  );
};
