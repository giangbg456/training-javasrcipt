const colorsArray = ["green", "red", "orange", "purpose", "AliceBlue", "Aqua", "Black" ] 

const btnClick = document.querySelector('.btn')

const color = document.querySelector('.color')

btnClick.addEventListener('click', () => {
    const number = random();

    document.body.style.background = colorsArray[number]
    color.textContent =  colorsArray[number]
})

function random () {
    return Math.floor(Math.random()* colorsArray.length)
}