
/** initialise our theme state from local storage*/
const initialState = {
  formData: null,
  formPages: null,
};

/** Our dispatcher reducer */
function reducer(state, action) {

  if (action.type === 'setFormData') {
    
    /** Return our new state */
    console.log(action.payload);
    return {
      formData: action.payload.formData.form,
      formPages: action.payload.formData.form.children,
    }
  }
  return null;
}

export default { reducer, initialState };