import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class EventList extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <FlatList
               data={this.props.events}
               renderItem={({item}) => <Text style={styles.item}>{item.date}: {item.name} - {item.volunteer}</Text>}
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
