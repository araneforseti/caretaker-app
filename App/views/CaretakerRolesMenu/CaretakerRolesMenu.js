import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import CaretakerRolesList from '../../components/CaretakerRolesList';
import ScreenWithToolbar from '../../components/shared/ScreenWithToolbar';
import ListItem from '../../components/material-ui/ListItem';
import { renderIf } from '../../utils/helpers';

import container from './container';
import styles from './styles';

function CaretakerRolesMenu( {
  isHelper,
  isAdmin,
  createNewCaretakerRole,
  navigation
} ) {
  return <ScreenWithToolbar title='Roles' navigation={navigation}>
    <ScrollView style={styles.container}>
      <CaretakerRolesList isHelper={isHelper} />
      {renderIf(isAdmin, () =>
        <ListItem divider centerElement='Add Role' onPress={createNewCaretakerRole} />
      )}
    </ScrollView>
  </ScreenWithToolbar>;
}

CaretakerRolesMenu.propTypes = {
  isHelper: PropTypes.bool,
  isAdmin: PropTypes.bool,
  createNewCaretakerRole: PropTypes.func,
  navigation: PropTypes.object
};

export default container(CaretakerRolesMenu);
