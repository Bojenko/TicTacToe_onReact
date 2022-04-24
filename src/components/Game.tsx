import React, {FC, useState} from 'react';
import {IconButton} from "@mui/material";
import Toe, {Type} from "./Toe";
import WinnerAlert from "./WinnerAlert";

export interface GameProps {
    width?: string,
    height?: string
}


const GameStatement: Type[][] = [
    [Type.none, Type.none, Type.none],
    [Type.none, Type.none, Type.none],
    [Type.none, Type.none, Type.none]
]
const WinnerStatement: boolean[][] = [
    [false],[false],[false],
    [false],[false],[false],
    [false],[false],[false]
]

enum Turn {
    player1 = 'player1',
    player2 = 'player2'
}
let curTurn: Turn = Turn.player1;
const SwitchTurn = (current: Turn) => {
    if (current === Turn.player1) return Turn.player2;
    else return Turn.player1;
}


const Game: FC<GameProps> = (
    {
        width = '400px',
        height = '400px'
    }) => {


    const [gameField, setGameField]=useState({
        field:GameStatement
    })
    const [winnersField, setWinnersField] = useState({
        winners:WinnerStatement
    })
    const [winner, setWinner] = useState('none');
    const [gameStatus, setGameStatus] = useState({
        stopped:false
    })

    const SetGameField =(x: number, y: number)=> {
        if(gameStatus.stopped)return;
        if (curTurn === Turn.player1) {
            GameStatement[x][y] = Type.type_o;
            console.log('you here');
        }
        if (curTurn === Turn.player2){
            GameStatement[x][y] = Type.type_x;
            console.log('or here');
        }
        setGameField({field: GameStatement});

        // eslint-disable-next-line no-restricted-globals
        curTurn= SwitchTurn(curTurn);

        if (EndGameCheck().EndGame) {
            setWinner(EndGameCheck().Winner.toString());
            setGameStatus({stopped: true});
            console.log(EndGameCheck().Winner)
        }
        return;
        // if (!continueFlag) return Type.none;
    }



    const ThatPlayerWon = (toeType: Type) => {
        for (let i = 0; i < 3; i++) {
            if ((GameStatement[i][0] === toeType) &&
                (GameStatement[i][1] === toeType) &&
                (GameStatement[i][2] === toeType)) {
                WinnerStatement[i][0]=true;
                WinnerStatement[i][1]=true;
                WinnerStatement[i][2]=true;
                setWinnersField({winners: WinnerStatement})
                return true;
            }
        }
        for (let i = 0; i < 3; i++) {
            if ((GameStatement[0][i] === toeType) &&
                (GameStatement[1][i] === toeType) &&
                (GameStatement[2][i] === toeType)) {
                WinnerStatement[0][i]=true;
                WinnerStatement[1][i]=true;
                WinnerStatement[2][i]=true;
                setWinnersField({winners: WinnerStatement})
                return true;
            }
        }
        if ((GameStatement[0][0] === toeType) &&
            (GameStatement[1][1] === toeType) &&
            (GameStatement[2][2] === toeType)) {
            WinnerStatement[0][0]=true;
            WinnerStatement[1][1]=true;
            WinnerStatement[2][2]=true;
            setWinnersField({winners: WinnerStatement})
            return true;
        }
        if ((GameStatement[0][2] === toeType) &&
            (GameStatement[1][1] === toeType) &&
            (GameStatement[2][0] === toeType)) {
            WinnerStatement[0][2]=true;
            WinnerStatement[1][1]=true;
            WinnerStatement[2][0]=true;
            setWinnersField({winners: WinnerStatement})
            return true;
        }
    }
    const IsDraw = () => {
        let NotEmptyElements = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (GameStatement[i][j] !== Type.none) NotEmptyElements++;
            }
        }
        return NotEmptyElements === 9;
    }

    function EndGameCheck() {
        if (ThatPlayerWon(Type.type_o)) return {
            EndGame: true,
            Winner: 'player1 wins'
        }
        if (ThatPlayerWon(Type.type_x)) return {
            EndGame: true,
            Winner: 'player2 wins'
        }
        if (IsDraw())

            return {
                EndGame: true,
                Winner: 'draw'
            };


        else return {
            EndGame: false,
            Winner: Type.none
        };
    }


    return (
        <div
            style={{
                width,
                height,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-around'

            }}
        >
            <IconButton color={'primary'}
            ><Toe onClick={()=>{SetGameField(0, 0)}}
                  type={gameField.field[0][0]}
                  win={winnersField.winners[0][0]}/></IconButton>
            <IconButton color={'primary'}
            ><Toe onClick={()=>{SetGameField(0, 1)}}
                  type={gameField.field[0][1]}
                  win={winnersField.winners[0][1]}/></IconButton>
            <IconButton color={'primary'}
            ><Toe onClick={()=>{SetGameField(0, 2)}}
                  type={gameField.field[0][2]}
                  win={winnersField.winners[0][2]}/></IconButton>
            <IconButton color={'primary'}
            ><Toe onClick={()=>{SetGameField(1, 0)}}
                  type={gameField.field[1][0]}
                  win={winnersField.winners[1][0]}/></IconButton>
            <IconButton color={'primary'}
            ><Toe onClick={()=>{SetGameField(1, 1)}}
                  type={gameField.field[1][1]}
                  win={winnersField.winners[1][1]}/></IconButton>
            <IconButton color={'primary'}
            ><Toe onClick={()=>{SetGameField(1, 2)}}
                  type={gameField.field[1][2]}
                  win={winnersField.winners[1][2]}/></IconButton>
            <IconButton color={'primary'}
            ><Toe onClick={()=>{SetGameField(2, 0)}}
                  type={gameField.field[2][0]}
                  win={winnersField.winners[2][0]}/></IconButton>
            <IconButton color={'primary'}
            ><Toe onClick={()=>{SetGameField(2, 1)}}
                  type={gameField.field[2][1]}
                  win={winnersField.winners[2][1]}/></IconButton>
            <IconButton color={'primary'}
            ><Toe onClick={()=>{SetGameField(2,2 )}}
                  type={gameField.field[2][2]}
                  win={winnersField.winners[2][2]}/></IconButton>


            <WinnerAlert player={winner}
            />


        </div>

    );

};


export default Game;
