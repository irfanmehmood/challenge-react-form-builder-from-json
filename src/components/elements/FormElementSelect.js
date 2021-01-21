const FormElementSelect = ({ elementData }) => {
    
  return (
    <div class="label-block">
      <label for={elementData.name}>{elementData.label}</label>
      <select name={elementData.name}>
        <option value={elementData.value}>{elementData.value === '' ? 'non provided' : elementData.value}</option>
        </select>
    </div>
  );
};

export default FormElementSelect;
