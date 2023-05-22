import { DefaultModal } from "components/ui";
import videoFile from "./demo-video.mp4";

const WatchDemo = (props: { openDemo: boolean; toggleDemo: Function }) => {
  const { openDemo, toggleDemo } = props;
  return (
    <DefaultModal
      className="home-hero__modal"
      isOpen={openDemo}
      onClose={() => toggleDemo(false)}
      onButtonClick={() => toggleDemo(false)}
      buttonText="Close"
    >
      <video autoPlay controls>
        <source src={videoFile} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <p>
        Powerful tool for success: Our product is an AI sandbox for Marketing/Ad
        agencies and a Web-app for individuals, startups or small businesses.
      </p>
    </DefaultModal>
  );
};

export default WatchDemo;
