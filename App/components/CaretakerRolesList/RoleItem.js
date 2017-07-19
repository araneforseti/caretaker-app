import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  TouchableOpacity,
} from 'react-native';
import renderif from '../../utils/renderif';
import theme from '../../config/theme';

import container from './RoleItem.container';
import ListItem from '../material-ui/ListItem';

export class RoleItem extends React.PureComponent {
  render() {
    const {
      name,
      description,
      hasRole,
      isHelper,
      onLongPress,
      onToggleSwitch,
      isLast
    } = this.props;

    return <TouchableOpacity onLongPress={onLongPress}>
      <ListItem
        divider={isLast}
        centerElement={ {
          primaryText: name,
          secondaryText: description
        } }
        rightElement={renderif(isHelper, <Switch
          value={hasRole}
          onValueChange={onToggleSwitch}
          onTintColor={theme.palette.lightColor}
          thumbTintColor={hasRole ? theme.palette.secondaryColor : null}
        />)}
      />
    </TouchableOpacity>;
  }
}

RoleItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  hasRole: PropTypes.bool,
  isHelper: PropTypes.bool,
  isLast: PropTypes.bool,

//From Container
  onLongPress: PropTypes.func,
  onToggleSwitch: PropTypes.func
};

export default container(RoleItem);
