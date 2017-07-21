import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const _needsVolunteer = (volunteer) => volunteer === 'TBD';

export default function EventSummaryBox( { name, volunteer } ) {
  const needsVolunteer = _needsVolunteer(volunteer);

  return <View style={[styles.container, needsVolunteer && styles.needVolunteer]}>
    <Text style={ [
      styles.text,
      styles.name,
      needsVolunteer && styles.needVolunteerText
    ] }>
      {name}
    </Text>
    <Text style={ [
      styles.text,
      styles.volunteer,
      needsVolunteer && styles.needVolunteerText,
      needsVolunteer && styles.italic
    ] }>
      {volunteer}
    </Text>
  </View>;
}
