import * as basicLightbox from 'basiclightbox';
import imageHandleBar from '../template/image-template.hbs'
/* ------------------------------------------------------ */

export default {
    refs: {
        ul: document.querySelector('.gallery'),
    },
    arrayPhoto: [],

    clearMarkupImages() {
        this.refs.ul.textContent = '';
    },

    updateMarkupImages(dataObj) {
        const markUp = imageHandleBar(dataObj);
        this.refs.ul.insertAdjacentHTML('beforeend', markUp);
        this.onImgClickAddEventLightboxOpen();
    },

    onImgClickAddEventLightboxOpen() {
        const arrayPhotoOldLength = this.arrayPhoto.length;
        const collectionPhotoNew = document.querySelectorAll('.photo-card img');
        const arrayPhotoNew = [...collectionPhotoNew];
        arrayPhotoNew.splice(0, arrayPhotoOldLength);
        this.arrayPhoto = [...arrayPhotoNew];
        // this.arrayPhoto.forEach(photo => photo.removeEventListener('click', openBigImage)); //чому не працює?
        this.arrayPhoto.forEach(photo => photo.addEventListener('click', this.openLightboxBigImage));
        // ArrayPhoto.forEach(photo => photo.onclick = openBigImage);// можна і так, але тоді більше нічого не повісиш на елемент, зате не накладаютсья події
    },

    openLightboxBigImage({ target }) {
        const srcBigImg = target.dataset.fullSize;
        const lightBox = basicLightbox.create(`
    		<img width="1400" height="900" src="${srcBigImg}">
        `);
        lightBox.show();
    },
};