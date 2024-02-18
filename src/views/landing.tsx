import { useSelector } from "react-redux";
import { selectEnvironment } from "../features/environmentSlice";

export const LandingPage = (): JSX.Element => {
  const { baseUrl } = useSelector(selectEnvironment);

  return (
    <div>
      <h1>Welcome to ACME</h1>
      <p>Quisque orci purus, consequat posuere faucibus eget, volutpat vel augue. Aenean et euismod felis. Nam a tortor eget velit volutpat euismod. Fusce ac massa a ex tempus volutpat sed a ligula. Pellentesque rutrum imperdiet porttitor. Donec semper velit vitae justo accumsan finibus. Nulla nec dictum nisl, vitae fringilla dolor.</p>
      <div className="nimg">
        <img
          alt="JoAnn Morgan and other launch controllers in the firing room at Kennedy Space Center watch the launch of Apollo 11 in 1969."
          src={`${baseUrl}/assets/images/joann-morgan.jpg`}
        />
      </div>
    </div>
  );
};
