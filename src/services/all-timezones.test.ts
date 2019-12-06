import { allTimezonesGroupedByCountry } from './all-timezones';
import {
    getAllTimezones,
    Timezone,
    Country,
    getCountry,
} from 'countries-and-timezones';

describe('allTimezonesGroupedByCountry', () => {
    test('groups timezones that are from the same country', () => {
        const result = allTimezonesGroupedByCountry();
        expect(result).toHaveLength(2);
        expect(
            result.find(group => group.country === 'United States').timezones,
        ).toHaveLength(2);
        expect(
            result.find(group => group.country === 'United States').timezones[0]
                .name,
        ).toEqual('America/New_York');
        expect(
            result.find(group => group.country === 'United States').timezones[1]
                .name,
        ).toEqual('America/Detroit');
        expect(
            result.find(group => group.country === 'France').timezones,
        ).toHaveLength(1);
    });
});
