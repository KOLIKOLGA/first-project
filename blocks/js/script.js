const radioItems = document.getElementById('radio__buttons');
// ищем по классу ставим точку
const radioItem = document.querySelectorAll('.radio__item');
const checkboxButtons = document.getElementById('checkbox__buttons');
const checkboxButton = document.querySelectorAll('.checkbox__item');
const checkboxSpan = document.querySelectorAll('.checkbox__span');
const radioItemArray = Array.prototype.slice.call(radioItem); // перевели нодлист в Array
const checkboxButtonArray = Array.prototype.slice.call(checkboxButton);
const checkboxSpanArray = Array.prototype.slice.call(checkboxSpan);
console.log(checkboxSpan)
console.log(checkboxButtons);
console.log(checkboxButton);

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

function toggleDone(event) {
   console.log(event.target.classList);
};
checkboxButtons.addEventListener('click', toggleDone);



const activeElems = [];

function activeElemClick() {
   let index = activeElems.indexOf(this);
   if (index >= 0) { // Элемент был активным
      this.classList.remove("radio__border_red");
      activeElems.splice(index, 1);
   } else if (activeElems.length < 3) { // Элемент не был активным и можно добавить
      this.classList.add("radio__border_red");
      activeElems.push(this);
   }
}

for (let e of checkboxButton) {
   e.addEventListener(`click`, activeElemClick);
}


const activeElems1 = [];

function activeElemClick1() {
   let index = activeElems1.indexOf(this);
   if (index >= 0) { // Элемент был активным
      this.classList.remove("checkbox__span_red");
      activeElems1.splice(index, 1);
   } else if (activeElems1.length < 3) { // Элемент не был активным и можно добавить
      this.classList.add("checkbox__span_red");
      activeElems1.push(this);
   }
}
for (let e of checkboxSpan) {
   e.addEventListener(`click`, activeElemClick1);
}