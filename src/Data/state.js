let store = {
    state: {
        section1: [
            {
                titleCharts: "Продажи кофе с собой",
                data: [
                    ["Name", "Sales"],
                    ["АЗС 1", 200],
                    ["АЗС 2", 50],
                    ["Вкусмарт 1", 250],
                    ["Вкусмарт 2", 280],
                    ["Магазин", 320],
                ]
            },
            {
                titleCharts: "Поступление оплаты",
                data: [
                    ["Name", "Sales"],
                    ["АЗС 1", 80000],
                    ["АЗС 2", 35000],
                    ["Вкусмарт 1", 90000],
                    ["Вкусмарт 2", 95000],
                    ["Магазин", 93000],
                ]
            },
            {
                titleCharts: "Отгружено ингредиентов",
                data: [
                    ["Name", "Sales"],
                    ["Молоко", 5000],
                    ["Шоколад", 3000],
                    ["Сахар", 6000],
                    ["Размешиватель", 4000],
                    ["Стаканчик", 1000],
                ]
            },
            {
                titleCharts: "Отгружено Кофе",
                data: [
                    ["Name", "Sales"],
                    ["АЗС 1", 2000],
                    ["АЗС 2", 500],
                    ["Вкусмарт 1", 1500],
                    ["Вкусмарт 2", 1500],
                    ["Магазин", 2000],
                ]
            }
        ],
        section2: [
            {
                data: [
                    ["Месяц", "АЗС 1", "АЗС 2", "Вкусмарт1", "Вкусмарт1", "Магазин"],
                    ["Январь", 80000, 25000, 75000, 70000, 80000],
                    ["Февраль", 65000, 30000, 80000, 55000, 44000],
                    ["Март", 55000, 40000, 55000, 65000, 55000],
                    ["Апрель", 90000, 70000, 115000, 90000, 90000],
                    ["Май", 95000, 65000, 120000, 95000, 93000],
                    ["Июнь", 101000, 55000, 115000, 125000, 95000],
                    // ["Июль", 80000, 25000, 75000, 70000, 80000],
                    // ["Август", 80000, 25000, 75000, 70000, 80000],
                    // ["Сентябрь", 80000, 25000, 75000, 70000, 80000],
                    // ["Октябрь", 80000, 25000, 75000, 70000, 80000],
                    // ["Ноябрь", 80000, 25000, 75000, 70000, 80000],
                    // ["Декабрь", 80000, 25000, 75000, 70000, 80000],
                ],
                options: {
                    chart: {
                        title: "График доходности",
                        subtitle: "Доход кофе точек за 1 полугодие 2021 год.",
                    },
                }
            },
            {
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
                ],
                options: {
                    chart: {
                        title: "График продаж кофе",
                        subtitle: "Количество проданного кофе за 1 полугодие 2021 год.",
                    },
                }
            }

        ],
        section3: {
            formName: "Payment",
            inputMark: {
                Point: "",
                Customer: "",
                Payment: "",
                Month: ""
            },
            headTable: ["Naber", "Point", "Customer", "Payment", "Month"],
            data: [
                ["1", "Mart1", "LLC MART1", 75000, "January"],
                ["2", "Mart2", "LLC MART2", 90000, "January"],
                ["3", "GasStation1", "LLC GAS", 75000, "January"],
                ["4", "GasStation2", "LLC GAS", 60000, "January"],
                ["5", "Mart1", "LLC MART1", 79000, "March"],
                ["6", "Mart2", "LLC MART2", 100000, "March"],
                ["7", "GasStation1", "LLC GAS", 57000, "March"],
                ["8", "GasStation2", "LLC GAS", 85000, "March"],
                ["9", "Mart1", "LLC MART1", 79000, "May"],
                ["10", "Mart2", "LLC MART2", 100000, "May"],
                ["11", "GasStation1", "LLC GAS", 57000, "May"]
            ],
            dataChart: [
                ["Month", "Payment"],
                ["January", 330000],
                ["February", 274000],
                ["March", 270000],
                ["April", 465000],
                ["May", 468000],
                ["June", 501000],
                ["July", 330000],
                ["August", 330000],
                ["September", 250000],
                ["October", 450000],
                ["November", 400000],
                ["December", 350000],
            ],
            options: {
                title: "Company Payments",
                hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                chartArea: { width: "80%", height: "70%" }
            }

        },
        applications: {
            formName: "Application",
            inputMark: {
                Point: "",
                Coffee: "",
                Milk: "",
                Cups: "",
                Sugar: "",
                Data: ""
            },
            headTable: ["Naber", "Point", "Coffee", "Milk", "Cups", "Sugar", "Data"],
            data: [
                ["1", "Mart1", 1, 2, 200, 2, "12-10-2021"],
                ["2", "Mart2", 1, 2, 300, 2, "13-10-2021"],
                ["3", "GasStation1", 1, 2, 100, 2, "13-10-2021"],
                ["4", "GasStation2", 1, 2, 100, 2, "14-10-2021"],
                ["5", "Mart1", 1, 2, 100, 2, "15-10-2021"],
                ["6", "Mart2", 1, 2, 100, 2, "16-10-2021"],
                ["7", "GasStation1", 1, 2, 50, 2, "16-10-2021"],
                ["8", "GasStation2", 1, 2, 50, 2, "18-10-2021"],
                ["9", "Mart1", 1, 2, 200, 2, "01-11-2021"],
                ["10", "Mart2", 1, 2, 200, 2, "12-11-2021"],
                ["11", "GasStation1", 1, 2, 200, 2, "13-11-2021"],
                ["12", "GasStation2", 1, 2, 50, 2, "18-12-2021"],
                ["13", "Mart1", 1, 2, 200, 2, "01-01-2022"],
                ["14", "Mart2", 1, 2, 200, 2, "12-01-2022"],
                ["15", "GasStation1", 1, 2, 200, 2, "13-01-2022"]
            ]
        }

    }
}

export let inputUpdate = (name, value, idForm) => {
    if (idForm === store.state.section3.formName) {
        updatePayment(name, value);
    } else if (idForm === store.state.applications.formName) {
        updateApplication(name, value);
    }
};
let updatePayment = (name, value) => {
    let obj = store.state.section3.inputMark;
    for (let i in obj) {
        if (i === name) {
            obj[i] = value;
        }
      }
      console.log(obj);
};
let updateApplication = (name, value) => {
    let obj = store.state.applications.inputMark;
    for (let i in obj) {
        if (i === name) {
            obj[i] = value;
        }
      }
      console.log(obj);
}

export default store;