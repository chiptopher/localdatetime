import * as React from 'react';
import * as moment from 'moment';
import { useEffect, useState } from 'react';

interface Props {}

export const CurrentTime = (props: Props) => {
    const [currentTime, setCurrentTime] = useState(moment().format());
    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = moment().format();
            console.log(currentTime);
            setCurrentTime(currentTime);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <span>Current time in your timezone</span>
            <span>{currentTime}</span>
        </>
    );
};
