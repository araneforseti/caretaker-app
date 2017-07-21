import React from 'react';
import CaretakerRolesMenu from './CaretakerRolesMenu';
import UserGateway, { Permissions } from '../../data/UserGateway';
import CaretakerRolesGateway from '../../data/CaretakerRoles/CaretakerRoles.gateway';
import CaretakerRolesFixture from '../../data/CaretakerRoles/CaretakerRoles.fixture';
import { promiseComponent, promiseValue } from '../../utils/testUtils';

describe('<CaretakerRolesMenu />', () => {
  let getCurrentPermissions;
  let caretakerRolesMenu;
  const roles = CaretakerRolesFixture.allRoles;

  beforeEach(() => {
    getCurrentPermissions = jest.spyOn(UserGateway, 'getCurrentPermissions');
    const getAllRolesPromise = promiseValue(roles);
    caretakerRolesMenu = promiseComponent(<CaretakerRolesMenu />, getAllRolesPromise);
    jest.spyOn(CaretakerRolesGateway, 'getAll').mockReturnValue(getAllRolesPromise);
    jest.spyOn(UserGateway, 'getRoles').mockReturnValue(['driver']);
  });

  it('should render correctly', async () => {
    getCurrentPermissions.mockReturnValue(Permissions.ADMIN);
    expect(await caretakerRolesMenu()).toMatchSnapshot();
  });

  describe('isHelper', () => {
    it('should return false when user is Focus', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.FOCUS);
      expect((await caretakerRolesMenu()).getInstance().isHelper()).toBe(false);
    });

    it('should return true when user is Admin', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.ADMIN);
      expect((await caretakerRolesMenu()).getInstance().isHelper()).toBe(true);
    });

    it('should return true when user is Helper', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.HELPER);
      expect((await caretakerRolesMenu()).getInstance().isHelper()).toBe(true);
    });
  });

  describe('isAdmin', () => {
    it('should return true when user is Focus', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.FOCUS);
      expect((await caretakerRolesMenu()).getInstance().isAdmin()).toBe(true);
    });

    it('should return true when user is Admin', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.ADMIN);
      expect((await caretakerRolesMenu()).getInstance().isAdmin()).toBe(true);
    });

    it('should return false when user is Helper', async () => {
      getCurrentPermissions.mockReturnValue(Permissions.HELPER);
      expect((await caretakerRolesMenu()).getInstance().isAdmin()).toBe(false);
    });
  });

  afterEach(() => {
    getCurrentPermissions.mockReset();
  });

});
