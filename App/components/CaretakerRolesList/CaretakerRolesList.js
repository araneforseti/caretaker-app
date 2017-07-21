import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList
} from 'react-native';

import RoleItem from './RoleItem';
import container from './CaretakerRolesList.container';
import styles from './CaretakerRolesList.styles';

class CaretakerRolesList extends React.Component {
  _renderItem = ({item, index}) => <RoleItem
    name={item.name}
    description={item.description}
    isHelper={this.props.isHelper}
    hasRole={this.props.userHasRole(item.name)}
    isLast={index === this.props.caretakerRoles.length - 1}
  />;

  render() {
    return <View style={styles.container}>
      <FlatList
        data={this.props.caretakerRoles}
        dataWhichCouldChange={this.props.caretakerRoles.map(role => role.volunteer)}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>;
  }
}

CaretakerRolesList.propTypes = {
//From container
  caretakerRoles: PropTypes.array,
  isHelper: PropTypes.bool,
  userHasRole: PropTypes.func
};

export default container(CaretakerRolesList);
