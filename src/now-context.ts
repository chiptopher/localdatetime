import { createContext } from 'react';

import { DateTime } from 'luxon';

interface State {
    now: DateTime;
}

export const NowContext = createContext<State>({
    now: DateTime.local(),
});
