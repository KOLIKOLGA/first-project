const checkbox = () => {

   const checkboxSpan = document.querySelectorAll('.checkbox__span');
   const checkboxButton = document.querySelectorAll('input[type="checkbox"]');
   const checkBox = document.getElementById('input[type="checkbox"]');
   console.log(checkboxButton);


   checkboxButton.forEach((item) => {
      item.addEventListener('click', () => {
         console.log(item)
      })
   })

   let f = document;
   f.onchange = () => {
      let n = f.querySelectorAll('[type="checkbox"]'),
         l = f.querySelectorAll('[type="checkbox"]:checked');
      for (let j = 0; j < n.length; j++)
         if (l.length >= 3) { // если отметить три и более галочки
            n[j].disabled = true; // все чекбоксы становятся disabled
            for (let i = 0; i < l.length; i++)
               l[i].disabled = false; // но disabled убирается с помеченных галочками чекбоксов
         } else {
            n[j].disabled = false; // если выделить менее трёх галочек, то disabled снимается со всех чекбоксов
         }
   }

   const activeElems1 = [];


   function activeElemClick1() {
      let index = activeElems1.indexOf(this);
      if (index >= 0) { // Элемент был активным
         this.checked = false;
         activeElems1.splice(index, 1);
      } else if (activeElems1.length < 3) { // Элемент не был активным и можно добавить
         this.checked = true;
         activeElems1.push(this);
      }
   }
   for (let e of checkboxButton) {
      e.addEventListener(`click`, activeElemClick1);
      console.log(e.checked)
   };

};

checkbox();