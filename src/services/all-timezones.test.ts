import { allTimezonesGroupedByCountry } from './all-timezones';
import { getAllTimezones, Timezone } from 'countries-and-timezones';

describe('allTimezonesGroupedByCountry', () => {
    beforeEach(() => {
        const mockResult: { [name: string]: Timezone } = {};
        mockResult['America/New_York'] = {
            name: 'America/New_York',
            country: 'US',
            utcOffset: -480,
            utcOffsetStr: '-04:00',
            dstOffset: -420,
            dstOffsetStr: '-03:00',
            aliasOf: null,
        };
        mockResult['America/Detroit'] = {
            name: 'America/Detroit',
            country: 'US',
            utcOffset: -300,
            utcOffsetStr: '-05:00',
            dstOffset: -240,
            dstOffsetStr: '-04:00',
            aliasOf: null,
        };
        mockResult['Africa/Accra'] = {
            name: 'Africa/Accra',
            country: 'GH',
            utcOffset: 0,
            utcOffsetStr: '+00:00',
            dstOffset: 0,
            dstOffsetStr: '+00:00',
            aliasOf: null,
        };
        //@ts-ignore
        getAllTimezones.mockImplementation(() => mockResult);
    });
    test('groups timezones that are from the same country', () => {
        const result = allTimezonesGroupedByCountry();
        expect(result).toHaveLength(2);
        expect(
            result.find(group => group.country === 'US').timezones,
        ).toHaveLength(2);
        expect(
            result.find(group => group.country === 'US').timezones[0].name,
        ).toEqual('America/New_York');
        expect(
            result.find(group => group.country === 'US').timezones[1].name,
        ).toEqual('America/Detroit');
        expect(
            result.find(group => group.country === 'GH').timezones,
        ).toHaveLength(1);
    });
});
