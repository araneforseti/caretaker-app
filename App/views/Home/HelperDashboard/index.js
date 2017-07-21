import React, { Component } from 'react';
import { View } from 'react-native';
import AssignedEventList from '../../../components/AssignedEventList';
import UnassignedEventList from '../../../components/UnassignedEventList';

import styles from './styles';

export default class HelperDashboard extends Component {
  static navigationOptions = {
    title: 'Helper Screen'
  };

  render() {
    return <View style={styles.container}>
      <AssignedEventList />
      <UnassignedEventList />
    </View>;
  }
}
