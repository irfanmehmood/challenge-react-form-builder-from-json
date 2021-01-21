import Form from "./components/Form";
import React, { useReducer, useEffect } from "react";
import {FormContext} from './libs/FormContext';
import FormReducer from './libs/FormReducer';
import {getFormDataFromApi} from './libs/helper';
import "./App.css"

function App() {

  /** We now have a global state formApiData context, which can be accessed from anywhere */
  const [formApiData, dispatcherForm] = useReducer(FormReducer.reducer, FormReducer.initialState);

  /** React hook which works as componenetDidMount, as I have not provided any dependencies */
  useEffect(() => {
      getFormDataFromApi(dispatcherForm);
  }, []);

  return <>
    <FormContext.Provider value={{formApiData, dispatcherForm}}>
      <Form />
    </FormContext.Provider>
  </>;
}

export default App;
