const radio = () => {

   const radioItem = document.querySelectorAll('.radio__item');
   // const radio = document.querySelectorAll('.radio');
   // const radioText = document.querySelectorAll('.radio__text')

   radioItem.forEach((item) => {
      item.addEventListener('click', () => {
         radioItem.forEach((e) => {
            e.classList.remove('radio__border_red');
         });
         item.classList.add('radio__border_red');

      });
   });

   radioItem.forEach((el, i) => {
      el.addEventListener('click', () => {
         console.log(el.dataset.itemid);
         console.log(el.classList);

      });

   });

};

radio();