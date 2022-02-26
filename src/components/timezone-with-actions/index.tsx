import { ReactNode, useContext } from 'react';

import styled from 'styled-components';

import { NowContext } from '../../now-context';
import { Clear } from './clear';
import { Copy } from './copy';

interface Props {
    children: ReactNode;
    timezone?: string;
}

export const Timezone = (props: Props) => {
    const { now } = useContext(NowContext);
    const value = (props.timezone ? now.setZone(props.timezone) : now).toISO();

    return (
        <Container>
            <p className="timezone">{value}</p>
            <Buttons>{props.children}</Buttons>
        </Container>
    );
};

const Container = styled.div`
    .timezone {
        margin-bottom: 0.25rem;
    }
`;

export const Buttons = styled.div`
    button {
        background-color: transparent;
        border: solid 0px white;
        padding: 0;
        text-decoration: underline;
        color: inherit;

        margin-right: 1rem;

        cursor: pointer;
    }
`;

Timezone.Copy = Copy;
Timezone.Clear = Clear;
