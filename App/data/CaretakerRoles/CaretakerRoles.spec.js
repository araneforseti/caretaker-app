
import { mockApiConfig, createProvider } from '../../utils/testUtils';
import RolesFixture from './CaretakerRoles.fixture';
import gateway from './CaretakerRoles.gateway';

jest.mock('../../config/ApiConfig', () => mockApiConfig);

describe('Caretaker Roles gateway', () => {

  const provider = createProvider('Caretaker Roles Gateway', 'Caretaker Roles API');

  const getAllRoles = {
    state: 'I have all the roles for a given focus',
    uponReceiving: 'A request for all the roles',
    withRequest: {
      method: 'GET',
      path: '/roles',
      headers: { 'Accept': 'application/json' }
    },
    willRespondWith: {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: {
        'roles': RolesFixture.allRoles
      }
    }
  };

  const createRole = {
    state: '_',
    uponReceiving: 'Data for a new role',
    withRequest: {
      method: 'POST',
      path: '/roles',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: { newRoleData: RolesFixture.newRoleData }
    },
    willRespondWith: {
      status: 201,
      body: {
        'newRole': RolesFixture.newRole
      }
    }
  };

  beforeAll(() => provider.setupWithInteractions([getAllRoles, createRole]));

  afterAll(() => provider.finalize());

  it('gets all the roles', () => {
    return gateway.getAll()
      .then(roles => expect(roles).toEqual(RolesFixture.allRoles))
  });

  it('creates a new role', () => {
    return gateway.create(RolesFixture.newRoleData)
      .then(newRole => expect(newRole).toEqual(RolesFixture.newRole));
  });

  describe('Pact Verification', () => {
    it('should succeed', () => provider.verify())
  })

});