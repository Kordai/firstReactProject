import React from 'react';
import s from './DeliveryInfo.module.css';
import ModuleTextLabel from '../Moduls/ModuleTextLabel';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const DeliveryInfo = (props) => {


    let attributes =
        [
            "Coffee",
            "Milk",
            "Cups",
            "Sugar"
        ]

    let value = {}

    value = props.mapArray(props.state, "Info")

    let stockModule = attributes.map((val, i) => <ModuleTextLabel teg={val} text={value[val]} key={val} />)

    return <>
        <div className={s.info}>
            <span className={s.teguser}>Delivery Info</span>
            <div className={s.stockModule}>
                {stockModule}
            </div>
            <div className={s.chart}>
                <BarChart width={700} height={300} data={props.deliveryInfo}>
                    <XAxis dataKey="name" stroke="#00ffff" />
                    <YAxis stroke="#00ffff" />
                    <Tooltip itemStyle={{ color: '#282c34' }} contentStyle={{ backgroundColor: '#727e94', color: '#282c34' }} cursor={{ fill: '#727e94' }} />
                    <Legend wrapperStyle={{ bottom: 0, right: 0, backgroundColor: '#727e94', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
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