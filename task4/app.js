// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input 
// и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. 
// В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), 
// над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем 
// option, мы "забираем" значение  select.value). Результат отображается в div.

// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)

const num1 =  document.querySelector('.num1')
const num2 =  document.querySelector('.num2')
const select =  document.querySelector('select')
const div =  document.querySelector('div')
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
  div.textContent = ''
  event.preventDefault()
  const value1 = +num1.value
  const value2 = +num2.value

  // 1)Способ
  // if (select.value === '+') div.textContent += value1 + value2
  // else if (select.value === '-') div.textContent += value1 + value2
  // else if (select.value === '/') div.textContent += value1 / value2
  // else if (select.value === '*') div.textContent += value1 * value2
  // else div.textContent = 'Выберите действие'
  // 2)Способ
  div.textContent += eval(`${value1} ${select.value} ${value2}`)
})

// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). 
// При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки 
// за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать 
// обработку событий mouseenter, mouseleave на этой кнопке.

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomRGB = () => {
  const red = getRandomInteger(0, 256)
  const green = getRandomInteger(0, 256)
  const blue = getRandomInteger(0, 256)
  return (`rgb(${red},${green},${blue})`)
}  

const btn = document.getElementById('btn')
btn.addEventListener('mouseenter', ()=>{
  btn.style.backgroundColor = `${getRandomRGB()}`
})

btn.addEventListener('mouseleave', () => {
    const angle = getRandomInteger(-180, 181);
    btn.style.transform = `rotate(${angle}deg)`;
});