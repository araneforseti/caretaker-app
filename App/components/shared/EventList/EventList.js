import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList
} from 'react-native';
import EventModal from '../EventModal';

import Item from './Item';
import styles from './EventList.styles';
import container from './container';

const renderItem = (onPressItem, {item}) => <Item
  id={item.id}
  onPressItem={onPressItem}
  title={item.title}
  startDate={new Date(item.startDate)}
  endDate={new Date(item.startDate)}
  date={item.date}
  name={item.name}
  volunteer={item.volunteer}
/>;

function EventList( {
  selectedEvent,
  modalVisible,
  onCloseModal,
  onPressItem,
  events
} ) {
  return <View style={styles.container}>
    <EventModal
      event={selectedEvent}
      visible={modalVisible}
      onClose={onCloseModal}
    />
    <FlatList
       style={styles.list}
       data={events}
       dataWhichCouldChange={events.map((event) => event.volunteer)}
       renderItem={item => renderItem(onPressItem, item)}
       keyExtractor={(item) => item.id}
       removeClippedSubviews={true}
    />
  </View>;
}

EventList.propTypes = {
  events: PropTypes.array,

//From container
  selectedEvent: PropTypes.object,
  modalVisible: PropTypes.bool,
  onCloseModal: PropTypes.func,
  onPressItem: PropTypes.func
};

export default container(EventList);
