import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const needsVolunteer = (volunteer) => volunteer === 'TBD';

export default function EventSummaryBox( { name, volunteer } ) {
  const containerStyles = [styles.container];
  const nameStyles = [styles.text, styles.name];
  const volunteerStyles = [styles.text, styles.volunteer];

  if(needsVolunteer(volunteer)) {
    containerStyles.push(styles.needVolunteerContainer);
    nameStyles.push(styles.needVolunteerText);
    volunteerStyles.push(styles.needVolunteerText);
    volunteerStyles.push(styles.italic);
  }
  return <View style={containerStyles}>
    <Text style={nameStyles}>{name}</Text>
    <Text style={volunteerStyles}>{volunteer}</Text>
  </View>;
}
