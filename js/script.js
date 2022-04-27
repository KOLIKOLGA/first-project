const interestsCheckBox = document.querySelectorAll('.interests__text');


const interestsItem = document.querySelectorAll('.interests__item');
const interestsTextChecked = document.querySelectorAll('.interests__text_checked')


console.log(interestsCheckBox);
console.log(interestsItem);




// interestsCheckBox.forEach(item => {
//    item.addEventListener('click', (e) => {
//       console.log(e)
//       item.classList.toggle('interests__text_checked');

//    })
// });

const activeElems1 = [];

function activeElemClick1() {
   let index = activeElems1.indexOf(this);
   if (index >= 0) { // Элемент был активным
      this.classList.remove("interests__text_checked");
      activeElems1.splice(index, 1);
   } else if (activeElems1.length < 2) { // Элемент не был активным и можно добавить
      this.classList.add("interests__text_checked");
      activeElems1.push(this);
   }
}
for (let e of interestsCheckBox) {
   e.addEventListener(`click`, activeElemClick1);
};