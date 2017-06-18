import React, {Component} from 'react';
import {
    Button,
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {ContainerFor} from './container.js';

class EventModal extends Component {
    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderPickUpEventbutton = () => {
        if(this.props.isVolunteerNeeded) {
            return this._renderButton('[pick up event]', this.props.onPickUpEvent);
        } else {
            return null;
        }
    }

    _renderDropEventButton = () => {
        if(this.props.isVolunteerSelf) {
            return this._renderButton('[drop event]', this.props.onDropEvent);
        } else {
            return null;
        }
    }

    _renderEditEventButton = () => {
        if(this.props.isVolunteerAdmin) {
            return this._renderButton('[edit event]', this.props.onEditEvent);
        } else {
            return null;
        }
    }

    _renderModalContent = () => {
        const props = this.props;
        const event = props.event;
        return (
            <View style={styles.modalContent}>
                {this._renderEditEventButton(event.volunteer)}
                {this._renderButton('[Export to Calendar]', this.props.onExportToCalendar)}

                <Text style={styles.modalTitle}>{event.name}</Text>
                <Text style={styles.modalInfo}>{event.date} {event.time}</Text>
                <Text style={styles.modalInfo}>{event.location}</Text>
                <Text style={styles.modalInfo}>{event.role}:{event.volunteer}</Text>

                {this._renderPickUpEventbutton()}
                {this._renderDropEventButton()}

                <Text style={styles.modalInfo}>{event.description}</Text>

                {this._renderButton('Close', props.onClose)}
            </View>
        );
    };

    render() {
        return (
            <Modal visible={this.props.visible}
                animationType={"fade"}
                transparent={false}
                onRequestClose={() => {alert("Modal has been closed.")}}>
                {this._renderModalContent()}
            </Modal>
        );
  }
}

export default ContainerFor(EventModal);

const styles = StyleSheet.create({
  modalContent: {
    margin: 13,
    justifyContent: 'center'
  },
  modalTitle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 15
  },
  modalInfo: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10
  }
});
