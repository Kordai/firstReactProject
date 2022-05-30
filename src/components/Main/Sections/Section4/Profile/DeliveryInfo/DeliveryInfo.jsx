import React from 'react';
import s from './DeliveryInfo.module.css';
import ModuleTextLabel from '../Moduls/ModuleTextLabel';

const DeliveryInfo = (props) => {

    let attributes =
        [
            "Coffee ",
            "Milk ",
            "Cups ",
            "Sugar "
        ]

    let value =
        [
            0,
            0,
            0,
            0
        ]

       
    props.state.map(val => {  
        value[0] += parseFloat(val.coffee)
        value[1] += parseFloat(val.milk)
        value[2] += parseInt(val.caps350)
        value[3] += parseFloat(val.sugar)
        return val    
    })

    let stockModule = attributes.map((val, i) => <ModuleTextLabel teg={val} text={value[i]} key={val} />)

    return <>
        <div className={s.info}>
            <span className={s.teguser}>Delivery Info</span>
            <div className={s.stockModule}>
                {stockModule}
            </div>
        </div>
    </>
}

export default DeliveryInfo