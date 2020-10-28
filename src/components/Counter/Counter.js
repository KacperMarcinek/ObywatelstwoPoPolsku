import React from 'react';

import { Typography } from '@material-ui/core';

import styles from './Counter.module.css';
import cn from 'classnames';

const Counter = ( { currentIndex } ) => {
    return (
        <div className={cn(styles.container)}>
            <Typography variant="subtitle1" className={styles.text}>
                {`Pytanie ${currentIndex + 1} z 20`}
            </Typography>
        </div>
    )
}

export default Counter;