import { Outlet, Link } from "react-router-dom";
import { Logo, Title } from "@components/base";

const AuthLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      {children && children}
      <main>
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-secondary-900 to-secondary-800">
          <Link to="/" className="flex flex-col items-center p-6">
            <Logo />
            <Title className="mt-1 font-mono tracking-tight" level={4} variant="tertiary">
              MovieDB
            </Title>
          </Link>
          <div className="w-full max-w-md">{<Outlet />}</div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
