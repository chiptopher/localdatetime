import * as React from 'react';
import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';
import { useEffect, useState } from 'react';
import * as CopyToClipboard from 'react-copy-to-clipboard';

import './current-time.scss';

interface Props {
    utcTimezone?: string;
}

export const CurrentTime = (props: Props) => {
    const [currentTime, setCurrentTime] = useState();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <span>{formatTime(currentTime, props.utcTimezone)}</span>
            {!copied ? (
                <CopyToClipboard
                    text={currentTime}
                    onCopy={() => setCopied(true)}
                >
                    <span className="copy">Copy</span>
                </CopyToClipboard>
            ) : (
                <span className="coppied">Timestamp copied!</span>
            )}
        </div>
    );
};

const formatTime = (rawTime: string, utcTimezone: string): string => {
    if (utcTimezone === undefined) {
        return rawTime;
    } else {
        return momentTimezone.tz(rawTime, utcTimezone).format();
    }
};
