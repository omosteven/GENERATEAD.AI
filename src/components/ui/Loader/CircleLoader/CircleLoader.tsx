import { LoaderTypeProps } from "../loader.d";
import "./CircleLoader.scss";

const CircleLoader = (props: LoaderTypeProps) => {
  const { loaderText = "Loading", hideLoaderText = false, className } = props;
  return (
    <>
      <div className={`circular-loader ${className}`}>
        <div>
          <span className="loader"></span>
          {!hideLoaderText && <p>{loaderText}</p>}
        </div>
      </div>
    </>
  );
};

export default CircleLoader;
