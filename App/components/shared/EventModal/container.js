import React, {Component} from 'react';
import UserGateway from '../../../gateway/user.js';

export var ContainerFor = (EventModal) => class extends Component {

    _onPickUpEvent = () => alert('volunteered!');

    _onDropEvent = () => alert('un-volunteered :(');

    _onEditEvent = () => alert('edited!');

    _onExportToCalendar = () => alert('exported!');

    isVolunteerNeeded() {
        return this.props.event.volunteerId === 'TBD';
    }

    isVolunteerSelf() {
        return UserGateway.isSelf(this.props.event.volunteerId);
    }

    isVolunteerAdmin() {
        return UserGateway.isAdmin(this.props.event.volunteerId);
    }

    render() {
        if(this.props.event === null) {
            return null;
        }
        return (
            <EventModal
                visible={this.props.visible}
                event={this.props.event}
                isVolunteerNeeded={this.isVolunteerNeeded()}
                isVolunteerSelf={this.isVolunteerSelf()}
                isVolunteerAdmin={this.isVolunteerAdmin()}
                onPickUpEvent={this._onPickUpEvent}
                onDropEvent={this._onDropEvent}
                onEditEvent={this._onEditEvent}
                onExportToCalendar={this._onExportToCalendar}
                onClose={this.props.onClose}
            />
        )
    }
}
