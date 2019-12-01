import * as React from 'react';
import * as moment from 'moment';
import { Layout } from '../components/layout';
import { useState, useEffect } from 'react';
import { CurrentTime } from '../components/current-time';

import './index.scss';

export const IndexPage = () => {
    return (
        <Layout className="index">
            <CurrentTime />
        </Layout>
    );
};

export default IndexPage;
