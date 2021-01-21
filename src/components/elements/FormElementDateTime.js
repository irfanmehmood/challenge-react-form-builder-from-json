import { formatDate } from "../../libs/helper";
const FormElementDateTime = ({ elementData }) => {
  return (
    <div class="label-block">
      <label for={elementData.name}>{elementData.label}</label>
      <input
        type="datetime-local"
        name={elementData.name}
        value={formatDate(elementData.value)}
      />
    </div>
  );
};

export default FormElementDateTime;
