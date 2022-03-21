const radioItems = document.getElementById('radio__buttons');
// ищем по классу ставим точку
const radioItem = document.querySelectorAll('.radio__item');
const radioItemBorder = document.querySelectorAll('.radio__item_border')

console.log(radioItem); // это сами кнопки type = button nodelist
const radioItemArray = Array.prototype.slice.call(radioItem)
console.log(radioItemArray)

radioItemArray.forEach((el, i) => {
   el.addEventListener('click', e => {
      console.log('tada')
   })
   console.log(radioItemArray);
})

radioItem.forEach((button, index) => {
   console.log(button); //выводит каждую кнопку
   //console.log(index); //выводит index каждой кнопки

}); // перебираем кнопки