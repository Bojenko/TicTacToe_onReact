import React, {FC} from 'react';
import {IconButton} from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import Game from "./components/Game";

const Main: FC = () => {
    return (
        <div
            style={{
                backgroundColor: '#282c34',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                position: 'fixed'

            }}
        >
            <IconButton
                color={'info'}
                style={{
                    backgroundColor: '#282c34',
                    display: 'flex',
                    justifyContent: 'normal',
                    alignItems: 'center',
                    top: '0',
                    left: '0',

                }}
                onClick={() => {

                    // eslint-disable-next-line no-restricted-globals
                    location.reload();
                }}
            >
                <ReplayIcon fontSize={'large'}/></IconButton>
            <p/>
            <Game/>
        </div>
    );
};
export default Main;