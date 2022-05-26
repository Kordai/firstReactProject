import React from 'react';
import s from './Stock.module.css';
import ModuleTextLabel from '../Moduls/ModuleTextLabel';

const Stock = () => {
    let stockAttributes =
        [
            "Coffee ",
            "Milk ",
            "Cups ",
            "Sugar "
        ]

    let stockModule = stockAttributes.map(val => <ModuleTextLabel teg={val} text={val} key={val} />)

    return <>
        <div className={s.stock}>
            <span className={s.teguser}>Stock</span>
            <div className={s.stockModule}>
                {stockModule}
            </div>

        </div>
    </>
}

export default Stock