import { FormEvent, useState, useRef } from "react";
import { CarrierTerms } from "./carrierTerms";
import { AddressForm } from "./addressForm";
import { UseMultiStepForm } from "./useMultiStepForm";
import { UserForm } from "./userForm";
import emailjs from "@emailjs/browser";

type FormData = {
  carrierName: string;
  authorizedSign: string;
  carrierAddress: string;
  mcnumber: string;
  dotnumber: string;
  emailAddress: string;
  phoneNumber: string;
  currentDate: string;
};

const INITIAL_DATA: FormData = {
  carrierName: "",
  authorizedSign: "",
  carrierAddress: "",
  mcnumber: "",
  dotnumber: "",
  emailAddress: "",
  phoneNumber: "",
  currentDate: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current;

    if (form) {
      // const SERVICE_ID = process.env.SERVICE_ID || "";
      // const TEMPLATE_ID = process.env.TEMPLATE_ID || "";
      // const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

      emailjs
        .sendForm(
          "service_7pahzb2",
          "template_eyus8aw",
          form,
          "a1Cb5zhlFFr3mZx40"
        )
        .then((response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text,
            console.log(form)
          );
          // setTemplateParams(INITIAL_DATA);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    previousStep,
    nextStep,
  } = UseMultiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm />,
    <CarrierTerms
      {...data}
      updateFields={updateFields}
      formRef={formRef}
      onSubmit={sendEmail}
    />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return nextStep();
    alert("By continuing, you are agreeing to all the terms stated.");
    sendEmail(e);
    alert("Form completed. Please close your browser.");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={previousStep}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
