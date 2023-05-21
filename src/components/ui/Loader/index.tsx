import CircleLoader from "./CircleLoader/CircleLoader";
import ProgressLoader from "./ProgressLoader/ProgressLoader";
import RippleLoader from "./RippleLoader/RippleLoader";

enum LOADERTYPES {
  PROGRESS = "PROGRESS",
  CIRCULAR = "CIRCULAR",
  RIPPLE = "RIPPLE",
}

type loaderTypes = keyof typeof LOADERTYPES;

interface loadingProps {
  loaderType?: loaderTypes;
  loaderText?: string;
  hideLoaderText?: boolean;
  className?: string;
}

const Loader = (props: loadingProps) => {
  const { loaderType } = props;

  switch (loaderType) {
    case LOADERTYPES.PROGRESS:
      return <ProgressLoader {...props} />;
    case LOADERTYPES.CIRCULAR:
      return <CircleLoader {...props} />;
    case LOADERTYPES.RIPPLE:
      return <RippleLoader {...props} />;
    default:
      return <RippleLoader {...props} />;
  }
};

export default Loader;
