const Permissions = {
    FOCUS: 'focus',
    ADMIN: 'admin',
    HELPER: 'helper'
}

const NotificationTypes = {
    PUSH: 'push',
    EMAIL: 'email',
    SMS: 'sms'
}

const NotificationTriggers = {
    ANNOUNCEMENT: 'announcement',
    EVENT: 'event',
    EVENT_BY_ROLE: 'event by role'
}

const Settings = {
    [NotificationTypes.PUSH]: {
        name: 'Push',
        value: true
    },
    [NotificationTypes.EMAIL]: {
        name: 'Email',
        value: false
    },
    [NotificationTypes.SMS]: {
        name: 'SMS',
        value: false
    },
    [NotificationTriggers.ANNOUNCEMENT]: {
        name: 'Announcements',
        value: true
    },
    [NotificationTriggers.EVENT]: {
        name: 'Events',
        value: false
    },
    [NotificationTriggers.EVENT_BY_ROLE]: {
        name: 'Events specific to your role',
        value: true
    }
}

module.exports = {
  Permissions: Permissions,
  NotificationTypes: NotificationTypes,
  NotificationTriggers: NotificationTriggers,
  Settings: Settings
}
