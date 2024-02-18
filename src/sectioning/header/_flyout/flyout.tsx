import { MouseEventHandler } from 'react';
import './flyout.scss';

interface FlyoutButtonProps {
  action: MouseEventHandler<HTMLButtonElement>;
  isShowMobileNav: boolean;
}

export const FlyoutBtn = ({
  action,
  isShowMobileNav
}: FlyoutButtonProps): JSX.Element => {

  return (
    <button
      className={`flyout-btn ${isShowMobileNav ? 'flyout-btn--active' : ''}`}
      onClick={action}
    >
      <span className="flyout-btn__stripe"></span>
      <span className="flyout-btn__stripe"></span>
      <span className="flyout-btn__stripe"></span>
    </button>
  );
}
