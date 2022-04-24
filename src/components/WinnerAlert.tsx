import React, {FC} from 'react';
import {Alert} from "@mui/material";

export interface WinnerAlertProps{
    player:string
}
const WinnerAlert:FC<WinnerAlertProps> = ({player}) => {
    if(player==='none')
    return (
        <div style={{
            visibility:'hidden'
        }}>
            <Alert severity={'success'}

            >{player}</Alert>
        </div>
    );
    else{
        return (
            <div style={{
                visibility:'visible'
            }}>
                <Alert severity={'success'}

                >
                {player}
                </Alert>
            </div>
        );
    }
};

export default WinnerAlert;