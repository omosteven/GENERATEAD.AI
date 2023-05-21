import { LoaderTypeProps } from "../loader.d";
import "./RippleLoader.scss";

const RippleLoader = (props: LoaderTypeProps) => {
  const { loaderText = "Loading", hideLoaderText = false, className } = props;
  return (
    <>
      <div className={`ripple-loader ${className}`}>
        <div>
          {!hideLoaderText && <p>{loaderText}</p>}
          <div className="ripple-loader__container">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RippleLoader;
