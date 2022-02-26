import { useEffect, useState } from 'react';

import { DateTime } from 'luxon';
import styled from 'styled-components';

import { Custom } from './components/custom';
import { Local } from './components/local';
import { NowContext } from './now-context';

function App() {
    const [now, setNow] = useState(DateTime.local());
    useEffect(() => {
        const interval = setInterval(() => {
            setNow(DateTime.local());
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <NowContext.Provider value={{ now }}>
            <Container>
                <header>
                    <img src="/android-chrome-512x512.png" alt="Site logo" />
                    <h1>LocalDateTime.zone</h1>
                </header>
                <main>
                    <Local />
                    <Custom />
                </main>
                <footer>
                    <div>
                        <a
                            href="https://github.com/chiptopher/localdatetime"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Source Code for this Site
                        </a>
                    </div>
                </footer>
            </Container>
        </NowContext.Provider>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;

    header {
        text-align: center;
        margin-top: 2rem;
        img {
            width: 75px;
            margin-right: 2rem;
        }
        h1 {
            margin-top: 0;
        }
    }

    main {
        width: 700px;

        flex-grow: 1;
    }

    footer {
        height: 5rem;
        width: 700px;
    }
`;
