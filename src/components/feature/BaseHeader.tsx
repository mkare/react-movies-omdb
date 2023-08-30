import { useState } from "react";
import { Title, Logo } from "@components/base";
import { Nav } from "@components/block";
import classNames from "classnames";

const links = [
  { href: "/", text: "Search Page" },
  { href: "/watchlist", text: "Watchlist" },
  { href: "/login", text: "Login" },
];

const BaseHeader: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const titleClass = classNames(
    "-mt-8 px-2 font-mono tracking-tight z-10 border-2 relative transition",
    "bg-slate-500/75 border-slate-600",
    isClicked ? "bg-slate-800/90 border-slate-600" : "",
    // tailwind shake animation if isClicked is true
    isClicked
      ? "animate-jump-in animate-delay-300 animate-reverse animate-once"
      : "animate-fade-up"
  );

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <header className="flex flex-col items-center my-3">
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => handleClick()}
      >
        <Logo
          animated={isClicked}
          className={
            isClicked ? "animate-wiggle-more animate-infinite animate-duration-700" : ""
          }
        />
        <Title className={titleClass} level={4} variant="tertiary">
          MovieDB
        </Title>
      </div>
      <Nav links={links}></Nav>
    </header>
  );
};

export default BaseHeader;
