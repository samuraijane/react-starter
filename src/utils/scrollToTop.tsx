import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop({ children }: {children?: JSX.Element}) { // [1]
  const { pathname } = useLocation();
  
  useEffect(() => {
    const canControlScrollRestoration = 'scrollRestoration' in window.history
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return children;
}

/*
NOTES
  [1] https://stackoverflow.com/questions/71717114/scroll-to-top-on-
      every-transition-react-router-dom-v6 (alextrastero)
*/
