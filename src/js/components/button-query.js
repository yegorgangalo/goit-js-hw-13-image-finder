export default class buttonLoad {
    constructor({selector, hidden = false}) {
        this.refs = this.getRefs(selector);
        hidden && this.hide();
    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.spinner= refs.button.querySelector('.spinner');
        refs.btnText = refs.button.querySelector('.btn-text');
        return refs;
    }

    enable() {
        this.refs.spinner.classList.add('is-hidden');
        this.refs.button.removeAttribute('disabled');
        this.refs.btnText.textContent = 'More...';
    }

    disable() {
        this.refs.spinner.classList.remove('is-hidden');
        this.refs.button.setAttribute('disabled', '');
        this.refs.btnText.textContent = 'Loading...';
    }

    show() {
        this.refs.button.classList.remove('is-hidden');
    }

    hide() {
        this.refs.button.classList.add('is-hidden');
    }
}

// export default {
//     refs: {
//         button: document.querySelector('button'),
//         spinner: document.querySelector('.spinner'),
//         btnText: document.querySelector('.btn-text'),
//     },

//     enable() {
//         this.refs.spinner.classList.add('is-hidden');
//         this.refs.button.removeAttribute('disabled');
//         this.refs.btnText.textContent = 'More...';
//     },

//     disable() {
//         this.refs.spinner.classList.remove('is-hidden');
//         this.refs.button.setAttribute('disabled', '');
//         this.refs.btnText.textContent = 'Loading...';
//     },

//     show() {
//         this.refs.button.classList.remove('is-hidden');
//     },

//     hide() {
//         this.refs.button.classList.add('is-hidden');
//     },
// };