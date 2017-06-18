import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import EventGateway from '../../gateway/event.js'

export default class AssignedEventListContainer extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
    this.name = "Sarah"
  }

  componentDidMount() {
    this.setState({events: this.EventGateway.getAll()});
  }

  getAssignedTo(volunteerName) {
    var assignedEvents = this.state.events.filter(function(event){ return event.volunteer === volunteerName });
    return assignedEvents;
  }

  render() {
    return <AssignedEventList events={this.getAssignedTo(this.name)} />;
  }
}

export class AssignedEventList extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Assigned Upcoming Events</Text>
            <FlatList
               data={this.props.events}
               renderItem={({item}) => <Text style={styles.item}>{item.date}: {item.name}</Text>}
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
});
