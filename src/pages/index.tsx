import * as React from 'react';
import * as moment from 'moment';
import { Layout } from '../components/layout';
import { useState, useEffect } from 'react';
import { CurrentTime } from '../components/current-time';
import { TimezoneSelect } from '../components/timezone-select';

import './index.scss';

export const IndexPage = () => {
    const [currentTimezone, setCurrentTimezone] = useState('');
    return (
        <Layout className="index">
            <CurrentTime utcTimezone={currentTimezone} />
            <TimezoneSelect
                onSelect={(timezone: string) => {
                    setCurrentTimezone(timezone);
                }}
            />
        </Layout>
    );
};

export default IndexPage;
