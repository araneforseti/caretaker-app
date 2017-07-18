import React, { Component } from 'react';
import { View } from 'react-native';
import UnassignedEventList from '../../../components/UnassignedEventList';

export default class AdminDashboard extends Component {
  static navigationOptions = {
    title: 'Admin Screen'
  };

  render() {
    return <View style={styles.container}>
      <UnassignedEventList />
    </View>;
  }
}
