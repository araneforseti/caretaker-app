import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles';
import ListItem from '../../material-ui/ListItem';

const renderText = (text, index) => <Text key={index} style={styles.detailText}>{text}</Text>;

export default function Detail( { text, icon, center } ) {
  let textsToRender;
  if(text.map)
    textsToRender = text.map((t, index) => renderText(t, index));
  else
    textsToRender = renderText(text);

  return <ListItem
    leftElement={icon}
    centerElement={<View>{textsToRender}</View>}
    style={ {
      container: styles.detail,
      contentViewContainer: {
        alignItems: center ? 'center' : 'flex-start'
      }
    } }
  />;
}

Detail.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  icon: PropTypes.string,
  center: PropTypes.bool
};
