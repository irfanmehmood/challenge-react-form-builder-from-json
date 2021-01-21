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
    alert("You are submitting ");
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
