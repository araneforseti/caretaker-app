import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text, ScrollView } from 'react-native';
import dateFormat from 'dateformat';
import { renderIf, fieldPresent } from '../../../utils/helpers';

import styles from './styles';

import Header from './Header';
import Detail from './Detail';
import ActionButton from '../../material-ui/ActionButton';
import Button from '../../material-ui/Button';

const getDateTexts = (startDate, endDate) => {
  const texts = [dateFormat(startDate, 'dddd, mmmm d')];
  if(startDate && endDate) {
    const startDateTT = dateFormat(startDate, 'TT');
    const endDateTT = dateFormat(endDate, 'TT');
    if(startDateTT === endDateTT)
      startDateTT = '';
    texts.push(`${dateFormat(startDate, 'h:MM')} ${startDateTT} - ${dateFormat(endDate, 'h:MM TT')}`);
  }

  return texts;
};

const eventAccepted = (event) => event.volunteer !== 'TBD';

export default function EventPage( { event, onClose, onAccept, onDrop, onEdit } ) {
  const startDate = fieldPresent(event.startDate) ? new Date(event.startDate) : null;
  const endDate = fieldPresent(event.endDate) ? new Date(event.endDate) : null;

  return <View style={styles.container}>
    <Header title={event.name} onClose={onClose} />
    <ScrollView style={styles.scrollbox}>
      <View style={styles.details}>
        {renderIf(
          fieldPresent(event.startDate), () =>
          <Detail center icon='schedule' text={getDateTexts(startDate, endDate)} />
        )}
        {renderIf(
          fieldPresent(event.location), () =>
          <Detail center icon='place' text={event.location} />
        )}
        {renderIf(
          fieldPresent(event.volunteer), () =>
          <Detail center icon='person' text={event.volunteer} />
        )}
        {renderIf(
          fieldPresent(event.description) && event.description.length > 0, () =>
          <Detail icon='subject' text={event.description} />
        )}
      </View>
      {renderIf(
        !eventAccepted(event), () =>
        <Button raised primary icon='done' text='Accept' onPress={onAccept} style={{container: styles.acceptBtn}} />
      )}
    </ScrollView>
    <ActionButton icon='mode-edit' onPress={onEdit} style={ {
      positionContainer: styles.editBtnPosition,
      container: styles.editBtn
    } } />
  </View>;
}

EventPage.propTypes = {
  event: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  onAccept: PropTypes.func,
  onDrop: PropTypes.func,
  onEdit: PropTypes.func
};
