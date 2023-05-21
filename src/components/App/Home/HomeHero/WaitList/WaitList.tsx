import { Button, DefaultModal, Input } from "components/ui";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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

  const renderBasedOnStage = () => {
    switch (stage) {
      case stages.JOIN_WAITLIST:
        return (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Enter Your Name"
              name="fulName"
              register={register}
              required
            />
            <Input
              placeholder="Enter Your Email"
              name="email"
              register={register}
              required
            />
            <Button className="close--button" text={"Submit"} />
          </form>
        );

      case stages.SURVEY:
        return (
          <form>
            <p>
              What's your proposed budget for this service on a monthly basis?
            </p>
            <Input
              register={register}
              name="proposedBudget"
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

  const { register, handleSubmit } = useForm<Inputs>();

  const registerWaitlist = () => {
    setStage(stages.SURVEY);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => registerWaitlist();

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
