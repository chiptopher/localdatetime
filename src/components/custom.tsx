import { useContext, useState } from 'react';

import { getAllTimezones } from 'countries-and-timezones';
import Select from 'react-select';
import styled from 'styled-components';

import { NowContext } from '../now-context';
import { Timezone } from './timezone-with-actions';

interface Option {
    label: string;
    value: string;
}

export const Custom = () => {
    const [selection, setValue] = useState<Option | undefined>(undefined);
    const { now } = useContext(NowContext);
    return (
        <div>
            <Title>Other Timezone</Title>
            <p>Show the current time in a specific timezone.</p>
            <form>
                <Select
                    name="timezone"
                    onChange={newValue => setValue(newValue || undefined)}
                    options={Object.keys(getAllTimezones()).map(timezone => ({
                        label: timezone,
                        value: timezone,
                    }))}
                    value={selection}
                />
            </form>
            {selection && (
                <Container>
                    <CustomTimezoneTitle>
                        Time in Selected Timezone
                    </CustomTimezoneTitle>
                    <Timezone timezone={selection.value}>
                        <Timezone.Clear onClear={() => setValue(undefined)} />
                        <Timezone.Copy
                            value={now.setZone(selection.value).toISO()}
                        />
                    </Timezone>
                </Container>
            )}
        </div>
    );
};

const Title = styled.h2`
    margin-bottom: 0rem;
`;

const CustomTimezoneTitle = styled.p`
    font-weight: bold;
`;

const Container = styled.div`
    margin-top: 1rem;
`;
