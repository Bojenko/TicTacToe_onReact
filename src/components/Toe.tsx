import React, {FC} from 'react';
import SchoolIcon from '@mui/icons-material/School';
import BedIcon from '@mui/icons-material/Bed';

export enum Type {
    type_x = 'type_x',
    type_o = 'type_o',
    none = 'none'
}

export interface ToeProps {
    onClick: ()=>void,
    type: Type,
    win: boolean
}


//component
const Toe: FC<ToeProps> = ({onClick, type, win}) => {

    if (type === Type.none) return (
        <div style={{
            border: '4px solid #0288d1',
            borderRadius: '10px',
            display: 'flex',
            width: '90px',
            height: '90px',
            alignSelf: 'center',
            verticalAlign: 'baseline',
            flexFlow: 'row wrap',
            flexWrap: 'wrap'
        }}
             onClick={onClick}
        />
    );
    else if ((type === Type.type_o) && (win)) return (


        <BedIcon
            style={{
                border: '4px solid green',
                borderRadius: '10px',
                display: 'flex',
                width: '90px',
                height: '90px',
                alignSelf: 'center',
                verticalAlign: 'baseline',
                flexFlow: 'row wrap',
                flexWrap: 'wrap'
            }}
            color={'info'}
            fontSize={"large"}
            onClick={onClick}
        />
    );
    else if ((type === Type.type_o) && (!win)) return (


        <BedIcon
            style={{
                border: '4px solid #0288d1',
                borderRadius: '10px',
                display: 'flex',
                width: '90px',
                height: '90px',
                alignSelf: 'center',
                verticalAlign: 'baseline',
                flexFlow: 'row wrap',
                flexWrap: 'wrap'
            }}
            color={'info'}
            fontSize={"large"}
            onClick={onClick}
        />
    );


    else if ((type === Type.type_x) && (!win))
        return (
            <SchoolIcon
                color={'info'}
                style={{
                    border: '4px solid #0288d1',
                    borderRadius: '10px',
                    display: 'flex',
                    width: '90px',
                    height: '90px',
                    alignSelf: 'center',
                    verticalAlign: 'baseline',
                    flexFlow: 'row wrap',
                    flexWrap: 'wrap'
                }}
                fontSize={"large"}
                onClick={onClick}
            />

        );
    else return (
            <SchoolIcon
                color={'info'}
                style={{
                    border: '4px solid green',
                    borderRadius: '10px',
                    display: 'flex',
                    width: '90px',
                    height: '90px',
                    alignSelf: 'center',
                    verticalAlign: 'baseline',
                    flexFlow: 'row wrap',
                    flexWrap: 'wrap'
                }}
                fontSize={"large"}
                onClick={onClick}
            />

        );
};

export default Toe;