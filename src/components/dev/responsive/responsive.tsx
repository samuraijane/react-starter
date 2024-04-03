import { ViewportNames } from "../../../types/enum";
import "./responsive.scss";

interface ResponsiveProps {
  height: number;
  isMobile: boolean;
  screenName: ViewportNames;
  width: number;
}

export const Responsive = ({ height, isMobile, screenName, width }: ResponsiveProps) => (
  <div className={`responsive responsive--${isMobile ? "mobile" : "desktop"}`}>
    <span>{screenName}</span>
    <span>{width} x {height}</span>
  </div>
);
