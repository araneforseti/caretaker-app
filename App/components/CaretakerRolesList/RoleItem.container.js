import React from 'react';

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
    const {
      name,
      description,
      isHelper,
      isLast
    } = this.props;

    return <Component
      name={name}
      description={description}
      isHelper={isHelper}
      isLast={isLast}
      onLongPress={this._onLongPress}
      onToggleSwitch={this._onToggleSwitch}
      hasRole={this.state.hasRole}
    />;
  }

}
