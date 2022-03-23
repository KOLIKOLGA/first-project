const radioItems = document.getElementById('radio__buttons');
// ищем по классу ставим точку
const radioItem = document.querySelectorAll('.radio__item');

console.log(radioItem); // это сами кнопки type = button nodelist
const radioItemArray = Array.prototype.slice.call(radioItem); // перевели нодлист в Array
console.log(radioItemArray);

radioItemArray.forEach((el, i) => {
   el.addEventListener('click', e => {
      // console.log(el.dataset.itemid);
      // console.log(el.classList);
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



radioItem.forEach((button, index) => {
   //console.log(button); //выводит каждую кнопку
   // console.log(index); //выводит index каждой кнопки
   button.addEventListener('click', (e) => {
      console.log(e.target.classList);
   });
}); // перебираем кнопки