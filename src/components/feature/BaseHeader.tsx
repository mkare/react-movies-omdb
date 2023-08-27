import { Title, Logo } from "@components/base";
import { Nav } from "@components/block";
import classNames from "classnames";

const links = [
  { href: "/", text: "Search Page" },
  { href: "/watchlist", text: "Watchlist" },
  { href: "/login", text: "Login" },
];

const BaseHeader: React.FC = () => {
  const titleClass = classNames(
    "-mt-8 px-2 font-mono tracking-tight z-10 border-2 relative transition cursor-none",
    "bg-slate-500/75 border-slate-600 -rotate-12",
    "hover:bg-slate-800/70 hover:border-slate-600 hover:rotate-0"
  );

  function handleClick() {
    console.log("click");
  }

  return (
    <header className="flex flex-col items-center my-3">
      <Logo />
      <div onClick={() => handleClick()}>
        <Title className={titleClass} level={4} variant="tertiary">
          MovieDB
        </Title>
      </div>
      <Nav links={links}></Nav>
    </header>
  );
};

export default BaseHeader;
