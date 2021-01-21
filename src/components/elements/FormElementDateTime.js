import React, { useState, useContext, useEffect } from "react";
import { FormContext } from "../../libs/FormContext";
import { formatDate, setEndTime, setStartTime } from "../../libs/helper";
const FormElementDateTime = ({ elementData }) => {

  const [state, setstate] = useState(formatDate(elementData.value));
  const {dispatcherForm} = useContext(FormContext);

  useEffect(() => {
    if (elementData.name === 'end_time') {
      setEndTime(elementData.value, dispatcherForm );
    } else if (elementData.name === 'start_time') {
      setStartTime(elementData.value, dispatcherForm );
    }
  }, [elementData.name, elementData.value, dispatcherForm ])

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (e.target.name === 'end_time') {
      setEndTime(value, dispatcherForm );
    } else if (e.target.name === 'start_time') {
      setStartTime(value, dispatcherForm );
    }
    setstate(value + ":00");
  };
  
  return (
    <div className="label-block">
      <label htmlFor={elementData.name}>{elementData.label}</label>
      <input
        type="datetime-local"
        name={elementData.name}
        value={state}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormElementDateTime;
