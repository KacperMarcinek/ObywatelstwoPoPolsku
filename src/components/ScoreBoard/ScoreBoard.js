import React from 'react';

import { Paper, Typography } from '@material-ui/core';

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";


import styles from './ScoreBoard.module.css';
import cn from 'classnames';


const ScoreBoard = ({ correctScore, incorrectScore }) => {
    
    return (
        <div className={styles.container}>
            <Paper elevation={1} className={styles.scoreBox}>
                <CheckCircleIcon className={cn(styles.icon, styles.correct)}/>
                <Typography variant='h5' className={cn(styles.score, styles.correct)}>{correctScore}</Typography>
            </Paper>
            <Paper className={styles.scoreBox}>
                <CancelIcon className={cn(styles.icon, styles.incorrect)}/>
                <Typography variant='h5'className={cn(styles.score, styles.incorrect)}>{incorrectScore}</Typography>
            </Paper>
        </div>
    )
}

export default ScoreBoard;