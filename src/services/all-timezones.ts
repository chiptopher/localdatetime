import {
    getAllTimezones,
    Timezone as RawTimezone,
    getCountry,
} from 'countries-and-timezones';
import { toValues } from './util';

export const allTimezonesGroupedByCountry = (): TimezoneGroup[] => {
    const mapByCountry: { [name: string]: TimezoneGroup } = {};
    const allTimezones = getAllTimezones();
    toValues<RawTimezone>(allTimezones).forEach(timezone => {
        addToMap(timezone, mapByCountry);
    });
    return toValues<TimezoneGroup>(mapByCountry);
};

const addToMap = (
    timezone: RawTimezone,
    map: { [name: string]: TimezoneGroup },
) => {
    const timezoneWithCountry = timezone.country !== null;
    if (timezoneWithCountry) {
        ifNotInMapAddToMap(timezone, map);
        map[timezone.country].timezones.push({
            name: timezone.name,
        });
    }
};

const ifNotInMapAddToMap = (
    timezone: RawTimezone,
    map: { [name: string]: TimezoneGroup },
) => {
    if (!(timezone.country in map)) {
        map[timezone.country] = {
            country: getCountry(timezone.country).name,
            timezones: [],
        };
    }
};
