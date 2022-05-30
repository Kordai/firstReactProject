import React from 'react';
import s from './Stock.module.css';
import ModuleTextLabel from '../Moduls/ModuleTextLabel';

const Stock = (props) => {
    let stockAttributes =
        [
            "Coffee ",
            "Milk ",
            "Cups ",
            "Sugar "
        ]

    let stockModule = stockAttributes.map(val => <ModuleTextLabel teg={val} text="0" key={val} />)
    let GAS1 = props.state.filter((f) => { return f.point === "GAS1" })
    let GAS2 = props.state.filter((f) => { return f.point === "GAS2" })
    let Mart1 = props.state.filter((f) => { return f.point === "Mart1" })
    let Mart2 = props.state.filter((f) => { return f.point === "Mart2" })

    return <>
        <div className={s.stock}>
            <span className={s.teguser}>Stock</span>
            <div className={s.stockModule}>
                {stockModule}
            </div>
            <div className={s.stockModule1}>
                <ModuleTextLabel teg="Point GAS1" text={GAS1.length}/>
                <ModuleTextLabel teg="Point GAS2" text={GAS2.length}/>
                <ModuleTextLabel teg="Point Mart1" text={Mart1.length}/>
                <ModuleTextLabel teg="Point Mart2" text={Mart2.length}/>
            </div>
        </div>
    </>
}

export default Stock