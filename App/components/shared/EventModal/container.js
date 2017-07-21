import React, {Component} from 'react';
import UserGateway from '../../../data/UserGateway';
import EventGateway from '../../../data/EventGateway';

export var ContainerFor = (EventModal) => class extends Component {

    _onPickUpEvent = () => {
        EventGateway.pickUpEvent(this.props.event.id, UserGateway.getCurrentUser().identifier);
    };

    _onDropEvent = () => {
        EventGateway.dropEvent(this.props.event.id);
    }

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
