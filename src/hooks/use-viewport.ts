import { useContext } from 'react';
import { ViewportContext } from '../context/viewport-context';

export const useViewport = () => {
  const { height, name, width } = useContext(ViewportContext);
  return { height, name, width };
};
