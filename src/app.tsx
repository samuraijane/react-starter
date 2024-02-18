import { useDispatch } from "react-redux";
import { useViewport } from "./hooks/useViewport";
import { setScreenSize } from "./features/screenSizeSlice";
import { ScreenSizesPx } from "./global-types/enums/screen-sizes";
import { Footer, Header, Main } from "./sectioning";

 export const App = (): JSX.Element => {
  const { height, name, width } = useViewport();
  const dispatch = useDispatch();

  const screenSize = {
    height,
    isMobile: width && width < ScreenSizesPx.LARGE,
    name,
    width
  };

  dispatch(setScreenSize(screenSize));

  return (
    <div className="y-sticky">
      <Header />
      <Main />
      <Footer />
    </div>
  );
 };
