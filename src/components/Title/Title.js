import React from 'react';

import { Typography } from '@material-ui/core';

import styles from './Title.module.css'
import cn from 'classnames';

const Title = ({ title }) => {
return (
    <div className={cn(styles.container)}>
        <Typography variant='h6' className={cn(styles.text)}>{title}</Typography>
    </div>
)
    

}

export default Title;