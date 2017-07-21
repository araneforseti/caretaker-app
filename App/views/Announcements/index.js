import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import ContainerFor from './container.js';
import { renderIf } from '../../utils/helpers';
import ActionButton from '../../components/material-ui/ActionButton';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';

const ListItem = (props) => (
    <TouchableOpacity style={styles.announcementContainer} onPress={props.onEditAnnouncement}>
        <Text style={styles.announcementTitle}>{props.title}</Text>
        <Text>{new Date(props.date).toDateString()}</Text>
        <Text>{props.description}</Text>
    </TouchableOpacity>
)

const Announcements = (props) => {

    const _renderItem = ({item}) => (
        <ListItem
            title={item.title}
            date={item.date}
            description={item.description}
            onEditAnnouncement={props.onEditAnnouncement}
        />
    )

    const addAnnouncementButton = renderIf(props.isUserAdmin, () =>
        <ActionButton onPress={props.onAddAnnouncement} />
    );

    return <ScreenWithToolbar title='Announcements' navigation={props.navigation}>
        <View style={styles.container}>
            <Text style={styles.title}>Announcements</Text>
            <FlatList
               data={props.announcements}
               renderItem={_renderItem}
               keyExtractor={(item) => item.id}
               removeClippedSubviews={true}
            />
            {addAnnouncementButton}
        </View>
    </ScreenWithToolbar>;
}

export default ContainerFor(Announcements);

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 15,
  },
  announcementContainer: {
      margin: 10
  },
  announcementTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
  }
});
