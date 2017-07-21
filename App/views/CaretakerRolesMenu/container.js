import React from 'react';
import UserGateway, { Permissions } from '../../data/UserGateway';

export default container = (List) => class extends React.Component {
  constructor() {
    super();
    this.state = {
      permissions: null
    };
  }

  updatePermissions = () => {
    const permissions = UserGateway.getCurrentPermissions();
    return { permissions };
  }

  componentDidMount() {
    let newState = Object.assign({}, this.state);
    Object.assign(newState, this.updatePermissions());
    this.setState(newState);
  }

  isHelper = () => this.state.permissions !== Permissions.FOCUS;

  isAdmin = () => this.state.permissions === Permissions.FOCUS || this.state.permissions === Permissions.ADMIN;

  createNewCaretakerRole = () => alert('Insert Caretaker Role Creation Screen Here!');

  render() {
    return <List
      isHelper={this.isHelper()}
      isAdmin={this.isAdmin()}
      createNewCaretakerRole={this.createNewCaretakerRole}
      navigation={this.props.navigation}
    />
  }
}
