import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');

let data = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};

email.value = data.email ?? '';
message.value = data.message ?? '';

form.addEventListener('submit', submitForm);
form.addEventListener('input', throttle(changeInput, 500));

function changeInput(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

function submitForm(event) {
  event.preventDefault();
  form.reset();
  localStorage.removeItem("feedback-form-state");
  console.log(data);
  data = {};
}