import * as React from 'react';
import * as moment from 'moment';
import { Layout } from '../components/layout';

import './index.scss';
import { useState, useEffect } from 'react';

export const IndexPage = () => {
    const [currentTime, setCurrentTime] = useState(moment().format());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <Layout className="index">
            <span>Current time in your timezone</span>
            <span>{currentTime}</span>
        </Layout>
    );
};

export default IndexPage;
