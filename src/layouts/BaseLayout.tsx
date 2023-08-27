import { Outlet } from "react-router-dom";
import { BaseHeader } from "@components/feature";

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      {children && children}
      <BaseHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
