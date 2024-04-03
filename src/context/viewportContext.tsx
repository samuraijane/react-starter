import { createContext, useEffect, useState } from 'react';
import { debounce } from '../utils/utils';
import { ViewportNames } from '../types/enum';

interface ViewContextProps {
  children: JSX.Element | JSX.Element[];
}

export const ViewportContext = createContext<any>({});

const getName = (width: number): ViewportNames => {
  if (width >= 320 && width < 360) return ViewportNames.XX_SMALL;
  if (width >= 360 && width < 500) return ViewportNames.X_SMALL;
  if (width >= 500 && width < 576) return ViewportNames.SMALL;
  if (width >= 576 && width < 768) return ViewportNames.INTERMEDIATE;
  if (width >= 768 && width < 992) return ViewportNames.LARGE;
  if (width >= 992 && width < 1200) return ViewportNames.X_LARGE;
  if (width >= 1200) return ViewportNames.XX_LARGE;
  return ViewportNames.ERROR;
};

export const ViewportProvider = ({ children }: ViewContextProps) => {
  const [height, setHeight] = useState(window.innerHeight);
  const [name, setName] = useState(getName(window.innerWidth));
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setHeight(window.innerHeight);
    setName(getName(window.innerWidth))
    setWidth(window.innerWidth);
  };

  /**
   * @todo Confirm that we're removing the event listener correctly.
   */
  useEffect(() => {
    window.addEventListener('resize', debounce(handleWindowResize, 300));
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <ViewportContext.Provider value={{ height, name, width }}>
      {children}
    </ViewportContext.Provider>
  );
};
