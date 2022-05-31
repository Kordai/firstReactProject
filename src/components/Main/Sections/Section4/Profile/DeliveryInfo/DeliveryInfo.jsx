import React from 'react';
import s from './DeliveryInfo.module.css';
import ModuleTextLabel from '../Moduls/ModuleTextLabel';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
    { name: 'Page A', Coffee: 400, pv: 1400, amt: 2400 },
    { name: 'Page B', Coffee: 300, pv: 1600, amt: 2400 },
    { name: 'Page C', Coffee: 250, pv: 1800, amt: 2400 },
    { name: 'Page D', Coffee: 600, pv: 2000, amt: 2400 },
    { name: 'Page E', Coffee: 550, pv: 2200, amt: 2400 },
    { name: 'Page F', Coffee: 500, pv: 2400, amt: 2400 }
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
                    <Legend width={100} wrapperStyle={{ bottom: 0, right: 250, backgroundColor: '#727e94', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#00ffff" strokeDasharray="5 5" />
                    <Bar dataKey="Coffee" fill="#00ffff" barSize={30} />
                </BarChart>
            </div>

        </div>
    </>
}

export default DeliveryInfo