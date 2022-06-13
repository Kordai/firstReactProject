import React from 'react';
import s from './ModuleTextLabel.module.css';

const ModuleTextLabel = ({teg, text}) => {
    return <div className={s.data}>
    <span className={s.tegdata}>{teg}</span>
    <span className={s.text}> {text}</span>    
</div>
}

export default ModuleTextLabel