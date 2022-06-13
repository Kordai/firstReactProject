import React from 'react';
import imgLoading from '../../../image/CurveLoading.gif'
import s from './PreLoader.module.css'

const PreLoader = () => <div className={s.l}> <img src={imgLoading} alt = 'Loading'/></div>
export default PreLoader;