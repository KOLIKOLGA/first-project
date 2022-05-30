function stepForm() {
   const steps = document.querySelectorAll('.form__step');
   const prefBtn = document.querySelector('.prev__step');
   const nextBtn = document.querySelector('.next__step');
   const form = document.querySelector('.form__steps');
   const stepsNumber = document.querySelectorAll('.step__number');
   const progres = document.querySelector('.step__progress_success');
   const finishBlock = document.querySelector('.finish');
   const formFinish = document.querySelector('.steps');

   console.log(formFinish)

   form.addEventListener('sabmit', (e) => e.defaultPrevented());

   let formStep = 0;

   prefBtn.addEventListener('click', () => {
      formStep--

      stepsNumber[formStep + 1].classList.remove('active__namber');

      updateFormSteps()
   }); // при клике на синюю кнопку будет показываться предыдущая форма



   nextBtn.addEventListener('click', () => {
      if (formStep < steps.length - 1) {
         formStep++
         updateFormSteps()
      }
   }); // при клике на красную кнопку покажется следующаяя форма




   function updateFormSteps() {
      steps.forEach(step => {
         step.classList.contains('_active') && step.classList.remove('_active');

      });

      steps[formStep].classList.add('_active'); // делает видимой форму
      stepsNumber[formStep].classList.add('active__namber');

      if (formStep === 0) {
         prefBtn.style.display = 'none'; // убираем видимость кнопки 'back' на начале опроса
      } else {
         prefBtn.style.display = 'block'; // делаем ее видимой на следующих шагах
      }
      if (formStep === steps.length - 1) {

         nextBtn.innerHTML = 'Finish';

         console.log(nextBtn.textContent)

         nextBtn.addEventListener('click', () => {
            finishBlock.style.display = 'block';
            formFinish.style.display = 'none';
            prefBtn.style.display = 'none';
            nextBtn.style.display = 'none';
         });

      } else {
         nextBtn.innerHTML = 'Next'; // это пока не работает ,показывает ошибку
      }






      const procent = ((stepsNumber[formStep].id - 1) / ((steps.length) - 1)) * (100) + '%';

      progres.style.width = procent;

   }
   updateFormSteps()

}
stepForm()