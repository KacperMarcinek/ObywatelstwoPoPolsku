import React from 'react';

import { Typography } from '@material-ui/core';

import styles from './QuestionBox.module.css';


const QuestionBox = ({ question }) => {

    return (
        <div className={styles.container}>
            <Typography className={styles.text}>
                {question}
            </Typography>
        </div>
    )
}

export default QuestionBox;