import React from 'react';
import s from './DeliveryInfo.module.css';
import ModuleTextLabel from '../Moduls/ModuleTextLabel';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
    { name: 'January', Coffee: 400, Milk: 1400, Cups: 400, Sugar: 1400},
    { name: 'February', Coffee: 300, Milk: 1600, Cups: 400, Sugar: 1400 },
    { name: 'March', Coffee: 250, Milk: 1800, Cups: 400, Sugar: 1400 },
    { name: 'April', Coffee: 600, Milk: 2000, Cups: 400, Sugar: 1400 },
    { name: 'May', Coffee: 550, Milk: 2200, Cups: 400, Sugar: 1400 },
    { name: 'June', Coffee: 500, Milk: 2400, Cups: 400, Sugar: 1400 },
    { name: 'July', Coffee: 400, Milk: 1400, Cups: 400, Sugar: 1400},
    { name: 'August', Coffee: 300, Milk: 1600, Cups: 400, Sugar: 1400 },
    { name: 'September', Coffee: 250, Milk: 1800, Cups: 400, Sugar: 1400 },
    { name: 'October', Coffee: 600, Milk: 2000, Cups: 400, Sugar: 1400 },
    { name: 'November', Coffee: 550, Milk: 2200, Cups: 400, Sugar: 1400 },
    { name: 'December', Coffee: 500, Milk: 2400, Cups: 400, Sugar: 1400 }
];

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
            <div className={s.chart}>
                <BarChart width={700} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#00ffff" />
                    <YAxis stroke="#00ffff"/>
                    <Tooltip itemStyle={{ color: '#282c34' }} contentStyle={{ backgroundColor: '#727e94', color: '#282c34' }}  cursor={{fill: '#727e94'}}/>
                    <Legend  wrapperStyle={{ bottom: 0, right: 0, backgroundColor: '#727e94', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#00ffff" strokeDasharray="5 5" />
                    <Bar dataKey="Coffee" fill="#00ffff" barSize={7} />
                    <Bar dataKey="Milk" fill="#00ffaa" barSize={7} />
                    <Bar dataKey="Cups" fill="#f56f6f" barSize={7} />
                    <Bar dataKey="Sugar" fill="#6fb4f5" barSize={7} />
                </BarChart>
            </div>

        </div>
    </>
}

export default DeliveryInfo