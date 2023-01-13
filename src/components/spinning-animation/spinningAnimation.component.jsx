import { BallTriangle } from "react-loader-spinner";

// style
import "./spinningAnimation.style.scss";

const SpinningAnimation = () => (
  <div className="wait-for-data">
    <BallTriangle height={200} width={200} radius={5} color="#4fa94d" />
  </div>
);

export default SpinningAnimation;
