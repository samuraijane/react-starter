import { Footer, Header, Main } from "./sectioning";

 export const App = (): JSX.Element => (
  <div className="y-sticky">
    <Header />
    <Main />
    <Footer />
  </div>
);
