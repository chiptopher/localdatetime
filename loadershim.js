import * as React from 'react';

global.___loader = {
    enqueue: jest.fn(),
};

jest.mock('./src/components/layout', () => {
    return {
        Layout: props => {
            return <div>{props.children}</div>;
        },
    };
});
jest.mock('moment');
jest.mock('moment-timezone', () => {
    return {
        tz: jest.fn(),
    };
});

const mockResult = {};
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
jest.mock('countries-and-timezones', () => {
    return {
        getAllTimezones: jest.fn().mockImplementation(() => mockResult),
    };
});
