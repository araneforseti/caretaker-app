import React from 'react';
import renderer from 'react-test-renderer';
import Item from './Item';

describe('<EventList.Item />', () => {
  const Jul_10_2017 = new Date(1499662800000);
  const Jul_11_2017 = new Date(1499749200000);

  let props;
  const item = () => renderer.create(<Item {...props} />);

  beforeEach(() => {
    props = {
      id: 1,
      onPressItem: jest.fn(),
      title: 'Title',
      startDate: Jul_10_2017,
      endDate: Jul_11_2017,
      date: 'Jul 10',
      name: 'Chemotherapy',
      volunteer: 'The Dude'
    };
  });

  it('should render correctly', () => {
    expect(item()).toMatchSnapshot();
  });

});
