import React, {useState} from 'react';
const FormElementDateTime = ({ elementData }) => {

  const [state, setstate] = useState(elementData.value)

  const handleInputChange = (e) => {
    const value = e.target.value;
    setstate(value);
  }
    
  return (
    <div class="label-block">
      <label for={elementData.name}>{elementData.label}</label>
      <input
            name={elementData.name}
            type="number"
            value={state}
            onChange={handleInputChange} />
    </div>
  );
};

export default FormElementDateTime;
