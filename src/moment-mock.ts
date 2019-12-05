import * as moment from 'moment';
import * as momentTimezone from 'moment-timezone';

export const momentWithFormat = (
    formatResult: string,
    secondFormatResult?: string,
) => {
    const formatMock = jest.fn();
    formatMock.mockImplementationOnce(() => {
        return formatResult;
    });
    if (secondFormatResult !== undefined) {
        formatMock.mockImplementationOnce(() => {
            return secondFormatResult;
        });
    }
    // @ts-ignore
    moment.mockImplementation(() => {
        return {
            format: formatMock,
        };
    });
};

export const momentTimezoneWithFormat = (
    expectedTimestamp: string,
    expectedTimezone: string,
    result: string,
) => {
    // @ts-ignore
    momentTimezone.tz.mockImplementation(
        (timestamp: string, timezone: string) => {
            let finalResult = '';
            if (
                timezone === expectedTimezone &&
                expectedTimestamp === timestamp
            ) {
                finalResult = result;
            }
            return {
                format: () => finalResult,
            };
        },
    );
};
