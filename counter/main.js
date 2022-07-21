const decrease = document.querySelector('.decrease')

const reset = document.querySelector('.reset')

const increase = document.querySelector('.increase')

const showValue = document.getElementById('value')

let count = 0

decrease.addEventListener('click', () => {
    count--
    showValue.textContent = count;
})

reset.addEventListener('click', () => {
    count = 0
    showValue.textContent = count;
})

increase.addEventListener('click', () => {
    count++
    showValue.textContent = count
})