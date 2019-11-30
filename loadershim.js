import * as React from 'react';

global.___loader = {
    enqueue: jest.fn(),
};

jest.mock('./src/components/layout', () => {
    return {
        Layout: props => {
            return <div>{props.children}</div>;
        },
    };
});
jest.mock('moment');
