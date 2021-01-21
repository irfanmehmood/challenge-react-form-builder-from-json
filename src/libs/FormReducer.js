/** initialise our theme state from local storage*/
const initialState = {
  formData: null,
  formPages: null,
  startTime: null,
  endTime: null,
  hours: null,
  location: null,
  meetingPoint: null,
  temperature: null,
  weatherCondition: null,
};

/** Our dispatcher reducer */
function reducer(state, action) {
  switch (action.type) {
    case "setFormData":
      return {
        ...state,
        formData: action.payload.formData.form,
        formPages: action.payload.formData.form.children,
      };

    case "setHours":
      return {
        ...state,
        hours: action.payload.hours,
      };

    case "setTemperature":
      return {
        ...state,
        temperature: action.payload.temperature,
      };

    case "setStartTime":
      return {
        ...state,
        startTime: action.payload.startTime,
      };

    case "setEndTime":
      return {
        ...state,
        endTime: action.payload.endTime,
      };

    case "setLocation":
      return {
        ...state,
        location: action.payload.location,
      };

    case "setMeetingPoint":
      return {
        ...state,
        meetingPoint: action.payload.meetingPoint,
      };

    default:
  }
  return null;
}

export default { reducer, initialState };
