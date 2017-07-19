import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  TouchableOpacity,
} from 'react-native';
import renderif from '../../utils/renderif';

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
      onToggleSwitch
    } = this.props;

    return <TouchableOpacity onLongPress={onLongPress}>
      <ListItem
        centerElement={ {
          primaryText: name,
          secondaryText: description
        } }
        rightElement={renderif(isHelper, <Switch value={hasRole} onValueChange={onToggleSwitch} />)}
      />
    </TouchableOpacity>;
  }
}

RoleItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  hasRole: PropTypes.bool,
  isHelper: PropTypes.bool,

//From Container
  onLongPress: PropTypes.func,
  onToggleSwitch: PropTypes.func
};

export default container(RoleItem);
