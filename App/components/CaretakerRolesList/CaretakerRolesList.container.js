import React from 'react';
import CaretakerRolesGateway from '../../data/CaretakerRoles/CaretakerRoles.gateway';
import UserGateway from '../../data/UserGateway';

export default container = (List) => class extends React.Component {
  constructor() {
    super();
    this.state = {
      caretakerRoles: [],
      userRoles: []
    };
  }

  componentDidMount() {
    const userRoles = UserGateway.getRoles();

    let newState = Object.assign({}, this.state);
    CaretakerRolesGateway.getAll().then(caretakerRoles => {
      newState.caretakerRoles = caretakerRoles;
      newState.userRoles = userRoles;
      this.setState(newState);
    });
  }

  userHasRole = (role) => {
    const words = this.state.userRoles.map(v => v.toLowerCase());
    return words.indexOf(role.toLowerCase()) >= 0;
  };

  render() {
    return <List
      isHelper={this.props.isHelper}
      caretakerRoles={this.state.caretakerRoles}
      userHasRole={this.userHasRole}
    />;
  }
}
