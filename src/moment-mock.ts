import * as moment from 'moment';

export const momentWithFormat = (
    formatResult: string,
    secondFormatResult?: string,
) => {
    const formatMock = jest.fn();
    formatMock.mockImplementationOnce(() => {
        return formatResult;
    });
    if (secondFormatResult !== undefined) {
        formatMock.mockImplementationOnce(() => {return secondFormatResult})
    }
    // @ts-ignore
    moment.mockImplementation(() => {
        return {
            format: formatMock,
        };
    });
};
