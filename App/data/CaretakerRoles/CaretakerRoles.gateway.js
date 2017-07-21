import {parseJson, getResource, postResource} from '../../utils/fetch';

const createCaretakerRolesGateway = () => {
  const roles = '/roles';

  return {
    getAll() {
      return getResource(roles)
        .then(parseJson)
        .then(json => json.roles);
    },

    create(newRoleData) {
      return postResource(roles, {newRoleData})
        .then(parseJson)
        .then(json => json.newRole);
    }
  }
};

export default createCaretakerRolesGateway();
