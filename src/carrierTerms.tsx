import { FormWrapper } from "./formWrapper";
import { FormEvent } from "react";
// import DateObject from "react-date-object";

type CarrierData = {
  carrierName: string;
  carrierAddress: string;
  mcnumber: string;
  dotnumber: string;
  currentDate: string;
};

type CarrierTermsProps = CarrierData & {
  updateFields: (fields: Partial<CarrierData>) => void;
  formRef: React.RefObject<HTMLFormElement>;
  onSubmit: (e: FormEvent) => void;
};

export function CarrierTerms({
  carrierName,
  carrierAddress,
  mcnumber,
  dotnumber,
  updateFields,
  formRef,
  onSubmit,
}: CarrierTermsProps) {
  var currentDate = new Date().toLocaleDateString("en-US");

  return (
    <FormWrapper title="Carrier Agreement">
      <form ref={formRef}>
        <section>
          <p>
            This Agreement is entered into on {currentDate} between MEGA
            Logistics, LLC "Broker" <br />a registered Broker, MC-953505 and{" "}
            {carrierName} located at {carrierAddress} a Registered Motor Carrier{" "}
            <br />
            {mcnumber}, {dotnumber} "Carrier".
          </p>
        </section>

        <p>
          By filling in your name you are affirming that you have read the terms
          on page 2 <br />
          and agreeing to ALL terms of this agreement.
        </p>
        <label>Carrier Name</label>
        <input
          autoFocus
          required
          type="text"
          name="carrierName"
          value={carrierName}
          onChange={(e) => updateFields({ carrierName: e.target.value })}
        />
        <label>MC Number</label>
        <input
          required
          type="text"
          name="mcnumber"
          value={mcnumber}
          placeholder="MC Number"
          onChange={(e) => updateFields({ mcnumber: e.target.value })}
        />
        <label>Date</label>
        <input
          required
          type="text"
          name="date"
          value={currentDate}
          onChange={(e) => updateFields({ currentDate: e.target.value })}
        />
        {/* <label>I agree to the above terms</label>
        <input 
        required 
        type="checkbox"
        // value={!checked}
        // onChange={(e) => updateFields({ checked: setChecked(!checked) })}/>}
         /> */}
        {/* <input
         required
         type="checkbox"
         value={!checked}
         onChange={(e) => updateFields({ checked: setChecked(!checked) })} /> */}
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </FormWrapper>
  );
}
