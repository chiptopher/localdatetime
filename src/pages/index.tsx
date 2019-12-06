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
            <div className="content">
                <h1>localdatetime</h1>
                <div className="current-timezone">
                    <h3>Time in your current timezone</h3>
                    <CurrentTime />
                </div>
                <div>
                    <TimezoneSelect
                        onSelect={(timezone: string) => {
                            setCurrentTimezone(timezone);
                        }}
                    />
                    {currentTimezone && (
                        <div>
                            <h3>Time in the selected timezone</h3>
                            <CurrentTime utcTimezone={currentTimezone} />
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
