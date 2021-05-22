/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

//add tests for pushToHistory
describe('test pushToHistory history stack length', () => {
    test('settings' , () => {
        expect((window.history.length) + 1).toBe(pushToHistory('settings').length);
    });
    test('entry' , () => {
        expect((window.history.length) + 1).toBe(pushToHistory('entry', 0).length);
        expect((window.history.length) + 1).toBe(pushToHistory('entry', 15).length);
        expect((window.history.length) + 1).toBe(pushToHistory('entry', -1).length);
    });
    test('default', () => {
        expect((window.history.length) + 1).toBe(pushToHistory().length);
        expect((window.history.length) + 1).toBe(pushToHistory('lolxd').length);
    });
});

describe('test pushToHistory state objects', () => {
    test('settings' , () => {
        expect(pushToHistory('settings').state).toEqual({ page: 'settings'});
    });
    test('entry' , () => {
        expect(pushToHistory('entry', 0).state).toEqual({ page: 'entry0'});
        expect(pushToHistory('entry', 15).state).toEqual({ page: 'entry15'});
        expect(pushToHistory('entry', -1).state).toEqual({ page: 'entry-1'});
    });
    test('default', () => {
        expect(pushToHistory().state).toEqual({});
        expect(pushToHistory('lolxd').state).toEqual({});
    });
});