import Page from "./Page";
import React, { useContext } from "react";
import { FormContext } from "../libs/FormContext";

const Form = () => {
  /** Our global context state */
  const { formApiData } = useContext(FormContext);

  /** Handles our form submit,
   *  here we can hanlde custom validation and then post to remote Api if needed */
  const submitForm = (event) => {
    event.preventDefault();
    let data = '\n';
    data += `Start : ${formApiData.startTime}\n`;
    data += `End : ${formApiData.endTime}\n`;
    data += `Hours : ${formApiData.hours}\n`;
    data += `Location : ${formApiData.location}\n`;
    data += `Meetin Point : ${formApiData.meetingPoint}\n`;
    data += `Temperature : ${formApiData.temperature}\n`;
    data += `Weather : ${formApiData.weatherCondition}\n`;
    alert("You are submitting " + data);
  };

  return (
    <>
      {formApiData.formData && (
        <form
          method="POST"
          name={formApiData.formData["name"]}
          onSubmit={submitForm}
        >
          {formApiData.formPages.map((page) => (
            <Page pageData={page} key={page["uuid"]} />
          ))}
          <input type="submit" />
        </form>
      )}
    </>
  );
};
export default Form;
