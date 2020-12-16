import imageHandleBar from '../template/image-template.hbs'

export default {
    refs: {
        ul: document.querySelector('.gallery'),
    },

    updateMarkupImages(dataObj) {
        const markUp = imageHandleBar(dataObj);
        this.refs.ul.insertAdjacentHTML('beforeend', markUp);
    },

    clearMarkupImages() {
        this.refs.ul.textContent = '';
    }
};