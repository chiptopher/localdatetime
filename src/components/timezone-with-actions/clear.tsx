import React from 'react';

interface Props {
    onClear: () => void;
}

export const Clear: React.FC<Props> = ({ onClear }) => {
    return <button onClick={onClear}>Clear</button>;
};
