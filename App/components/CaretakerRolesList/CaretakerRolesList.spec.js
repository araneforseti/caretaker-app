import React from 'react';
import renderer from 'react-test-renderer';
import CaretakerRolesList from './CaretakerRolesList';
import UserGateway, { Permissions } from '../../data/UserGateway';

describe('<CaretakerRolesList />', () => {
  let props;
  const caretakerRolesList = () => renderer.create(<CaretakerRolesList {...props} />);

  beforeEach(() => {
    props = {
      isHelper: undefined
    };

    jest.spyOn(UserGateway, 'getRoles').mockReturnValue(['driver']);
  });

  it('should render correctly', () => {
    props.isHelper = false;
    expect(caretakerRolesList()).toMatchSnapshot();
  });

  describe('userHasRole', () => {
    it('should return true when the user has the given role', () => {
      expect(caretakerRolesList().getInstance().userHasRole('driver')).toBe(true);
    });

    it('should return false when the user does not have the given role', () => {
      expect(caretakerRolesList().getInstance().userHasRole('active friend')).toBe(false);
    });
  });

});
