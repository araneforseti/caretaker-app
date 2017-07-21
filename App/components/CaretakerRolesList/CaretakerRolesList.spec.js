import React from 'react';
import CaretakerRolesList from './CaretakerRolesList';
import UserGateway from '../../data/UserGateway';
import CaretakerRolesGateway from '../../data/CaretakerRoles/CaretakerRoles.gateway';
import CaretakerRolesFixtures from '../../data/CaretakerRoles/CaretakerRoles.fixture';
import { promiseComponent, promiseValue } from '../../utils/testUtils';

describe('<CaretakerRolesList />', () => {

  let props;
  const roles = CaretakerRolesFixtures.allRoles;
  const getAllRolesPromise = promiseValue(roles);
  const caretakerRolesList = promiseComponent(<CaretakerRolesList {...props} />, getAllRolesPromise);

  beforeEach(() => {
    props = {
      isHelper: undefined
    };
    jest.spyOn(UserGateway, 'getRoles').mockReturnValue(['driver']);
    jest.spyOn(CaretakerRolesGateway, 'getAll').mockReturnValue(getAllRolesPromise);
  });

  it('should render correctly', async () => {
    props.isHelper = false;

    expect(await caretakerRolesList()).toMatchSnapshot();
  });

  describe('userHasRole', () => {
    it('should return true when the user has the given role', async () => {
      expect((await caretakerRolesList()).getInstance().userHasRole('driver')).toBe(true);
    });

    it('should return false when the user does not have the given role', async () => {
      expect((await caretakerRolesList()).getInstance().userHasRole('active friend')).toBe(false);
    });
  });

});
