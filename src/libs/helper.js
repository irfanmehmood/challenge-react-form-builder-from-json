
import axios from "axios";

/** Remote Api Filename */
let url = '';

/** Remote Api Url */
let filename = 'record.json';
url = "https://gist.githubusercontent.com";
url += "/cleggypdc/cdd8e3ffb24d9939c4c14be5cf724ad7/raw";
url += "/49e911e0f54f18bb7877e3ab1446d70042ea56ea/";

/** Remote Api URL + Filename */
url += `${filename}`;


/** This will make api call for the form data and store response data into global state */
export const getFormDataFromApi = (dispatcherForm) => {
    axios
    .get(url)
    .then(function (response) {
      /** Use global reducer, dispatcher to update Global state for the form */
      dispatcherForm({
        type: "setFormData",
        payload: {'formData' : response.data},
      });
    })
    .catch(function (error) {
      console.log(error);
    });

}

export const formatDate = (date) => {
  return date.slice(0, date.lastIndexOf("+"));
}