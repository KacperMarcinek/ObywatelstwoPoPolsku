import React, { useState, useEffect} from 'react';

import { Avatar, List, ListItem, Typography } from '@material-ui/core';

import styles from './AnswerList.module.css';

const AnswerList = ({ answers, onGetAnswer }) => {
    const [listDisable, setListDisable] = useState(true);

    useEffect(() => {
        setListDisable(false);
    }, [answers])
   

    const onAnswerClick = (selectedAnswer) => {
        setListDisable(true);
        onGetAnswer(selectedAnswer);
      
    }

    let index = 0;
    const letterArray = ['A', 'B', 'C', 'D'];

    const renderedAnswers = answers.map((answer) => {
        const letter = letterArray[index];
        index++;
		return (
            <div key={index} className={styles.listItem} onClick={() => onAnswerClick(answer)}>
                <ListItem disableGutters divider button>
                    <Avatar variant='rounded'>{letter}</Avatar>
				    <Typography className={styles.text}>
                        {answer}
                    </Typography>
			    </ListItem>
            </div>
		);
            
			
    });
    
    return (
        <div className={styles.container}>
            <List className={listDisable ? styles.listDisable : ''} disablePadding >{renderedAnswers}</List>
        </div>
    )
}

export default AnswerList;