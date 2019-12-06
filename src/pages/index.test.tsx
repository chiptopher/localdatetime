import * as React from 'react';

import { render } from '@testing-library/react';
import { IndexPage } from '.';

import { momentWithFormat, momentTimezoneWithFormat } from '../moment-mock';

import selectEvent from 'react-select-event';

test('should show the time', async () => {
    momentWithFormat('2018–01–30T12:34:56+00:00');
    const component = render(<IndexPage />);

    expect(await component.findByText('2018–01–30T12:34:56+00:00'));
});

test('should update the current time', async () => {
    momentWithFormat('2018–01–30T12:34:56+00:00', '2018–01–30T12:34:57+00:00');
    const compoennt = render(<IndexPage />);
    expect(await compoennt.findByText('2018–01–30T12:34:57+00:00'));
});

test('selecting a country and the a timezone should show the time in that timezone', async () => {
    const defaultTime = '2018–01–30T12:00:00+00:00';
    const timeInDifferentTimezone = '2018–01–30T08:00:00-04:00';

    momentWithFormat(defaultTime, defaultTime);
    momentTimezoneWithFormat(
        defaultTime,
        'America/New_York',
        timeInDifferentTimezone,
    );

    const component = render(<IndexPage />);
    await selectEvent.select(
        await component.findByLabelText('Country'),
        'United States',
    );
    await selectEvent.select(
        await component.findByLabelText('Timezone'),
        'America/New_York',
    );
    expect(await component.findByText(timeInDifferentTimezone));
});
