const radioItems = document.getElementById('radio__buttons');
// ищем по классу ставим точку
const radioItem = document.querySelectorAll('.radio__item');
const radioItemBorder = document.querySelectorAll('.radio__item_border');
const radioFake = document.querySelector('.radio__fake');
const radioFakeAfter = document.querySelector('.radio__fake_after')

console.log(radioItem); // это сами кнопки type = button nodelist
const radioItemArray = Array.prototype.slice.call(radioItem);
console.log(radioItemArray);

radioItemArray.forEach((el, i) => {
   el.addEventListener('click', e => {
      // console.log('tada');
      console.log(el.classList);
      console.log(el.dataset.itemid);

   });

});



radioItem.forEach((button, index) => {
   //console.log(button); //выводит каждую кнопку
   // console.log(index); //выводит index каждой кнопки
   button.addEventListener('click', (e) => {
      console.log(e.target.classList);
      if (radioFakeAfter) {
         console.log('radio')
      }
   })
}); // перебираем кнопки