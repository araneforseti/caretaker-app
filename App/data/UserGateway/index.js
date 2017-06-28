

export class Permissions {
    static FOCUS = 'focus';
    static ADMIN = 'admin';
    static HELPER = 'helper';
}

export default class UserGateway {

    static currentUser = null;
    static allUsers = null;

    static getAll() {
        if(this.allUsers === null) {
            //api call goes here
            this.allUsers = [
                {name: 'Sarah', identifier: 'sarah@emailprovider.com', permission: Permissions.FOCUS},
                {name: 'Caroline', identifier: 'caroline@woahdude.com', permission: Permissions.ADMIN},
                {name: 'Jack', identifier: 'jack@coolwebsite.com', permission: Permissions.HELPER},
                {name: 'Austin', identifier: 'austin@yeehaw.com', permission: Permissions.HELPER}
            ]
        }
        return this.allUsers;
    }

    static getName(identifier) {
        const user = this.allUsers.find((user) => user.identifier === identifier)
        return user ? user.name : 'TBD';
    }

    static signIn(email) {
        //make call to google oauth and store the results
        let results = {
            email: email
        };
        let userFromBackend = this.getAll().find((user) => user.identifier === results.email);
        if(typeof userFromBackend !== 'undefined') {
            this.currentUser = userFromBackend;
            return true;
        }
        return false;
    }

    static isSelf(identifier) {
        return this.currentUser.identifier === identifier;
    }

    static isAdmin() {
        return this.currentUser.permission === Permissions.ADMIN
            || this.currentUser.permission === Permissions.FOCUS;
    }

    static getCurrentPermissions() {
        return this.currentUser.permission;
    }
}