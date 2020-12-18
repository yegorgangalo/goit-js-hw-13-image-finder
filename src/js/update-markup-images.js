import * as basicLightbox from 'basiclightbox';
import imageHandleBar from '../template/image-template.hbs'
/* ------------------------------------------------------ */

/* ------------------------------ */
import { Spinner } from 'spin.js';
const opts = {
  color: 'rgba(0, 0, 0, 0.5)',
};
const spinner = new Spinner(opts);
/* ------------------------------ */

const updateMarkup = {
    refs: {
        ul: document.querySelector('.gallery'),
    },

    clearMarkupImages() {
        this.refs.ul.textContent = '';
    },

    updateMarkupImages(dataObj) {
        const markUp = imageHandleBar(dataObj);
        this.refs.ul.insertAdjacentHTML('beforeend', markUp);
        this.onImgClickAddEventLightboxOpen();
    },

    onImgClickAddEventLightboxOpen() {
        const collectionPhotoNew = document.querySelectorAll('.photo-card img');
        collectionPhotoNew.forEach(photo => photo.addEventListener('click', this.openLightboxBigImage));
    },

    // arrayPhoto: [],//2-ий спосіб
    // onImgClickAddEventLightboxOpen() {
    //     const collectionPhotoNew = document.querySelectorAll('.photo-card img');
    //     const arrayPhotoNew = [...collectionPhotoNew];
    //     const arrayPhotoOldLength = this.arrayPhoto.length;
    //     arrayPhotoNew.splice(0, arrayPhotoOldLength);
    //     this.arrayPhoto = [...arrayPhotoNew];
    //     this.arrayPhoto.forEach(photo => photo.addEventListener('click', this.openLightboxBigImage));
    // },

    // onImgClickAddEventLightboxOpen() {//3-ій спосіб
    //     const collectionPhotoNew = document.querySelectorAll('.photo-card img');
    //     collectionPhotoNew.forEach(photo => photo.onclick = this.openLightboxBigImage);// можна і так, але тоді більше нічого не повісиш на елемент, зате не накладаютсья події
    // },

    openLightboxBigImage ({ target }) {
        spinner.spin(this.parentNode);
        spinner.el.style.position = 'fixed';
        const srcBigImg = target.dataset.fullSize;
        const lightBox = basicLightbox.create(`
    		<img width="1400" height="900" src="${srcBigImg}">
        `);
        lightBox.show() &&
            setTimeout(() => {
                spinner.stop();
            }, 250);
    },
};

export default updateMarkup;