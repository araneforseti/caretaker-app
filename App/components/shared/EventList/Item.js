import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import DateDisplay from '../DateDisplay';
import EventSummaryBox from '../EventSummaryBox';

import styles from './Item.styles';

export default class Item extends React.PureComponent {
  _onPress = () => this.props.onPressItem(this.props.id);

  render() {
    const {
      startDate,
      name,
      volunteer
    } = this.props;

    return <TouchableOpacity onPress={this._onPress}>
      <View style={styles.container}>
        <DateDisplay date={startDate} />
        <EventSummaryBox name={name} volunteer={volunteer} />
      </View>
    </TouchableOpacity>;
  }
}
