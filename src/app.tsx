import { KeyboardEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useViewport } from "./hooks/useViewport";
import { setScreenSize } from "./features/screenSizeSlice";
import { setEnvironment } from "./features/environmentSlice";
import { ScreenSizesPx } from "./global-types/enums/screen-sizes";
import { Footer, Header, Main } from "./sectioning";
import { Responsive } from "./components/dev/responsive/responsive";

export const App = (): JSX.Element => {
  const { height, name, width } = useViewport();
  const dispatch = useDispatch();
  const [isShowResponsive, setIsShowResponsive] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleResponsiveToggle);
    return () => document.removeEventListener("keydown", handleResponsiveToggle);
  }, [isShowResponsive]);

  /**
   * Toggles whether to show screen dimensions when the key combination
   *   CTRL + OPTION + COMMAND + r is detected. This is intended to be
   *   used during development only and has not been tested on a windows
   *   machine.
   * @todo We are not 100% sure that typecasting `_e` is the best way to
   *   remove the TS linting error in this case but we are leaving as
   *   is for now.
   * @param e 
   */
  function handleResponsiveToggle (e: Event) {
    const _e = e as unknown as KeyboardEvent;
    if (_e.ctrlKey && _e.altKey && _e.metaKey && _e.code == "KeyR" ) {
      setIsShowResponsive(!isShowResponsive);
    }
  };

  const isMobile = width && width < ScreenSizesPx.LARGE;

  const screenSize = {
    height,
    isMobile,
    name,
    width
  };
  dispatch(setScreenSize(screenSize));

  const { hostname, origin, port } = window.location;
  dispatch(setEnvironment({ hostname, origin, port}));

  return (
    <div className="y-sticky">
      <Header isMobile={isMobile} />
      <Main />
      <Footer />
      {isShowResponsive && (
        <Responsive height={height} isMobile={isMobile} screenName={name} width={width} />
      )}
    </div>
  );
 };
