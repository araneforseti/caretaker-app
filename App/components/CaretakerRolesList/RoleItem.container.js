import React from 'react';
import {
    FlatList,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import UserGateway, { Permissions } from '../../data/UserGateway';
import renderif from '../../utils/renderif.js';

export default container = (Component) => class extends React.Component {
  constructor() {
    super();
    this.state = {
      hasRole: null
    };
  }

  componentWillReceiveProps() {
    this.setState({
      hasRole: this.props.hasRole
    });
  }

  _onToggleSwitch = (value) => this.setState({ hasRole: value });

  _onLongPress = () => alert('Long Pressed');

  render() {
    return <Component
      onLongPress={this._onLongPress}
      onToggleSwitch={this._onToggleSwitch}
      hasRole={this.state.hasRole}
      name={this.props.name}
      description={this.props.description}
      isHelper={this.props.isHelper}
    />;
  }

}
