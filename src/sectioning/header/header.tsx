import { MouseEventHandler, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { FlyoutBtn } from "./_flyout/flyout";
import "./header.scss";
import navs from "./navs.json";

export const Header = ({ isMobile }: {isMobile: boolean}): JSX.Element => {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);

  useDisableBodyScroll(isShowMobileNav);

  const _navs = navs.map((nav) => (
    <NavLink
      key={nav.id}
      onClick={() => setIsShowMobileNav(false)}
      to={nav.href}
    >
      {nav.text}
    </NavLink>
  ));

  const handleMobileNav: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (): void => {
    setIsShowMobileNav(!isShowMobileNav);
  };

  return (
    <header>
      <nav className={`navs navs--${isMobile ? "mobile": "desktop"} y-wrap`}>
        <div className="logo-container">
          <NavLink to="/">ACME, Corp.</NavLink>
        </div>
        <>
          {isMobile && isShowMobileNav && (
            <div className="navs--mobile__navs-container">{_navs}</div>
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
