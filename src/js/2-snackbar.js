import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
    form: document.querySelector('.form'),
    inputDelay: document.querySelector('.inputDelay'),
};

refs.form.addEventListener('submit', createPromise);

function createPromise(event) {
    event.preventDefault();
    const delay = event.target.delay.value;
    const status = event.target.state.value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
    promise
        .then(delay => {
            iziToast.success({
                backgroundColor: 'green',
                message: `Fulfilled promise in ${delay} ms`,
                messageColor: '#fff',
                messageSize: '16',
                imageWidth: 302,
                close: true,
                closeOnEscape: true,
                closeOnClick: true,
                progressBar: true,
                progressBarColor: '#b51b1b',
                transitionIn: 'flipInX',
                transitionOut: 'flipOutX',
                iconColor: '#FAFAFB',
            });
        })
        .catch(delay => {
            iziToast.error({
                backgroundColor: 'red',
                message: `Rejected promise  in ${delay} ms`,
                messageColor: '#fff',
                messageSize: '16',
                imageWidth: 302,
                close: true,
                closeOnEscape: true,
                closeOnClick: true,
                progressBar: true,
                progressBarColor: '#b51b1b',
                transitionIn: 'flipInX',
                transitionOut: 'flipOutX',
            });
        });
}

/*
// Custom checkbox
const inputRadioEls = document.querySelectorAll('[name="state"]');

inputRadioEls.forEach(el => {
    const customCheckBox = document.createElement('span');
    customCheckBox.classList.add('custom-checkbox');

    el.parentNode.insertBefore(customCheckBox, el.nextSibling);
});

// -------------------------------------------------------
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const delay = Number(formEl.elements.delay.value);
    const radioEl = formEl.elements.state.value;

    const thisIsPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (radioEl === 'fulfilled') {
                resolve(`Fulfilled promise in ${delay}ms`);
            } else if (radioEl === 'rejected') {
                reject(`Rejected promise in ${delay}ms`);
            }
        }, delay);
    });

    thisIsPromise
        .then(value => {

            iziToast.success({
                title: 'OK',
                message: value,
                titleColor: '#ffffff',
                titleSize: '16',
                messageColor: '#ffffff',
                class: 'resolved-promise',
                backgroundColor: '#59a10d',
                theme: 'dark',
            });
        })

        .catch(error => {

            iziToast.error({
                title: 'Error',
                message: error,
                titleColor: '#ffffff',
                titleSize: '16',
                messageColor: '#ffffff',
                class: 'resolved-promise',
                backgroundColor: '#b51b1b',
                theme: 'dark',
            });
        });

    formEl.reset();
});
// -------------------------------------------------------
*/