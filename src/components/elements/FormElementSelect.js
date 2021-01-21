import React, { useContext, useEffect } from "react";
import { FormContext } from "../../libs/FormContext";
import { setLocation, setMeetingPoint } from "../../libs/helper";
const FormElementSelect = ({ elementData }) => {

  const {dispatcherForm} = useContext(FormContext);

  useEffect(() => {
    if (elementData.name === 'location') {
      setLocation(elementData.value, dispatcherForm );
    } else if (elementData.name === 'meeting_point') {
      setMeetingPoint(elementData.value, dispatcherForm );
    } 
  }, [elementData.name, elementData.value, dispatcherForm ])


  const handleInputChange = (e) => {
    const value = e.target.value;
    if (elementData.name === 'location') {
      setLocation(value, dispatcherForm );
    } else if (elementData.name === 'meeting_point') {
      setMeetingPoint(value, dispatcherForm );
    } 
  };
    
  return (
    <div className="label-block">
      <label htmlFor={elementData.name}>{elementData.label}</label>
      <select name={elementData.name} value={elementData.value} onChange={handleInputChange}>
        <option 
          value={elementData.value}>{elementData.value === '' ? '' : elementData.value}
        </option>
        </select>
    </div>
  );
};

export default FormElementSelect;
