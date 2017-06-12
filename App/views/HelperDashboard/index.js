import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AssignedEventListContainer from '../../components/EventList/AssignedEventListContainer.js';
import UnassignedEventListContainer from '../../components/EventList/UnassignedEventListContainer.js';

export default class HelperDashboard extends Component {
  static navigationOptions = {
    title: 'Helper Screen'
  };

  render() {
    return (
        <View style={styles.container}>
            <AssignedEventListContainer />
            <UnassignedEventListContainer />
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
