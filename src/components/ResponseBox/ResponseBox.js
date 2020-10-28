import React from 'react';

import { Box, Button, Typography } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';


import styles from './ResponseBox.module.css';
import cn from 'classnames';

const ResponseBox = ({ correctAnswer, result, onNextClick }) => {
    return (
             <Box className={result ? cn(styles.container, styles.correct) : cn(styles.container, styles.incorrect)}>
                <div className={styles.textContainer}>
                    <Typography className={styles.text}>
                        {result ? `Gratulacje! Twoja odpowiedź jest prawidłowa` :
                                    `Niestety, Twoja odpowiedź jest nieprawidłowa. Prawidłowa odpowiedź to "${correctAnswer}" `}
                    </Typography> 
                </div>
                <div className={styles.buttonContainer}>            
                    <Button variant='contained' onClick={() => onNextClick()}>{'NASTĘPNE'}<NavigateNext/></Button>
                </div>
            </Box>
         
           
    )
}

 




export default ResponseBox;