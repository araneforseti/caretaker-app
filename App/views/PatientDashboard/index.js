import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import EventListContainer from '../../components/EventList/container/EventList.js';

export default class PatientDashboard extends Component {
  static navigationOptions = {
    title: 'Patient Screen'
  };

  render() {
    return (
        <View style={styles.container}>
            <EventListContainer />
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
});
