import React, {Component} from 'react';
import {
    Button,
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import EventGateway from '../../gateway/event.js'

export default class EventListContainer extends Component {
  constructor() {
    super();
    this.gateway = new EventGateway();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.setState({events: this.gateway.getAll()});
  }

  render() {
    return <EventList events={this.state.events} />;
  }
}

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.item);
    };

    render() {
        item = this.props.item
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.button}>
                   <Text style={styles.item}>{item.date}: {item.name} - {item.volunteer}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export class EventList extends Component {
    state = {
        visibleModal: false,
        event: {key: 1, date: 'July 1', time: '13:00-14:00', location: '6818 Austin Center Blvd, Austin, TX 78731', name: 'Chemotherapy', volunteer: 'Jack', role: 'driver', description: ''},
    };

    _eventDetails = (event) => (
        <View>
        <EventDetailsModal event />
        </View>
    );

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
    );

    _renderModalContent = () => (
        <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{this.state.event.name}</Text>

              <Text style={styles.modalInfo}>{this.state.event.date} {this.state.event.time}</Text>
              <Text style={styles.modalInfo}>{this.state.event.location}</Text>

              <Text style={styles.modalInfo}>{this.state.event.role}:{this.state.event.volunteer}</Text>

              <Text style={styles.modalInfo}>{this.state.event.description}</Text>
            {this._renderButton('Close', () => this.setState({ visibleModal: false }))}
        </View>
    );

    _onPressItem = (eventItem) => {
        this.setState({ visibleModal: true, event: eventItem});
    };

    _renderItem = ({item}) => (
        <MyListItem
          id={item.key}
          item={item}
          onPressItem={this._onPressItem}
          title={item.title}
        />
    );

    render() {
        return (
            <View style={styles.container}>
                <Modal visible={this.state.visibleModal === true}
                    animationType={"fade"}
                    transparent={false}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                      {this._renderModalContent()}
                </Modal>
                <Text style={styles.title}>Upcoming Events</Text>
                <FlatList
                   data={this.props.events}
                   extraData={this.state}
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
