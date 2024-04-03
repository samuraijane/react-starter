import { ViewportNames } from "../../../types/enum";
import "./responsive.scss";

interface ResponsiveProps {
  height: number;
  isMobile: boolean;
  viewportName: ViewportNames;
  width: number;
}

export const Responsive = ({ height, isMobile, viewportName, width }: ResponsiveProps) => (
  <div className={`responsive responsive--${isMobile ? "mobile" : "desktop"}`}>
    <span>{viewportName}</span>
    <span>{width} x {height}</span>
  </div>
);
