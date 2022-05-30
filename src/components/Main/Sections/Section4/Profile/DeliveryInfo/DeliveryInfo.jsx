import React from 'react';
import s from './DeliveryInfo.module.css';
import ModuleTextLabel from '../Moduls/ModuleTextLabel';
import Chart from "react-google-charts";

const DeliveryInfo = (props) => {

    let dataChart = {
        data: [
            ["Месяц", "АЗС 1", "АЗС 2", "Вкусмарт1", "Вкусмарт1", "Магазин"],
            ["Январь", 350, 150, 220, 165, 230],
            ["Февраль", 320, 170, 225, 180, 250],
            ["Март", 300, 200, 270, 200, 230],
            ["Апрель", 250, 220, 291, 240, 270],
            ["Май", 265, 210, 302, 280, 260],
            ["Июнь", 320, 150, 320, 295, 310],
            // ["Июль", 80000, 25000, 75000, 70000, 80000],
            // ["Август", 80000, 25000, 75000, 70000, 80000],
            // ["Сентябрь", 80000, 25000, 75000, 70000, 80000],
            // ["Октябрь", 80000, 25000, 75000, 70000, 80000],
            // ["Ноябрь", 80000, 25000, 75000, 70000, 80000],
            // ["Декабрь", 80000, 25000, 75000, 70000, 80000],
        ]
    }

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
                <Chart
                    chartType="Bar"
                    width="100%"
                    height="100%"
                    data={dataChart.data}
                    // options={window.google.chart.Bar.convertOptions({
                    //     backgroundColor: "#282c34",
                    //     chart: {
                    //       title: "График поставок",
                    //     },
                    //     backgroundColor:{"fill":"rgb(83, 92, 96)"},
                    //     "titleTextStyle":{
                    //         "color":"#ededed",
                    //         "marginLeft":"50%"
                    //     },
                        
                    //   })}

                      options={{
                        chart: {
                          title: "График поставок"
                        },
                        backgroundColor:{fill:"#282c34"},
                        titleTextStyle:{
                            color:"#282c34"
                        }
                        }
                      }
                   
                />
            </div>

        </div>
    </>
}

export default DeliveryInfo