import UserGateway from './index.js';
import { Record } from 'immutable';

describe('UserGateway', () => {

    it('should return false when attempting to sign in with a non-existent user', () => {
        expect(UserGateway.login('TBD')).toBe(false);
    });

    it('should return true when sign in is successful', () => {
        expect(UserGateway.login('sarah@emailprovider.com')).toBe(true);
    });

    it('should assign TBD as a name when TBD is the identifier', () => {
        expect(UserGateway.getName('TBD')).toBe('TBD');
    });

    it('should get the current user as an immutable record', () => {
        UserGateway.login('s');

        const user =  UserGateway.getCurrentUser();

        //Record.isRecord is in the immutable@4.0.0 release candidate
        expect(user instanceof Record).toBe(true);
    })
});
