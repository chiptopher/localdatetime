import * as React from 'react';

import { render } from '@testing-library/react';
import { IndexPage } from '.';

import { momentWithFormat } from '../moment-mock';

test('should show the time', async () => {
    momentWithFormat('2018–01–30T12:34:56+00:00');
    const component = render(<IndexPage />);

    expect(await component.findByText('Current time in your timezone'));
    expect(await component.findByText('2018–01–30T12:34:56+00:00'));
});

test('should update the current time', async () => {
    momentWithFormat('2018–01–30T12:34:56+00:00', '2018–01–30T12:34:57+00:00');
    const compoennt = render(<IndexPage />);
    expect(await compoennt.findByText('2018–01–30T12:34:57+00:00'));
});
