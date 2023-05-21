import { LoaderTypeProps } from "../loader.d";
import "./ProgressLoader.scss";

const ProgressLoader = (props: LoaderTypeProps) => {
  const { loaderText = "Loading", hideLoaderText = false, className } = props;
  return (
    <>
      <div className={`progress-loader ${className}`}>
        <div className="progress-loader__bar">
          {!hideLoaderText && <p>{loaderText}</p>}
          <span></span>
        </div>
      </div>
    </>
  );
};

export default ProgressLoader;
