import { useContext } from 'react';

import styled from 'styled-components';

import { NowContext } from '../now-context';
import { Timezone } from './timezone-with-actions';

export const Local = () => {
    const { now } = useContext(NowContext);
    return (
        <Container>
            <Title>Local Time</Title>
            <Timezone>
                <Timezone.Copy value={now.toISO()} />
            </Timezone>
        </Container>
    );
};

const Title = styled.h2`
    margin-top: 0;
`;

const Container = styled.div`
    padding: 0.5rem 1rem;
    border: solid 2px #2d5bff;
    background-color: #2d8fff;
    border-radius: 0.5rem;

    color: white;
`;
