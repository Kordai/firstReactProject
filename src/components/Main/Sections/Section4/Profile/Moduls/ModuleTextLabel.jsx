import React from 'react';
import s from './ModuleTextLabel.module.css';

const ModuleTextLabel = (props) => {
    return <div className={s.data}>
    <span className={s.tegdata}>{props.teg}</span>
    <span className={s.text}> {props.text}</span>    
</div>
}

export default ModuleTextLabel