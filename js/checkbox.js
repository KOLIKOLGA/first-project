const checkbox = () => {
   const checkboxButtons = document.getElementById('checkbox__buttons');
   const checkboxButton = document.querySelectorAll('.checkbox__item');
   const checkboxSpan = document.querySelectorAll('.checkbox__span');


   console.log(checkboxSpan);
   console.log(checkboxButtons);
   console.log(checkboxButton);

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
   };

};

checkbox();