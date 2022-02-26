import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export interface CopyProps {
    value: string;
}

export const Copy: React.FC<CopyProps> = ({ value }) => (
    <CopyToClipboard text={value}>
        <button>Copy</button>
    </CopyToClipboard>
);
