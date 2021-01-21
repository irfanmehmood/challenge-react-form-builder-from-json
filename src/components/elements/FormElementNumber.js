import React, { useState, useContext, useEffect } from "react";
import { FormContext } from "../../libs/FormContext";
import { setHours, setTemperature } from "../../libs/helper";

const FormElementDateTime = ({ elementData }) => {

  const [state, setstate] = useState(elementData.value);
  const {dispatcherForm} = useContext(FormContext);

  useEffect(() => {
    if (elementData.name === 'duration') {
      setHours(elementData.value, dispatcherForm );
    } else if (elementData.name === 'temperature') {
      setTemperature(elementData.value, dispatcherForm );
    }
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (e.target.name === 'duration') {
      setHours(value, dispatcherForm );
    } else if (e.target.name === 'temperature') {
      setTemperature(value, dispatcherForm );
    }
    setstate(value);
  };

  return (
    <div className="label-block">
      <label htmlFor={elementData.name}>{elementData.label}</label>
      <input
        name={elementData.name}
        type="number"
        value={state}
        required={elementData.isRequired ? "required" : ""}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormElementDateTime;
