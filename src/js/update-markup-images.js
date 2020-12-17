import * as basicLightbox from 'basiclightbox';
import imageHandleBar from '../template/image-template.hbs'
/* ------------------------------------------------------ */

export default {
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
        collectionPhotoNew.forEach(photo => photo.removeEventListener('click', this.openLightboxBigImage));
        collectionPhotoNew.forEach(photo => photo.addEventListener('click', this.openLightboxBigImage));
    },

    // arrayPhoto: [],//спосіб замість removeEventListener
    // onImgClickAddEventLightboxOpen() {
    //     const collectionPhotoNew = document.querySelectorAll('.photo-card img');
    //     const arrayPhotoNew = [...collectionPhotoNew];
    //     const arrayPhotoOldLength = this.arrayPhoto.length;
    //     arrayPhotoNew.splice(0, arrayPhotoOldLength);
    //     this.arrayPhoto = [...arrayPhotoNew];
    //     this.arrayPhoto.forEach(photo => photo.addEventListener('click', this.openLightboxBigImage));
    // },

    // onImgClickAddEventLightboxOpen() {
    //     const collectionPhotoNew = document.querySelectorAll('.photo-card img');
    //     collectionPhotoNew.forEach(photo => photo.onclick = this.openLightboxBigImage);// можна і так, але тоді більше нічого не повісиш на елемент, зате не накладаютсья події
    // },

    openLightboxBigImage({ target }) {
        const srcBigImg = target.dataset.fullSize;
        const lightBox = basicLightbox.create(`
    		<img width="1400" height="900" src="${srcBigImg}">
        `);
        lightBox.show();
    },
};