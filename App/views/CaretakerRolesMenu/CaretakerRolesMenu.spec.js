import React from 'react';
import renderer from 'react-test-renderer';
import CaretakerRolesMenu from './CaretakerRolesMenu';
import UserGateway, { Permissions } from '../../data/UserGateway';

describe('<CaretakerRolesMenu />', () => {
  let getCurrentPermissions;
  const caretakerRolesMenu = () => renderer.create(<CaretakerRolesMenu />);

  beforeEach(() => {
    getCurrentPermissions = jest.spyOn(UserGateway, 'getCurrentPermissions');
    jest.spyOn(UserGateway, 'getRoles').mockReturnValue(['driver']);
  });

  it('should render correctly', () => {
    getCurrentPermissions.mockReturnValue(Permissions.ADMIN);
    expect(caretakerRolesMenu()).toMatchSnapshot();
  });

  describe('isHelper', () => {
    it('should return false when user is Focus', () => {
      getCurrentPermissions.mockReturnValue(Permissions.FOCUS);
      expect(caretakerRolesMenu().getInstance().isHelper()).toBe(false);
    });

    it('should return true when user is Admin', () => {
      getCurrentPermissions.mockReturnValue(Permissions.ADMIN);
      expect(caretakerRolesMenu().getInstance().isHelper()).toBe(true);
    });

    it('should return true when user is Helper', () => {
      getCurrentPermissions.mockReturnValue(Permissions.HELPER);
      expect(caretakerRolesMenu().getInstance().isHelper()).toBe(true);
    });
  });

  describe('isAdmin', () => {
    it('should return true when user is Focus', () => {
      getCurrentPermissions.mockReturnValue(Permissions.FOCUS);
      expect(caretakerRolesMenu().getInstance().isAdmin()).toBe(true);
    });

    it('should return true when user is Admin', () => {
      getCurrentPermissions.mockReturnValue(Permissions.ADMIN);
      expect(caretakerRolesMenu().getInstance().isAdmin()).toBe(true);
    });

    it('should return false when user is Helper', () => {
      getCurrentPermissions.mockReturnValue(Permissions.HELPER);
      expect(caretakerRolesMenu().getInstance().isAdmin()).toBe(false);
    });
  });

  afterEach(() => {
    getCurrentPermissions.mockReset();
  });

});
