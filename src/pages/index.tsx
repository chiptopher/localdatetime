import * as React from 'react';
import * as moment from 'moment';
import { Layout } from '../components/layout';
import { useState, useEffect } from 'react';
import { CurrentTime } from '../components/current-time';
import { TimezoneSelect } from '../components/timezone-select';

import './index.scss';

export const IndexPage = () => {
    const [currentTimezone, setCurrentTimezone] = useState<undefined | string>(
        undefined,
    );
    return (
        <Layout className="index">
            <span>Time in your current timezone</span>
            <CurrentTime />
            <TimezoneSelect
                onSelect={(timezone: string) => {
                    setCurrentTimezone(timezone);
                }}
            />
            {currentTimezone && (
                <>
                    <span>Time in the selected timezone</span>
                    <CurrentTime utcTimezone={currentTimezone} />
                </>
            )}
        </Layout>
    );
};

export default IndexPage;
