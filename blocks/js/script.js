const radioItems = document.getElementById('radio__buttons');
// ищем по классу ставим точку
const radioItem = document.querySelectorAll('.radio__item');
// const radioButton = document.querySelectorAll('input[type="radio"]')

const radioItemArray = Array.prototype.slice.call(radioItem); // перевели нодлист в Array


radioItemArray.forEach((el, i) => {
   el.addEventListener('click', e => {
      console.log(el.dataset.itemid);
      console.log(el.classList);

   });

});

radioItemArray.forEach(item => {
   item.addEventListener('click', (e) => {
      radioItemArray.forEach(el => {
         el.classList.remove('radio__border_red');
      });
      item.classList.add('radio__border_red');

   });
});

console.log(radioItem); // это сами кнопки type = button nodelist
console.log(radioItemArray); // Array из нод листа
// console.log(radioButton)

radioItem.forEach((button, index) => {
   //console.log(button); //выводит каждую кнопку
   // console.log(index); //выводит index каждой кнопки
});
// перебираем кнопки