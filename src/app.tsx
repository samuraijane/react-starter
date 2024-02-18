import { useViewport } from "./hooks/useViewport";
import { Footer, Header, Main } from "./sectioning";

 export const App = (): JSX.Element => {
  const { height, name, width } = useViewport();
  console.log(`${name}: ${width}px by ${height}px`);

  return (
    <div className="y-sticky">
      <Header />
      <Main />
      <Footer />
    </div>
  );
 };
