import "./footer.scss";

export const Footer = (): JSX.Element => (
  <footer>
    <div className="y-wrap footer">
      <span className="footer__copyright">&#169; {new Date().getFullYear()} ACME, Corp.</span>
    </div>
  </footer>
);
