document.addEventListener('DOMContentLoaded', () => {
    let money = document.querySelector('.money')
    let month = document.querySelector('.month')
    let percent = document.querySelector('.percent')


    money.addEventListener('input', calculator)
    month.addEventListener('change', calculator)
    percent.addEventListener('input', calculator)

    function calculator() {
        let initialMoney = money.value
        let years = month.value / 12
        let actualPercents = percent.value * 0.01

        let result = Math.round(initialMoney * (1 + actualPercents * years))

        let height = Math.round (result / initialMoney * 100) + 'px'

        document.getElementById('money_diagram_after').style.height = height
        document.getElementById('money_before').innerHTML = initialMoney
        document.getElementById('money_after').innerHTML = result
    }

    calculator()
})