import React, { Component } from 'react';
import { View } from 'react-native';
import AllEventList from '../../../components/AllEventList';

import styles from './styles';

export default class PatientDashboard extends Component {
  static navigationOptions = {
    title: 'Patient Screen'
  };

  render() {
    return <View style={styles.container}>
      <AllEventList />
    </View>;
  }
}
