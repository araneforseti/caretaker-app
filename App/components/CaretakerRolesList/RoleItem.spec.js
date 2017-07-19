import React from 'react';
import renderer from 'react-test-renderer';
import RoleItem from './RoleItem';

describe('<RoleItem />', () => {
  let props;
  const roleItem = () => renderer.create(<RoleItem {...props} />);

  beforeEach(() => {
    props = {
      name: 'driver',
      description: 'Drives around and stuff',
      hasRole: true,
      isHelper: false,
      isLast: true,
    };
  });

  it('should render correctly', () => {
    expect(roleItem()).toMatchSnapshot();
  });

});
