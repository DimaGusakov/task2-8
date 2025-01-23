//Задание 1
//Описать в html тег input и тег ul. По нажатию на клавишу в инпуте 
//в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
const input = document.querySelector('input')
const ul = document.querySelector('ul')
input.addEventListener('keydown', event =>{
  const li = document.createElement('li')
  li.textContent = event.key
  ul.append(li)
})

// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, 
// как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value
input.addEventListener('keyup', () => console.log(input.value))

// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, 
// добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
const button = document.querySelector('button')
button.addEventListener('click', event => {
  event.preventDefault()
  const li = document.createElement('li')
  li.textContent = input.value
  ul.append(li)
  
  input.value = ''

})

