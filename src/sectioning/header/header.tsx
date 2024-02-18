import { MouseEventHandler, useState } from "react";
import { FlyoutBtn } from "./_flyout/flyout";
import { Mobile } from "./_mobile/mobile";
import "./header.scss";
import navs from "./navs.json";

export const Header = ({ isMobile }: {isMobile: boolean}): JSX.Element => {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);

  const _navs = navs.map((nav) => <a href="#" key={nav.id}>{nav.text}</a>);

  const handleMobileNav: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (): void => {
    setIsShowMobileNav(!isShowMobileNav);
  };

  return (
    <header>
      <nav className={`navs navs--${isMobile ? "mobile": "desktop"} y-wrap`}>
        <a href="#">ACME, Corp.</a>
        <>
          {isMobile && isShowMobileNav && (
            <Mobile navs={_navs} />
          )}
          {isMobile && (
            <FlyoutBtn action={handleMobileNav} isShowMobileNav={isShowMobileNav} />
          )}
          {!isMobile && _navs}
        </>
      </nav>
    </header>
  );
};
