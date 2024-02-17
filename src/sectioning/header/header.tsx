import "./header.scss";
import navs from "./navs.json";

export const Header = (): JSX.Element => {
  const _navs = navs.map((nav) => <a href="#" key={nav.id}>{nav.text}</a>);

  return (
    <header className="header">
      <nav className="header__navs y-wrap">{_navs}</nav>
    </header>
  );
};
