import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormData, 500));

const formData = {};

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
dataFromLocalStorage();
function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};
