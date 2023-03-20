import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const stepInput = inputForm.step.value;

  const delayInput = inputForm.delay.value;

  const amountInput = inputForm.amount.value;
  let delayTime = Number(delayInput);
  console.log(delayTime);
  for (let i = 1; i <= amountInput; i++) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += Number(stepInput);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
