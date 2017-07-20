/*
  Makes API calls to fetch caretaker roles.

  However, until there is an API to call, it returns canned data.
*/
import { API_URL } from '../../config/ApiConfig';
import '../../utils/fetch';

const createCaretakerRolesGateway = () => {

  return {
    getAll() {
      return fetch(API_URL + '/roles')
        .then(response => response.json())
        .then(json => {
          return json.roles;
        })
    }
  }
}

export default createCaretakerRolesGateway();
