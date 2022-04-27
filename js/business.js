const business = () => {
   const businessInterestsCheckBox = document.querySelectorAll('.business-interests__text')

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
   for (let e of businessInterestsCheckBox) {
      e.addEventListener(`click`, activeElemClick1);
   };
};
business();