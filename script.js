const currOne = document.getElementById('currency-one')
const currTwo = document.getElementById('currency-two')
const amtOne = document.getElementById('amount-one')
const amtTwo = document.getElementById('amount-two')
const swap = document.getElementById('swap')
const rate = document.getElementById('rate')

// Fetch exchange rates and update DOM
const calculate = ()=>{
    currency_one = currOne.value
    currency_two = currTwo.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const rates = data.rates[currency_two]

            rate.innerText = `1 ${currency_one} = ${rates}${currency_two}`

            amtTwo.value = (amtOne.value * rates).toFixed(2)
        })
}

// Event Listeners
currOne.addEventListener('change',calculate)
currTwo.addEventListener('change',calculate)
amtOne.addEventListener('input',calculate)
amtTwo.addEventListener('input',calculate)

swap.addEventListener('click',()=>{
    const temp = currOne.value
    currOne.value = currTwo.value
    currTwo.value = temp
    calculate()
})



calculate()