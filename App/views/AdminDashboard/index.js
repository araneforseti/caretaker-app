import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import UnassignedEventListContainer from '../../components/EventList/UnassignedEventListContainer.js';

export default class AdminDashboard extends Component {
  static navigationOptions = {
    title: 'Admin Screen'
  };

  render() {
    return (
        <View style={styles.container}>
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
