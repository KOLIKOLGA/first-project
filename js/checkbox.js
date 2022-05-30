const checkbox = () => {

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

};

checkbox();