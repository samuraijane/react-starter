import { useEffect } from 'react';

export const useDisableBodyScroll = (isMobileMenuOpen: boolean) => { // [1]
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('y-disable');
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.overflowX = 'hidden';
      document.body.classList.remove('y-disable');
    }
  }, [isMobileMenuOpen]);
};

/*
NOTES
[1] Source
    stackoverflow.com/questions/54989513/react-prevent-scroll-when-
    modal-is-open
*/
