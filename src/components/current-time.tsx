import * as React from 'react';
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
import { useEffect, useState } from 'react';

interface Props {
    utcTimezone: string;
}

export const CurrentTime = (props: Props) => {
    const [currentTime, setCurrentTime] = useState();
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <span>{formatTime(currentTime, props.utcTimezone)}</span>
        </>
    );
};

const formatTime = (rawTime: string, utcTimezone: string): string => {
    if (utcTimezone === '') {
        return rawTime;
    } else {
        return momentTimezone.tz(rawTime, utcTimezone).format();
    }
};
