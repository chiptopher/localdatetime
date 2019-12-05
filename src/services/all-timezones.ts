import {
    getAllTimezones,
    Timezone as RawTimezone,
} from 'countries-and-timezones';
import { toValues } from './util';

export const allTimezonesGroupedByCountry = (): TimezoneGroup[] => {
    const mapByCountry: { [name: string]: TimezoneGroup } = {};
    toValues<RawTimezone>(getAllTimezones()).forEach(timezone => {
        addToMap(timezone, mapByCountry);
    });
    return toValues<TimezoneGroup>(mapByCountry);
};

const addToMap = (
    timezone: RawTimezone,
    map: { [name: string]: TimezoneGroup },
) => {
    ifNotInMapAddToMap(timezone, map);
    map[timezone.country].timezones.push({
        name: timezone.name,
    });
};

const ifNotInMapAddToMap = (
    timezone: RawTimezone,
    map: { [name: string]: TimezoneGroup },
) => {
    if (!(timezone.country in map)) {
        map[timezone.country] = {
            country: timezone.country,
            timezones: [],
        };
    }
};
