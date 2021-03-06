import React from 'react';
import renderer from 'react-test-renderer';
import AssignedEventListContainer from './index.js';
import UserGateway from '../../data/UserGateway';

describe('AssignedEventListContainer', () => {
    beforeEach(() => {
        UserGateway.login('sarah@emailprovider.com');
    });

    it('should render correctly', () => {
        const list = renderer.create(
            <AssignedEventListContainer />
        )

        expect(list).toMatchSnapshot();
    });
});
