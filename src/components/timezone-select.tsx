import * as React from 'react';
import Select from 'react-select';
import { allTimezonesGroupedByCountry } from '../services/all-timezones';

import './timezone-select.scss';

interface Props {
    onSelect: (timezone: string) => void;
}
export const TimezoneSelect = (props: Props) => {
    const [country, setCountry] = React.useState('');

    const allTimezones = allTimezonesGroupedByCountry();
    return (
        <div className="timezone-select">
            <label htmlFor="country">Country</label>
            <Select
                inputId="country"
                options={allTimezones.map(group => {
                    return { value: group.country, label: group.country };
                })}
                onChange={(selectedOption: any) => {
                    setCountry(selectedOption.value);
                }}
            />
            {country !== '' && (
                <>
                    <label htmlFor="timezone">Timezone</label>
                    <Select
                        options={allTimezones
                            .find(group => group.country === country)
                            .timezones.map(timezone => {
                                return {
                                    value: timezone.name,
                                    label: timezone.name,
                                };
                            })}
                        onChange={(selectOpetion: any) => {
                            props.onSelect(selectOpetion.value);
                        }}
                        inputId="timezone"
                    />
                </>
            )}
        </div>
    );
};
