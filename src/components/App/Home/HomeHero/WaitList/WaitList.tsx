import { Button, DefaultModal, Input } from "components/ui";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { joinWaitList, saveSurvey } from "./waitListAPI";

const stages = {
  JOIN_WAITLIST: "JOIN_WAITLIST",
  SURVEY: "SURVEY",
};

type Inputs = {
  fullName: string;
  email: string;
};

const WaitList = (props: { isOpen: boolean; onClose: Function }) => {
  const { isOpen, onClose } = props;
  const [stage, setStage] = useState(stages.JOIN_WAITLIST);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const renderBasedOnStage = () => {
    switch (stage) {
      case stages.JOIN_WAITLIST:
        return (
          <form
            onSubmit={handleSubmit(onSubmit)}
            name="WaitList"
            data-netlify="true"
            method="POST"
          >
            <input type="hidden" name="form-name" value="WaitList" />
            <Input
              placeholder="Enter Your Name"
              name="fullName"
              register={register}
              required
            />
            <Input
              placeholder="Enter Your Email"
              name="email"
              register={register}
              required
            />
            <Button
              className="close--button"
              text={"Submit"}
              isLoading={loading}
              isLoadingText="Please wait..."
            />
          </form>
        );

      case stages.SURVEY:
        return (
          <form
            onSubmit={handleSubmit(onSubmit)}
            name="Survey"
            data-netlify="true"
            method="POST"
          >
            <input type="hidden" name="form-name" value="Survey" />
            <p>
              What's your proposed budget for this service on a monthly basis?
            </p>
            <Input
              register={register}
              name="proposedBudget"
              required={true}
              placeholder="What's your proposed budget"
            />
            <Input
              placeholder="What industry do you operate in?"
              required={false}
              name="industry"
              register={register}
            />
            <Button className="close--button" text={"Submit"} />
          </form>
        );

      default:
        return "";
    }
  };

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const registerWaitlist = async (data: any) => {
    setEmail(data?.email);
    await joinWaitList(data, setLoading, () => {
      setStage(stages.SURVEY);
      reset();
    });
  };

  const recordSurvey = async (data: any) => {
    await saveSurvey(data, setLoading, onClose);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) =>
    stage === stages.JOIN_WAITLIST
      ? await registerWaitlist(data)
      : await recordSurvey({ ...data, email });

  return (
    <DefaultModal
      className="home-hero__modal2"
      isOpen={isOpen}
      onClose={onClose}
      hideButton={true}
      // onButtonClick={() => toggleDemo(false)}
      buttonText="Submit"
    >
      {renderBasedOnStage()}
    </DefaultModal>
  );
};

export default WaitList;
