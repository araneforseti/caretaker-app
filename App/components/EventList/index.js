import React, {Component, PureComponent} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {ContainerFor} from './container.js';
import EventModal from '../shared/EventModal/';

class MyListItem extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.item);
    };

    render() {
        item = this.props.item;
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.button}>
                   <Text style={styles.item}>{item.date}: {item.name} - {item.volunteer}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class EventList extends Component {

    _renderItem = ({item}) => (
        <MyListItem
            id={item.key}
            item={item}
            onPressItem={this.props.onPressItem}
            title={item.title}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <EventModal
                    event={this.props.selectedEvent}
                    visible={this.props.visibleModal}
                    close={this.props.onCloseModal}
                />
                <Text style={styles.title}>Upcoming Events</Text>
                <FlatList
                   data={this.props.events}
                   renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 15,
  },
  item: {
    fontSize: 20,
    textAlign: 'left',
    margin: 13,
  },
  modalContent: {
    margin: 13,
  },
  modalTitle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 15
  },
  modalInfo: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  }
});

export default ContainerFor(EventList);
