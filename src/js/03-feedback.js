import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('form.feedback-form'),
    userEmail: document.querySelector('form input'),
    userMessage: document.querySelector('form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
let formData = {
    email: '',
    message: '',
};

