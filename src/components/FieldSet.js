import FormElementDateTime from './elements/FormElementDateTime'
import FormElementNumber from './elements/FormElementNumber'
import FormElementSelect from './elements/FormElementSelect'

const FieldSet = ({fieldSetData}) => {
  
  const loadHtmlFormElements = (element) => {

      let ele = null;
      switch (element.type) {
        case 'DateTime':
          ele = <FormElementDateTime elementData={element} key={element["uuid"]} />;
        break;
        case 'Number':
          ele = <FormElementNumber elementData={element} key={element["uuid"]} />;
        break;
        case 'Select':
          ele = <FormElementSelect elementData={element} key={element["uuid"]} />;
        break;
        default:
      }
      return ele;
  }



    return <>
    <fieldset >
    <legend>{fieldSetData.title}</legend>
      { fieldSetData.children.map((element) => (
          loadHtmlFormElements(element)
      )) }
    </fieldset>
    </>
  };
  export default FieldSet;
  